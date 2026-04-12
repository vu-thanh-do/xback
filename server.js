const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set default layout
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Static files
app.use('/assets', express.static('assets'));
app.use('/public', express.static('public'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('images'));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = require('./routes');
app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/error', {
        title: 'Lỗi - xBack Capital',
        message: 'Có lỗi xảy ra!'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('pages/error', {
        title: '404 - Không tìm thấy',
        message: 'Trang bạn tìm kiếm không tồn tại!'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log('📁 Routes:');
    console.log('   /           - Trang chủ');
    console.log('   /sign-in    - Đăng nhập');
    console.log('   /sign-up    - Đăng ký');
    console.log('   /tham-gia-private - Tham gia Private');
    console.log('   /dang-ky-doi-tac  - Đăng ký đối tác');
});

module.exports = app;


