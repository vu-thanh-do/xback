const fs = require('fs');

// Read the original file
const c = fs.readFileSync('views/pages/index.ejs', 'utf8');
const l = c.split('\n');

// Extract sections by line ranges
function extract(start, end) {
  return l.slice(start - 1, end).join('\n');
}

const hero = extract(8, 1198);
const mobileForm = extract(1202, 1940);
const portfolio = extract(1945, 2556);
const feedback = extract(2561, 2915);
const partners = extract(2916, 3156);
const whyChoose = fs.readFileSync('/tmp/whyChoose_new.txt', 'utf8');
const bottomBanner = extract(3610, 3664);

// NEW sections
const newBotHero = `<section class="section bot-hero-section" id="bot-hero" style="min-height: 100vh; position: relative; display: flex; align-items: center;">
    <div class="section-bg fill" style="position: absolute; inset: 0; z-index: 0;">
        <img loading="lazy" decoding="async" width="1440" height="820"
            src="https://res.cloudinary.com/dsh4kbn2d/image/upload/v1776011825/Gemini_Generated_Image_5n9wd5n9wd5n9wd5_xcqr7t.jpg"
            class="bg attachment-original size-original" alt=""
            style="width: 100%; height: 100%; object-fit: cover; object-position: center; filter: brightness(0.25) saturate(0.8);">
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,11,11,0.3) 0%, rgba(10,11,11,0.6) 70%, #0a0b0b 100%); pointer-events: none;"></div>
        <div style="position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 30%, rgba(252,213,53,0.04) 0%, transparent 60%); pointer-events: none;"></div>
    </div>
    <div class="section-content relative" style="z-index: 1; width: 100%; padding-top: 120px;">
        <div class="row align-center">
            <div class="col medium-10 small-12 large-8" data-animate="fadeInUp" data-animated="true">
                <div class="col-inner text-center">
                    <div class="bot-hero-badge">
                        <span class="badge-pulse"></span>
                        <span>Bot giao dịch tự động</span>
                    </div>
                    <h1 class="bot-hero-title">
                        Bot <strong>Copy Trade</strong><br>
                        Forex & Vàng <span style="color: #FCD535;">XAU/USD</span>
                    </h1>
                    <p class="bot-hero-subtitle">
                        Sao chép giao dịch từ các chuyên gia hàng đầu. Tự động, minh bạch,
                        hiệu quả 24/7. Không cần kinh nghiệm vẫn có thể giao dịch như pro.
                    </p>
                    <div class="bot-hero-cta">
                        <a href="https://t.me/xbackcapital" target="_blank" rel="noopener noreferrer" class="button primary lowercase btn_batdau shiny-cta" style="border-radius:99px;">
                            <span>Dùng thử ngay</span>
                        </a>
                        <a href="#video-demos" class="button btn-outline btn-batdau" style="border-radius:99px; margin-left: 16px;">
                            <span>Xem video demo</span>
                        </a>
                    </div>
                    <div class="bot-hero-stats-row">
                        <div class="bot-stat-item">
                            <div class="bot-stat-number" data-count="2847">0</div>
                            <div class="bot-stat-label">Ngưởi dùng đang chạy bot</div>
                        </div>
                        <div class="bot-stat-divider"></div>
                        <div class="bot-stat-item">
                            <div class="bot-stat-number" data-count="89">0</div>
                            <div class="bot-stat-label">Tỷ lệ win rate %</div>
                        </div>
                        <div class="bot-stat-divider"></div>
                        <div class="bot-stat-item">
                            <div class="bot-stat-number" data-count="15600">0</div>
                            <div class="bot-stat-label">Lệnh đã thực hiện</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        #bot-hero { padding-top: 30px; padding-bottom: 30px; }
        @media (min-width:550px) { #bot-hero { min-height: 800px; } }
    </style>
</section>`;

