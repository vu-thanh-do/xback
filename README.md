# Alphaback - Clone 1:1 (Local Version)

Phiên bản clone y hệt Alphaback với tất cả assets local.

## 📊 Thống kê

| Loại | Số lượng | Dung lượng |
|------|---------|-----------|
| HTML | 2 | 479 KB |
| CSS | 4 | 42 KB |
| JS | 3 | 39 KB |
| Images | 32 | 2.3 MB |
| Fonts | 18 | 432 KB |
| **Tổng** | **~60 files** | **~3.3 MB** |

## 📁 Cấu trúc

```
├── index.html              # Trang chính (~245KB)
├── home-backup.html        # Backup gốc
├── assets/
│   ├── images/            # 32 files (logos, icons, backgrounds)
│   │   ├── logo_alphaback.svg
│   │   ├── banner-text.png
│   │   ├── bg_taisao.png
│   │   ├── [exchange logos...]
│   │   └── [icons: copy.svg, right-arrow.svg, chevron-down.svg...]
│   ├── css/
│   │   ├── portfolio.css      # Portfolio grid styles
│   │   └── child-style.css    # Child theme styles
│   ├── js/
│   │   └── portfolio.js       # Portfolio filter/sort/copy (local)
│   └── fonts/
│       ├── Roboto (regular, 500, 700 + unicode variants)
│       ├── Montserrat (100, 400, 700)
│       ├── Dancing Script
│       └── Fl-icons (woff, woff2)
```

## ✅ Đã hoàn thành

### Assets đã local hóa 100%
- [x] 32 images (logos, icons, backgrounds)
- [x] 18 fonts (Roboto, Montserrat, Dancing Script, Fl-icons)
- [x] 4 CSS files (portfolio, child-style, inline)
- [x] 3 JS files (portfolio local, inline scripts)

### Tính năng hoạt động
- [x] Header sticky
- [x] Mobile menu (slide down)
- [x] Exchange selector dropdown
- [x] **Portfolio filter/sort/copy (không cần AJAX)**
- [x] Copy mã giới thiệu
- [x] Loading spinner
- [x] Error/Login popups
- [x] Responsive (desktop/mobile)

### Portfolio fix
- Đã thêm data-type, data-category, data-rebate cho 12 items
- Filter: Tất cả / Sàn Crypto / Sàn Forex / CEX / DEX
- Sort: Cao→Thấp / Thấp→Cao
- Không còn lỗi "Có lỗi xảy ra"

## 🚀 Sử dụng

Chỉ cần mở `index.html` trong trình duyệt. Không cần server, không cần internet.

```bash
# Hoặc dùng local server
npx serve .
# hoặc
python -m http.server 8080
```

## 📝 Lưu ý

- Tất cả assets đã được tải về local
- Chrome extension scripts đã được xóa
- Google Fonts đã được local hóa
- Portfolio hoạt động hoàn toàn offline
