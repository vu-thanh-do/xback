const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.static('assets'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/sign-in', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sign-in.html'));
});

app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sign-up.html'));
});

app.get('/tham-gia-private', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'private.html'));
});

app.get('/dang-ky-doi-tac', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'partner.html'));
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