const newBotTicker = `<section class="section bot-ticker-section" id="bot-ticker">
    <div class="section-content relative">
        <div class="bot-ticker-track">
            <div class="bot-ticker-item"><span class="ticker-label">EUR/USD</span><span class="ticker-value up">+1.24%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">XAU/USD</span><span class="ticker-value up">+0.89%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">GBP/USD</span><span class="ticker-value down">-0.34%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">USD/JPY</span><span class="ticker-value up">+0.56%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">AUD/USD</span><span class="ticker-value up">+0.42%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">USD/CAD</span><span class="ticker-value down">-0.18%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">Bot Active</span><span class="ticker-value up">2,847</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">Win Rate</span><span class="ticker-value up">89%</span></div>
            <!-- Duplicate for seamless loop -->
            <div class="bot-ticker-item"><span class="ticker-label">EUR/USD</span><span class="ticker-value up">+1.24%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">XAU/USD</span><span class="ticker-value up">+0.89%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">GBP/USD</span><span class="ticker-value down">-0.34%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">USD/JPY</span><span class="ticker-value up">+0.56%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">AUD/USD</span><span class="ticker-value up">+0.42%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">USD/CAD</span><span class="ticker-value down">-0.18%</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">Bot Active</span><span class="ticker-value up">2,847</span></div>
            <div class="bot-ticker-item"><span class="ticker-label">Win Rate</span><span class="ticker-value up">89%</span></div>
        </div>
    </div>
</section>`;

const newBotVideo = `<section class="section bot-video-section" id="video-demos">
    <div class="section-content relative">
        <div class="row">
            <div class="col small-12 large-12 text-center">
                <h2 class="section-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: #ffffff;">
                    Xem bot <span style="color: #22c55e;">giao dịch thực tế</span>
                </h2>
                <p style="color: #888; margin-bottom: 3rem; font-size: 1.1rem;">3 video demo với các cặp tiền khác nhau</p>
            </div>
        </div>
        <div class="row">
            <div class="col small-12 large-12">
                <div class="bot-video-slider swiper" id="botVideoSlider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="bot-video-card">
                                <div class="bot-video-wrapper">
                                    <video controls preload="metadata" poster="https://res.cloudinary.com/dt0gn31n9/video/upload/so_0/v1776437960/1eeaeda559243456cc1102d5c085cccf_1_i825e1.jpg">
                                        <source src="https://res.cloudinary.com/dt0gn31n9/video/upload/q_auto/f_auto/v1776437960/1eeaeda559243456cc1102d5c085cccf_1_i825e1.mp4" type="video/mp4">
                                    </video>
                                    <div class="bot-video-overlay"><span class="bot-video-tag">Forex</span></div>
                                </div>
                                <div class="bot-video-info">
                                    <h4>Bot giao dịch EUR/USD</h4>
                                    <p>Quan sát bot tự động phân tích và vào lệnh trên cặp tiền EUR/USD với độ chính xác cao.</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="bot-video-card">
                                <div class="bot-video-wrapper">
                                    <video controls preload="metadata" poster="https://res.cloudinary.com/dt0gn31n9/video/upload/so_0/v1776437963/1eeaeda559243456cc1102d5c085cccf_tpucui.jpg">
                                        <source src="https://res.cloudinary.com/dt0gn31n9/video/upload/q_auto/f_auto/v1776437963/1eeaeda559243456cc1102d5c085cccf_tpucui.mp4" type="video/mp4">
                                    </video>
                                    <div class="bot-video-overlay"><span class="bot-video-tag" style="background: #FCD535; color: #0a0b0b;">Vàng XAU/USD</span></div>
                                </div>
                                <div class="bot-video-info">
                                    <h4>Bot giao dịch Vàng XAU/USD</h4>
                                    <p>Chiến lược giao dịch vàng tự động, tận dụng biến động giá để tối ưu lợi nhuận.</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="bot-video-card">
                                <div class="bot-video-wrapper">
                                    <video controls preload="metadata" poster="https://res.cloudinary.com/dt0gn31n9/video/upload/so_0/v1776437967/cccfabba78e9f481eae610043a64c4c8_fk5olv.jpg">
                                        <source src="https://res.cloudinary.com/dt0gn31n9/video/upload/q_auto/f_auto/v1776437967/cccfabba78e9f481eae610043a64c4c8_fk5olv.mp4" type="video/mp4">
                                    </video>
                                    <div class="bot-video-overlay"><span class="bot-video-tag">Ngoại hối</span></div>
                                </div>
                                <div class="bot-video-info">
                                    <h4>Bot đa cặp tiền ngoại hối</h4>
                                    <p>Bot xử lý đồng thợi nhiều cặp tiền GBP/USD, USD/JPY, AUD/USD.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </div>
</section>`;

