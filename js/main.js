/**
 * ============================================
 * ALPHABACK - MAIN JAVASCRIPT
 * ============================================
 * 
 * Các chức năng chính:
 * 1. Mobile menu toggle
 * 2. Exchange selector dropdown
 * 3. Custom dropdowns
 * 4. Copy to clipboard
 * 5. Exchange cards rendering & filtering
 * 6. Popup management
 * 
 * ============================================
 */

// ============================================
// CONFIGURATION - DỄ DÀNG THAY ĐỔI
// ============================================

const CONFIG = {
    // Danh sách sàn giao dịch với thông tin
    exchanges: [
        {
            id: 'binance',
            name: 'BINANCE',
            type: 'cex',
            category: 'crypto',
            badge: 'Crypto CEX',
            rebate: 45,
            code: 'Alphaback',
            image: 'https://alphaback.net/wp-content/uploads/2025/10/4f405388204502430eca2cd65ccc4bdc5c2928b9-300x210.png',
            registerUrl: 'https://www.binance.com/join?ref=ALPHABACK',
            guideUrl: 'https://alphaback.net/huong-dan-dang-ki-san-binance/'
        },
        {
            id: 'okx',
            name: 'OKX',
            type: 'cex',
            category: 'crypto',
            badge: 'Crypto CEX',
            rebate: 62,
            code: 'Alphaback',
            image: 'https://alphaback.net/wp-content/uploads/2025/10/c5b9dbf082abc407c9bfbba2e3b56666fe5c6946-300x210.png',
            registerUrl: 'https://www.okx.com/join/ALPHABACK',
            guideUrl: 'https://alphaback.net/huong-dan-dang-ky-san-okx/'
        },
        {
            id: 'bybit',
            name: 'Bybit',
            type: 'cex',
            category: 'crypto',
            badge: 'Crypto CEX',
            rebate: 70,
            code: 'Alphaback',
            image: 'https://alphaback.net/wp-content/uploads/2025/10/2e21bdb42aaed4a2c08219cd75f7d6a2468f6a14-300x300.jpg',
            registerUrl: 'https://www.bybitglobal.com/en/sign-up?affiliate_id=114455&group_id=1477065&group_type=1&ref_code=ALPHABACK',
            guideUrl: 'https://alphaback.net/huong-dan-dang-ky-san-bybit/'
        },
        {
            id: 'bingx',
            name: 'BingX',
            type: 'cex',
            category: 'crypto',
            badge: 'Crypto CEX',
            rebate: 68,
            code: 'Alphaback',
            image: 'https://alphaback.net/wp-content/uploads/2025/10/eefc42f59e79060b4dc37061b14ed94cc18f09a0-300x300.jpg',
            registerUrl: 'https://bingx.com/en/accounts/invite/AlphaBack',
            guideUrl: 'https://alphaback.net/huong-dan-dang-ky-san-bingx/'
        },
        {
            id: 'bitget',
            name: 'Bitget',
            type: 'cex',
            category: 'crypto',
            badge: 'Crypto CEX',
            rebate: 68,
            code: 'Alphaback',
            image: 'https://alphaback.net/wp-content/uploads/2025/10/291886842bb836937e766fd8006921201e11fbfe-300x210.png',
            registerUrl: 'https://www.bitget.com/expressly?channelCode=l6jq&vipCode=ALPHABACK&languageType=0&groupId=627972',
            guideUrl: 'https://alphaback.net/huong-dan-dang-ky-san-bitget/'
        },
        {
            id: 'mexc',
            name: 'MEXC',
            type: 'cex',
            category: 'crypto',
            badge: 'Crypto CEX',
            rebate: 60,
            code: 'mexc-alphaback',
            image: 'https://alphaback.net/wp-content/uploads/2025/10/c7f65e8ef60227471a570dad93b86ddb4e7d7309-300x300.jpg',
            registerUrl: 'https://www.mexc.com/register?shareCode=mexc-alphaback',
            guideUrl: 'https://alphaback.net/huong-dan-dang-ky-san-mexc/'
        },
        {
            id: 'gate',
            name: 'Gate.io',
            type: 'cex',
            category: 'crypto',
            badge: 'Crypto CEX',
            rebate: 78,
            code: 'Alphabac',
            image: 'https://alphaback.net/wp-content/uploads/2025/10/bdc0c79501ff0c1ffda5a5557a5da5cf418341bb-300x300.jpg',
            registerUrl: 'https://www.gate.com/share/vlvdbahwuq',
            guideUrl: 'https://alphaback.net/huong-dan-dang-ky-san-gate-io/'
        },
        {
            id: 'kucoin',
            name: 'KuCoin',
            type: 'cex',
            category: 'crypto',
            badge: 'Crypto CEX',
            rebate: 85,
            code: 'KUCOINBACK',
            image: 'https://alphaback.net/wp-content/uploads/2025/10/Kucoin-alphaback-300x210.png',
            registerUrl: 'https://www.kucoin.com/ucenter/signup?rcode=KUCOINBACK',
            guideUrl: 'https://alphaback.net/huong-dan-dang-ky-san-kucoin/'
        },
        {
            id: 'exness',
            name: 'Exness',
            type: 'forex',
            category: 'forex',
            badge: 'Forex',
            rebate: 100,
            code: 'feho2r26se',
            image: 'https://alphaback.net/wp-content/uploads/2025/11/exness-logo.jpeg',
            registerUrl: 'https://www.exmarkets.markets/?utm_source=partners&ex_ol=1',
            guideUrl: 'https://alphaback.net/huong-dan-dang-ky-san-exness/'
        }
    ],
    
    // Links cho hero selector
    heroLinks: {
        binance: 'https://alphaback.net/huong-dan-dang-ki-san-binance/',
        okx: 'https://alphaback.net/huong-dan-dang-ky-san-okx/',
        bingx: 'https://alphaback.net/huong-dan-dang-ky-san-bingx/',
        bybit: 'https://alphaback.net/huong-dan-dang-ky-san-bybit/',
        bitget: 'https://alphaback.net/huong-dan-dang-ky-san-bitget/',
        mexc: 'https://alphaback.net/huong-dan-dang-ky-san-mexc/',
        gateio: 'https://alphaback.net/huong-dan-dang-ky-san-gate-io/',
        kucoin: 'https://alphaback.net/huong-dan-dang-ky-san-kucoin/',
        exness: 'https://alphaback.net/huong-dan-dang-ky-san-exness/',
        lbank: '#'
    }
};

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
    // Mobile menu
    menuToggle: document.getElementById('menuToggle'),
    menuClose: document.getElementById('menuClose'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileMenuOverlay: document.getElementById('mobileMenuOverlay'),
    
    // Exchange selector (hero)
    exchangeSelect: document.getElementById('exchangeSelect'),
    selectTrigger: document.querySelector('.select-trigger'),
    selectDropdown: document.querySelector('.select-dropdown'),
    selectedExchange: document.getElementById('selectedExchange'),
    exchangeSearch: document.getElementById('exchangeSearch'),
    exchangeOptions: document.getElementById('exchangeOptions'),
    noResults: document.getElementById('noResults'),
    startBtn: document.getElementById('startBtn'),
    
    // Checker form
    exchangeDropdown: document.getElementById('exchangeDropdown'),
    exchangeInput: document.getElementById('exchangeInput'),
    checkerForm: document.getElementById('checkerForm'),
    
    // Exchanges grid
    exchangesGrid: document.getElementById('exchangesGrid'),
    filterBtns: document.querySelectorAll('.filter-btn[data-filter]'),
    sortItems: document.querySelectorAll('[data-sort]'),
    
    // Popups
    loadingOverlay: document.getElementById('loadingOverlay'),
    errorPopup: document.getElementById('errorPopup'),
    errorMessage: document.getElementById('errorMessage'),
    loginPopup: document.getElementById('loginPopup')
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function - delay execution
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
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
 * Copy text to clipboard
 */
async function copyToClipboard(text, buttonElement) {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
        } else {
            // Fallback
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
        
        // Show toast
        showToast(`Đã sao chép: ${text}`);
        
        // Visual feedback on button
        if (buttonElement) {
            const originalText = buttonElement.innerHTML;
            buttonElement.innerHTML = `<span>✓ Đã sao chép</span>`;
            setTimeout(() => {
                buttonElement.innerHTML = originalText;
            }, 2000);
        }
        
        return true;
    } catch (err) {
        console.error('Copy failed:', err);
        showToast('Không thể sao chép. Vui lòng thử lại.');
        return false;
    }
}

