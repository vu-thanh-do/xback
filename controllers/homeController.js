// Home Controller
const homeController = {
    // Get Home Page
    getHomePage: (req, res) => {
        res.render('pages/index', {
            title: 'Trang chủ - Hoàn Phí Giao Dịch | xBack Capital',
            activePage: 'home',
            bodyClass: 'home wp-singular page-template page-template-page-blank page-template-page-blank-php page page-id-21 wp-theme-flatsome wp-child-theme-flatsome-child lightbox nav-dropdown-has-arrow nav-dropdown-has-shadow nav-dropdown-has-border'
        });
    },

    // Get Sign In Page
    getSignInPage: (req, res) => {
        res.render('pages/sign-in', {
            title: 'Đăng nhập - xBack Capital',
            activePage: 'signin',
            bodyClass: 'page-template page-template-page-blank page-template-page-blank-php page wp-theme-flatsome'
        });
    },

    // Get Sign Up Page
    getSignUpPage: (req, res) => {
        res.render('pages/sign-up', {
            title: 'Đăng ký - xBack Capital',
            activePage: 'signup',
            bodyClass: 'page-template page-template-page-blank page-template-page-blank-php page wp-theme-flatsome'
        });
    },

    // Get Private Page
    getPrivatePage: (req, res) => {
        res.render('pages/private', {
            title: 'Tham gia Private - xBack Capital',
            activePage: 'private',
            bodyClass: 'page-template page-template-page-blank page-template-page-blank-php page wp-theme-flatsome'
        });
    },

    // Get Partner Page
    getPartnerPage: (req, res) => {
        res.render('pages/partner', {
            title: 'Đăng ký đối tác - xBack Capital',
            activePage: 'partner',
            bodyClass: 'page-template page-template-page-blank page-template-page-blank-php page wp-theme-flatsome'
        });
    },

    // Get About Page
    getAboutPage: (req, res) => {
        res.render('pages/about', {
            title: 'Về chúng tôi - xBack Capital',
            activePage: 'about',
            bodyClass: 'page-template page-template-page-blank page-template-page-blank-php page wp-theme-flatsome'
        });
    }
};

module.exports = homeController;