const newBotHowItWorks = `<section class="section bot-howitworks-section" id="how-it-works">
    <div class="section-bg fill">
        <img loading="lazy" decoding="async" width="1440" height="855" src="/assets/images/bg_taisao.png" class="bg attachment-original size-original" alt="">
    </div>
    <div class="section-content relative">
        <div class="row">
            <div class="col pb-0 small-12 large-12 text-center">
                <h2 class="section-title" style="font-size: 2rem; font-weight: 700; margin-bottom: 3rem; color: #ffffff;">
                    Cách thức <span style="color: #22c55e;">hoạt động</span>
                </h2>
            </div>
        </div>
        <div class="row align-equal" style="max-width: 1110px;">
            <div class="col medium-3 small-6 large-3" data-animate="fadeInUp" data-animated="true">
                <div class="col-inner bot-step-card">
                    <div class="bot-step-number">01</div>
                    <div class="bot-step-icon"><img src="/assets/images/nguoidung.svg" alt="Đăng ký" width="50" height="50"></div>
                    <h3>Đăng ký tài khoản</h3>
                    <p>Liên hệ Telegram để được hỗ trợ mở tài khoản và kết nối bot.</p>
                </div>
            </div>
            <div class="col medium-3 small-6 large-3" data-animate="fadeInUp" data-animated="true">
                <div class="col-inner bot-step-card">
                    <div class="bot-step-number">02</div>
                    <div class="bot-step-icon"><img src="/assets/images/monet.svg" alt="Nạp vốn" width="50" height="50"></div>
                    <h3>Nạp vốn giao dịch</h3>
                    <p>Nạp tiền vào tài khoản sàn. Bạn hoàn toàn kiểm soát vốn của mình.</p>
                </div>
            </div>
            <div class="col medium-3 small-6 large-3" data-animate="fadeInUp" data-animated="true">
                <div class="col-inner bot-step-card">
                    <div class="bot-step-number">03</div>
                    <div class="bot-step-icon"><img src="/assets/images/hoanphi.svg" alt="Kích hoạt bot" width="50" height="50"></div>
                    <h3>Kích hoạt bot</h3>
                    <p>Bot tự động sao chép giao dịch từ chuyên gia vào tài khoản của bạn.</p>
                </div>
            </div>
            <div class="col medium-3 small-6 large-3" data-animate="fadeInUp" data-animated="true">
                <div class="col-inner bot-step-card">
                    <div class="bot-step-number">04</div>
                    <div class="bot-step-icon"><img src="/assets/images/tongtien.svg" alt="Thu lợi nhuận" width="50" height="50"></div>
                    <h3>Thu lợi nhuận</h3>
                    <p>Theo dõi lợi nhuận real-time. Rút tiền bất cứ lúc nào bạn muốn.</p>
                </div>
            </div>
        </div>
    </div>
    <style>
        #how-it-works { padding-top: 60px; padding-bottom: 60px; }
    </style>
</section>`;

