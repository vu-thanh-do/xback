/**
 * ============================================
 * XBACK - API JAVASCRIPT
 * ============================================
 * 
 * Xử lý các API calls:
 * - Kiểm tra hoàn phí (check rebate)
 * - Lưu log
 * 
 * ============================================
 */

// ============================================
// CONFIGURATION
// ============================================

const API_CONFIG = {
    // API Key (nếu cần)
    API_KEY: 'da4a8102-0e72-4d76-b8cf-26c113ee9138',
    
    // Sử dụng proxy để tránh CORS
    USE_PROXY: true,
    
    // URLs
    PROXY_URL: 'https://xBack.net/wp-admin/admin-ajax.php',
    DIRECT_API_URL: 'https://api.taphoa.dev/trade-info',
    
    // Nonce cho WordPress AJAX
    NONCE: '723cfdcd23',
    LOG_NONCE: '3da9c335be'
};

// ============================================
// USER STATE (mock - thay bằng thực tế)
// ============================================

const userState = {
    isLoggedIn: false, // Thay đổi thành true nếu user đã đăng nhập
    currentUser: {
        username: '',
        email: '',
        telegram: ''
    }
};

// ============================================
// API FUNCTIONS
// ============================================

/**
 * Kiểm tra hoàn phí qua proxy
 */
async function checkRebateViaProxy(exchange, uid) {
    try {
        const response = await fetch(API_CONFIG.PROXY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'fetch_trading_data',
                exchange: exchange,
                uid: uid,
                nonce: API_CONFIG.NONCE
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return normalizeResponse(data);
        
    } catch (error) {
        console.error('Proxy API Error:', error);
        throw error;
    }
}

/**
 * Kiểm tra hoàn phí trực tiếp
 */
async function checkRebateDirect(exchange, uid) {
    try {
        const url = `${API_CONFIG.DIRECT_API_URL}/${encodeURIComponent(exchange)}/${encodeURIComponent(uid)}`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-API-Key': API_CONFIG.API_KEY
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Format mới: { code: 200, msg: "Success", data: {...} }
        if (data.code === 200 && data.data) {
            return {
                success: true,
                data: {
                    uid: data.data.uid,
                    exchange: data.data.market,
                    volume: data.data.trading_volume ?? null,
                    rebate: data.data.commission ?? null
                }
            };
        }
        
        return { success: false, message: data.msg || 'Không tìm thấy dữ liệu' };
        
    } catch (error) {
        console.error('Direct API Error:', error);
        throw error;
    }
}

/**
 * Normalize response từ API
 */
function normalizeResponse(response) {
    if (!response) return { success: false };
    
    // Format mới: { success: true, data: {...} }
    if (response.success === true && response.data) {
        const d = response.data;
        return {
            success: true,
            data: {
                rebate: d.rebate !== null && d.rebate !== undefined ? d.rebate : '0',
                volume: d.volume !== null && d.volume !== undefined ? d.volume : '0',
                uid: d.uid || '',
                exchange: d.exchange || ''
            }
        };
    }
    
    // Kiểm tra lỗi 402 - UID NOT WHITELISTED
    if (response.data && response.data.raw) {
        const raw = response.data.raw;
        
        if (raw.code === 402 || 
            (raw.detail && raw.detail.toLowerCase().includes('not whitelisted')) ||
            (response.data.message && response.data.message.includes('HTTP 402'))) {
            return {
                success: false,
                errorCode: 'NOT_WHITELISTED',
                message: 'UID này chưa đăng ký dưới xBack'
            };
        }
    }
    
    return { success: false, message: 'Hệ thống đang quá tải, bạn vui lòng kiểm tra lại sau' };
}

/**
 * Lưu log kiểm tra
 */
async function saveCheckLog(data, exchange, uid) {
    if (!userState.isLoggedIn || !userState.currentUser.username) {
        console.warn('⚠️ User chưa đăng nhập, không lưu log');
        return null;
    }
    
    const logData = {
        action: 'save_check_log',
        nonce: API_CONFIG.LOG_NONCE,
        username: userState.currentUser.username,
        email: userState.currentUser.email,
        telegram: userState.currentUser.telegram,
        platform: exchange,
        uid: uid,
        vol: data.volume || '',
        commission: data.rebate || ''
    };
    
    try {
        const response = await fetch(API_CONFIG.PROXY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(logData)
        });
        
        const result = await response.json();
        console.log('✅ Log đã lưu:', result);
        return result;
        
    } catch (error) {
        console.error('❌ Lỗi lưu log:', error);
        return null;
    }
}

