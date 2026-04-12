const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Home Route
router.get('/', homeController.getHomePage);

// Private Route
router.get('/tham-gia-private', homeController.getPrivatePage);

// Partner Route
router.get('/dang-ky-doi-tac', homeController.getPartnerPage);

// About Route
router.get('/ve-chung-toi', homeController.getAboutPage);

// Redirect old URLs to new URLs
router.get('/huong-dan-tham-gia-vao-nhom-private-xBack/', (req, res) => {
    res.redirect('/tham-gia-private');
});

module.exports = router;