const newBotPerformance = `<section class="section bot-performance-section" id="performance">
    <div class="section-content relative">
        <div class="row">
            <div class="col small-12 large-12 text-center">
                <h2 class="section-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: #ffffff;">
                    Hiệu suất <span style="color: #FCD535;">nổi bật</span>
                </h2>
                <p style="color: #888; margin-bottom: 3rem; font-size: 1.1rem;">Dữ liệu được cập nhật real-time từ hệ thống</p>
            </div>
        </div>
        <div class="row align-equal" style="max-width: 1110px;">
            <div class="col medium-4 small-12 large-4" data-animate="fadeInUp" data-animated="true">
                <div class="col-inner bot-perf-card">
                    <div class="bot-perf-icon" style="background: linear-gradient(135deg, #22c55e, #16a34a);">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                    </div>
                    <div class="bot-perf-number" data-count="89" data-suffix="%">0%</div>
                    <div class="bot-perf-label">Tỷ lệ thắng (Win Rate)</div>
                    <div class="bot-perf-desc">Trung bình 12 tháng qua</div>
                </div>
            </div>
            <div class="col medium-4 small-12 large-4" data-animate="fadeInUp" data-animated="true">
                <div class="col-inner bot-perf-card">
                    <div class="bot-perf-icon" style="background: linear-gradient(135deg, #FCD535, #f59e0b);">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0a0b0b" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <div class="bot-perf-number" data-count="342" data-prefix="$" data-suffix="K">$0K</div>
                    <div class="bot-perf-label">Lợi nhuận đã tạo ra</div>
                    <div class="bot-perf-desc">Tổng lợi nhuận cho ngưởi dùng</div>
                </div>
            </div>
            <div class="col medium-4 small-12 large-4" data-animate="fadeInUp" data-animated="true">
                <div class="col-inner bot-perf-card">
                    <div class="bot-perf-icon" style="background: linear-gradient(135deg, #3b82f6, #2563eb);">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div class="bot-perf-number" data-count="24" data-suffix="/7">0/7</div>
                    <div class="bot-perf-label">Hoạt động liên tục</div>
                    <div class="bot-perf-desc">Không nghỉ, không ngừng nghỉ</div>
                </div>
            </div>
        </div>
        <div class="row align-equal bot-metrics-row" style="max-width: 900px; margin-top: 40px;">
            <div class="col medium-3 small-6 large-3 text-center">
                <div class="bot-metric-item">
                    <div class="bot-metric-value" data-count="1.8" data-suffix="s">0s</div>
                    <div class="bot-metric-label">Thợi gian sao chép lệnh</div>
                </div>
            </div>
            <div class="col medium-3 small-6 large-3 text-center">
                <div class="bot-metric-item">
                    <div class="bot-metric-value" data-count="2847">0</div>
                    <div class="bot-metric-label">Ngưởi dùng hoạt động</div>
                </div>
            </div>
            <div class="col medium-3 small-6 large-3 text-center">
                <div class="bot-metric-item">
                    <div class="bot-metric-value" data-count="15600">0</div>
                    <div class="bot-metric-label">Lệnh đã thực hiện</div>
                </div>
            </div>
            <div class="col medium-3 small-6 large-3 text-center">
                <div class="bot-metric-item">
                    <div class="bot-metric-value" data-count="4.2" data-suffix="/5">0/5</div>
                    <div class="bot-metric-label">Đánh giá trung bình</div>
                </div>
            </div>
        </div>
    </div>
</section>`;