/**
 * Show toast notification
 */
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(toast);
    
    // Show animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    // Auto hide
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

/**
 * Show/hide popup
 */
function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Show loading overlay
 */
function showLoading(text = 'Đang kiểm tra...', withCountdown = false) {
    const loadingText = document.getElementById('loadingText');
    if (loadingText) {
        loadingText.textContent = text;
    }
    elements.loadingOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (withCountdown) {
        let seconds = 5;
        loadingText.textContent = `Đang kiểm tra... (${seconds}s)`;
        
        window.countdownInterval = setInterval(() => {
            seconds--;
            if (seconds > 0) {
                loadingText.textContent = `Đang kiểm tra... (${seconds}s)`;
            } else {
                loadingText.textContent = 'Đang xử lý dữ liệu...';
                clearInterval(window.countdownInterval);
            }
        }, 1000);
    }
}

function hideLoading() {
    elements.loadingOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
    }
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const { menuToggle, menuClose, mobileMenu, mobileMenuOverlay } = elements;
    
    if (!menuToggle) return;
    
    function openMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    mobileMenuOverlay.addEventListener('click', closeMenu);
    
    // Close on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// ============================================
// EXCHANGE SELECTOR (HERO)
// ============================================

function initExchangeSelector() {
    const { exchangeSelect, selectTrigger, selectDropdown, selectedExchange, exchangeSearch, exchangeOptions, noResults, startBtn } = elements;
    
    if (!exchangeSelect) return;
    
    let currentExchange = 'binance';
    
    // Toggle dropdown
    selectTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        selectTrigger.classList.toggle('active');
        selectDropdown.classList.toggle('active');
        if (selectDropdown.classList.contains('active')) {
            exchangeSearch.focus();
        }
    });
    
    // Select option
    const options = exchangeOptions.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.dataset.value;
            const text = option.textContent;
            
            // Update UI
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            selectedExchange.textContent = text;
            currentExchange = value;
            
            // Close dropdown
            selectTrigger.classList.remove('active');
            selectDropdown.classList.remove('active');
            exchangeSearch.value = '';
            filterOptions('');
        });
    });
    
    // Search functionality
    exchangeSearch.addEventListener('input', (e) => {
        filterOptions(e.target.value.toLowerCase().trim());
    });
    
    function filterOptions(searchTerm) {
        let hasVisible = false;
        
        options.forEach(option => {
            const text = option.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                option.classList.remove('hidden');
                hasVisible = true;
            } else {
                option.classList.add('hidden');
            }
        });
        
        noResults.classList.toggle('active', !hasVisible);
    }
    
    // Close on click outside
    document.addEventListener('click', () => {
        selectTrigger.classList.remove('active');
        selectDropdown.classList.remove('active');
        exchangeSearch.value = '';
        filterOptions('');
    });
    
    // Start button
    startBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const link = CONFIG.heroLinks[currentExchange];
        if (link && link !== '#') {
            window.location.href = link;
        }
    });
}

