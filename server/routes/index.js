let  express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
// router.get('/', indexController.displayHomePage);

// router.get('/home', indexController.displayHomePage);

// router.get('/about', indexController.displayAboutPage);

// router.get('/products', indexController.displayProductsPage);

// router.get('/contact', indexController.displayContactPage);
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home'});
  });

  router.get('/home', function(req, res, next) {
    res.render('home', { title: 'home'});
  });
  
router.get('/about', function(req, res, next) {
    res.render('About', { title: 'About'});
  });

router.get('/products', function(req, res, next) {
    res.render('Products', { title: 'Products'});
  });

router.get('/Contact', function(req, res, next) {
    res.render('Contact', { title: 'Contact'});
  });

  router.get('/bcontact', function(req, res, next) {
    res.render('bcontact', { title: 'bcontact'});
  });

  router.get('/services', function(req, res, next) {
    res.render('Services', { title: 'Services'});
  });

// router.get('/bcontact', indexController.displaybcontactPage);
// router.get('/services', indexController.displayServicesPage);


/*GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login Page*/

router.post('/login', indexController.processLoginPage);

/*GET Route for register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