const newBotPackage = `<section class="section bot-package-section" id="package">
    <div class="section-content relative">
        <div class="row">
            <div class="col small-12 large-12 text-center">
                <h2 class="section-title" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: #ffffff;">
                    Chi phí <span style="color: #22c55e;">minh bạch</span>
                </h2>
                <p style="color: #888; margin-bottom: 3rem; font-size: 1.1rem;">Một gói duy nhất, không phụ phí ẩn</p>
            </div>
        </div>
        <div class="row align-center">
            <div class="col medium-8 small-12 large-6" data-animate="fadeInUp" data-animated="true">
                <div class="bot-package-card">
                    <div class="bot-package-header">
                        <div class="bot-package-name">Bot Copy Trade Pro</div>
                        <div class="bot-package-price">
                            <span class="price-free">Miễn phí</span>
                            <span class="price-note">Chỉ chia sẻ lợi nhuận</span>
                        </div>
                    </div>
                    <div class="bot-package-body">
                        <ul class="bot-package-features">
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Sao chép giao dịch tự động 24/7</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Hỗ trợ Forex, Vàng XAU/USD, Ngoại hối</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Thợi gian sao chép lệnh &lt; 2 giây</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Bảo mật tài khoản 100%, bạn giữ quyền kiểm soát vốn</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Báo cáo lợi nhuận real-time hàng ngày</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Hỗ trợ kỹ thuật 1-1 qua Telegram</span></li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Không giới hạn số lệnh giao dịch</span></li>
                        </ul>
                        <div class="bot-package-revenue">
                            <div class="revenue-label">Chia sẻ lợi nhuận</div>
                            <div class="revalue-value">20% / tháng</div>
                            <div class="revenue-note">Chỉ trả khi có lợi nhuận. Không lợi nhuận = không trả phí.</div>
                        </div>
                    </div>
                    <div class="bot-package-footer">
                        <a href="https://t.me/xbackcapital" target="_blank" rel="noopener noreferrer" class="button primary lowercase btn_batdau" style="border-radius:99px; width: 100%;">
                            <span>Đăng ký sử dụng bot</span>
                        </a>
                        <p class="bot-package-guarantee">Cam kết hoàn phí giao dịch lên đến 100% qua xBack Capital</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;

const newBotPairs = `<section class="section bot-pairs-section" id="pairs">
    <div class="section-content relative">
        <div class="row">
            <div class="col small-12 large-12 text-center">
                <h2 class="section-title" style="font-size: 2rem; font-weight: 700; margin-bottom: 3rem; color: #ffffff;">
                    Cặp tiền <span style="color: #22c55e;">hỗ trợ</span>
                </h2>
            </div>
        </div>
        <div class="row align-center">
            <div class="col medium-10 small-12 large-8">
                <div class="bot-pairs-grid">
                    <div class="bot-pair-card">
                        <div class="bot-pair-icon" style="background: linear-gradient(135deg, #22c55e, #16a34a);">FX</div>
                        <h4>Forex</h4>
                        <p>EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD, và hơn 20 cặp tiền khác</p>
                    </div>
                    <div class="bot-pair-card featured">
                        <div class="bot-pair-badge">Phổ biến nhất</div>
                        <div class="bot-pair-icon" style="background: linear-gradient(135deg, #FCD535, #f59e0b); color: #0a0b0b;">AU</div>
                        <h4>Vàng XAU/USD</h4>
                        <p>Giao dịch vàng với biên độ lớn, cơ hội sinh lợi cao nhất trong các cặp tiền</p>
                    </div>
                    <div class="bot-pair-card">
                        <div class="bot-pair-icon" style="background: linear-gradient(135deg, #3b82f6, #2563eb);">EX</div>
                        <h4>Ngoại hối</h4>
                        <p>Các cặp tiền exotics và cross-currency pairs ít phổ biến hơn</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;

const newScript = `<script>
document.addEventListener('DOMContentLoaded', function() {
    // Swiper Video Slider
    if (document.getElementById('botVideoSlider')) {
        new Swiper('#botVideoSlider', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
    }

    // Animated Counters
    const counters = document.querySelectorAll('[data-count]');
    const animateCounter = (el) => {
        const target = parseFloat(el.getAttribute('data-count'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const isFloat = target % 1 !== 0;
        const duration = 2000;
        const start = performance.now();
        const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = target * easeOut;
            el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString('vi-VN')) + suffix;
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.3 });
    counters.forEach(counter => counterObserver.observe(counter));
});
</script>`;

// Build the new file
const newFile = `<main id="main" class="dark dark-page-wrapper">


            <div id="content" role="main" class="content-area">



` +
newBotHero + '\n' +
newBotTicker + '\n' +
newBotVideo + '\n' +
newBotHowItWorks + '\n' +
newBotPerformance + '\n' +
newBotPackage + '\n' +
newBotPairs + '\n' +
feedback + '\n' +
partners + '\n' +
whyChoose + '\n' +
hero + '\n' +
mobileForm + '\n' +
portfolio + '\n' +
bottomBanner + '\n' +
newScript + '\n' +
`            </div>



        </main>
`;

fs.writeFileSync('views/pages/index.ejs', newFile);
console.log('File written successfully');
console.log('New file size:', newFile.length);
console.log('New file lines:', newFile.split('\n').length);