// ============================================
// CHECKER FORM DROPDOWN
// ============================================

function initCheckerDropdown() {
    const { exchangeDropdown, exchangeInput } = elements;
    
    if (!exchangeDropdown) return;
    
    const toggle = exchangeDropdown.querySelector('.dropdown-toggle');
    const items = exchangeDropdown.querySelectorAll('.dropdown-item');
    
    // Toggle dropdown
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        exchangeDropdown.classList.toggle('active');
    });
    
    // Select item
    items.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.dataset.value;
            const text = item.textContent;
            
            toggle.innerHTML = `${text} <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            exchangeInput.value = value;
            exchangeDropdown.classList.remove('active');
        });
    });
    
    // Close on click outside
    document.addEventListener('click', () => {
        exchangeDropdown.classList.remove('active');
    });
}

// ============================================
// EXCHANGE CARDS
// ============================================

function renderExchangeCards(exchanges = CONFIG.exchanges) {
    const { exchangesGrid } = elements;
    if (!exchangesGrid) return;
    
    exchangesGrid.innerHTML = exchanges.map(exchange => `
        <div class="exchange-card" data-id="${exchange.id}" data-type="${exchange.type}" data-category="${exchange.category}" data-rebate="${exchange.rebate}">
            <div class="card-image">
                <img src="${exchange.image}" alt="${exchange.name}" loading="lazy">
                <span class="card-badge">${exchange.badge}</span>
            </div>
            <div class="card-content">
                <h4>${exchange.name}</h4>
                <div class="card-row">
                    <span>Mã Giới Thiệu:</span>
                    <span class="copy-code" data-copy="${exchange.code}">
                        ${exchange.code}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    </span>
                </div>
                <div class="card-row">
                    <span>Cơ Chế Hoàn Phí:</span>
                    <span>Up to <strong class="rebate-percent">${exchange.rebate}%</strong></span>
                </div>
                <div class="card-buttons">
                    <a href="${exchange.registerUrl}" target="_blank" class="btn btn-primary">
                        Đăng ký ngay
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                    <a href="${exchange.guideUrl}" class="btn btn-outline">Hướng dẫn</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add copy handlers
    document.querySelectorAll('.copy-code').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.dataset.copy;
            copyToClipboard(code, btn);
        });
    });
}

