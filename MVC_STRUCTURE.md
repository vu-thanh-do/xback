# xBack Capital - Node.js MVC Structure

## Tổng quan

Dự án đã được chuyển đổi sang kiến trúc **MVC (Model-View-Controller)** với Node.js và EJS template engine.

**LƯU Ý QUAN TRỌNG**: HTML gốc từ `index.html` đã được giữ nguyên 100%, chỉ tách Header và Footer thành components riêng.

## Cấu trúc thư mục

```
project/
├── controllers/          # Chứa các controller xử lý logic
│   └── homeController.js
├── routes/              # Định nghĩa các routes
│   └── index.js
├── views/               # Templates EJS
│   ├── layouts/         # Layout chính
│   │   └── main.ejs     # Layout từ HTML gốc
│   ├── partials/        # Components dùng chung ⭐
│   │   ├── header.ejs   # Header từ HTML gốc
│   │   └── footer.ejs   # Footer từ HTML gốc
│   └── pages/           # Các trang cụ thể
│       ├── index.ejs    # Nội dung trang chủ (từ HTML gốc)
│       ├── sign-in.ejs  # Đăng nhập (cần thay bằng HTML gốc)
│       ├── sign-up.ejs  # Đăng ký (cần thay bằng HTML gốc)
│       ├── private.ejs  # Tham gia Private (cần thay bằng HTML gốc)
│       ├── partner.ejs  # Đăng ký đối tác (cần thay bằng HTML gốc)
│       └── error.ejs    # Trang lỗi
├── assets/              # Static assets (CSS, JS, images)
├── public/              # Public static files
├── server.js            # Entry point
└── package.json
```

## Component dùng chung (GIỮ NGUYÊN HTML GỐC)

### 1. Header Component (`views/partials/header.ejs`)
- Đã trích xuất chính xác từ HTML gốc (dòng 3120-3355 của index.html)
- Chỉ sửa đường dẫn `assets/` thành `/assets/`
- Chỉ sửa link `/sign-in/` thành `/sign-in`

### 2. Footer Component (`views/partials/footer.ejs`)
- Đã trích xuất chính xác từ HTML gốc (dòng 6584-6693 của index.html)
- Chỉ sửa đường dẫn `assets/` thành `/assets/`

### 3. Main Layout (`views/layouts/main.ejs`)
- Đã trích xuất từ HTML gốc (từ `<html>` đến `</head>` + phần sau footer)
- Giữ nguyên toàn bộ CSS, JS, meta tags
- Thêm `<%- include('../partials/header') %>` và `<%- include('../partials/footer') %>`

## Routes

| Route | Mô tả | Controller |
|-------|-------|------------|
| `/` | Trang chủ | `getHomePage` |
| `/sign-in` | Đăng nhập | `getSignInPage` |
| `/sign-up` | Đăng ký | `getSignUpPage` |
| `/tham-gia-private` | Tham gia Private | `getPrivatePage` |
| `/dang-ky-doi-tac` | Đăng ký đối tác | `getPartnerPage` |

## Cách sử dụng

### Chạy server
```bash
npm start
# hoặc
node server.js
```

Server sẽ chạy tại: `http://localhost:3000`

### Thêm trang mới với HTML gốc

Nếu bạn có HTML gốc cho các trang như sign-in, sign-up, private, partner:

1. Tạo file EJS trong `views/pages/`
2. Copy HTML gốc vào file đó
3. Sửa đường dẫn `assets/` thành `/assets/`
4. Chỉ giữ lại phần nội dung bên trong `<main>`, không cần `<html>`, `<head>`, `<header>`, `<footer>`

Ví dụ file `views/pages/sign-in.ejs`:
```html
<section class="section">
    <!-- HTML gốc của bạn ở đây, chỉ phần nội dung -->
</section>
```

### Truyền dữ liệu từ Controller đến View

```javascript
res.render('pages/index', {
    title: 'Tiêu đề trang',
    activePage: 'home',
    bodyClass: 'custom-class'
});
```

Trong view:
```ejs
<h1><%= title %></h1>
```

## Dependencies

- `express`: Web framework
- `ejs`: Template engine
- `express-ejs-layouts`: Layout support cho EJS

## Lưu ý quan trọng

1. **views/pages/index.ejs**: Đã chứa HTML gốc từ file index.html của bạn (đã xóa header và footer)
2. **views/pages/sign-in.ejs, sign-up.ejs, private.ejs, partner.ejs**: Đang sử dụng HTML tạm, cần thay bằng HTML gốc của bạn nếu có
3. Đường dẫn assets: Đã chuyển từ `assets/` sang `/assets/` để hoạt động đúng với Express static files