// ============================================
// FORM HANDLER
// ============================================

function initCheckerForm() {
    const form = document.getElementById('checkerForm');
    if (!form) return;
    
    const exchangeInput = document.getElementById('exchangeInput');
    const uidInput = document.getElementById('uidInput');
    const volumeResult = document.getElementById('volumeResult');
    const rebateResult = document.getElementById('rebateResult');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Kiểm tra đăng nhập
        if (!userState.isLoggedIn) {
            showLoginPopup();
            return;
        }
        
        const exchange = exchangeInput.value;
        const uid = uidInput.value.trim();
        
        if (!exchange || !uid) {
            showError('Vui lòng chọn sàn và nhập UID.');
            return;
        }
        
        // Show loading với countdown
        window.xBack.showLoading('Đang kiểm tra...', true);
        
        // Delay 5 giây trước khi gửi request
        setTimeout(async () => {
            try {
                let result;
                
                if (API_CONFIG.USE_PROXY) {
                    result = await checkRebateViaProxy(exchange, uid);
                } else {
                    result = await checkRebateDirect(exchange, uid);
                }
                
                if (result.success) {
                    displayResult(result.data, exchange, uid);
                } else {
                    window.xBack.hideLoading();
                    
                    if (result.errorCode === 'NOT_WHITELISTED') {
                        showError('UID này chưa đăng ký dưới xBack');
                    } else {
                        showError(result.message || 'Hệ thống đang quá tải, bạn vui lòng kiểm tra lại sau nhé');
                    }
                }
                
            } catch (error) {
                window.xBack.hideLoading();
                console.error('Check rebate error:', error);
                
                let errorMsg = 'Lỗi khi kết nối API.';
                if (error.message.includes('timeout')) {
                    errorMsg = 'Timeout: API phản hồi quá chậm. Vui lòng thử lại sau.';
                }
                showError(errorMsg);
            }
        }, 5000);
    });
}

/**
 * Hiển thị kết quả
 */
function displayResult(data, exchange, uid) {
    const volumeResult = document.getElementById('volumeResult');
    const rebateResult = document.getElementById('rebateResult');
    
    // Format currency
    if (data.rebate !== undefined && data.rebate !== null) {
        rebateResult.value = formatCurrency(data.rebate);
    } else {
        rebateResult.value = '$0.00';
    }
    
    if (data.volume !== undefined && data.volume !== null) {
        volumeResult.value = formatCurrency(data.volume);
    } else {
        volumeResult.value = '$0.00';
    }
    
    window.xBack.hideLoading();
    
    // Lưu log nếu có dữ liệu hợp lệ
    if (data.volume !== undefined && data.rebate !== undefined) {
        saveCheckLog(data, exchange, uid);
    }
}

/**
 * Format currency
 */
function formatCurrency(value) {
    if (!value || isNaN(value)) return '$0.00';
    return Number(value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
}

/**
 * Show error popup
 */
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = message;
        window.xBack.showPopup('errorPopup');
    }
}

/**
 * Show login popup
 */
function showLoginPopup() {
    window.xBack.showPopup('loginPopup');
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initCheckerForm();
    
    console.log('🔌 xBack API module loaded');
});

// Export API functions
window.xBackAPI = {
    checkRebate: API_CONFIG.USE_PROXY ? checkRebateViaProxy : checkRebateDirect,
    saveCheckLog,
    userState,
    config: API_CONFIG
};