function initFilters() {
    const { filterBtns, sortItems } = elements;
    let currentFilter = 'all';
    let currentSort = null;
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentFilter = btn.dataset.filter;
            applyFilters();
        });
    });
    
    // Sort items
    sortItems.forEach(item => {
        item.addEventListener('click', () => {
            currentSort = item.dataset.sort;
            applyFilters();
        });
    });
    
    function applyFilters() {
        let filtered = [...CONFIG.exchanges];
        
        // Apply filter
        if (currentFilter !== 'all') {
            if (currentFilter === 'cex') {
                filtered = filtered.filter(e => e.type === 'cex');
            } else if (currentFilter === 'dex') {
                filtered = filtered.filter(e => e.type === 'dex');
            } else if (currentFilter === 'forex') {
                filtered = filtered.filter(e => e.category === 'forex');
            }
        }
        
        // Apply sort
        if (currentSort) {
            filtered.sort((a, b) => {
                if (currentSort === 'desc') {
                    return b.rebate - a.rebate;
                } else {
                    return a.rebate - b.rebate;
                }
            });
        }
        
        renderExchangeCards(filtered);
    }
}

// ============================================
// POPUP CLOSE HANDLERS
// ============================================

function initPopups() {
    // Close on overlay click
    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.popup-overlay.active').forEach(popup => {
                popup.classList.remove('active');
            });
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================

function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', debounce(() => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(24, 24, 23, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '';
            header.style.backdropFilter = '';
        }
        
        lastScroll = currentScroll;
    }, 10));
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initExchangeSelector();
    initCheckerDropdown();
    renderExchangeCards();
    initFilters();
    initPopups();
    initHeaderScroll();
    
    console.log('🚀 Alphaback initialized successfully!');
});

// Export for use in other modules
window.Alphaback = {
    CONFIG,
    elements,
    showPopup,
    closePopup,
    showLoading,
    hideLoading,
    formatCurrency,
    copyToClipboard,
    showToast
};
