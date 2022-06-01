const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', function (req, res) {
  res.render('homepage', {
    title: 'Home Page',
    // can pass more values here(eg.): "name: 'lorem'"
  });
});

router.get('/login', function (req, res) {
  res.render('login', {
    title: 'Log In',
  });
});

router.get('/signup', function (req, res) {
  res.render('signup', {
    title: 'Sign Up',
  });
});

router.get('/dashboard', function (req, res) {
  res.render('dashboard', {
    title: 'My Dashboard',
  });
});

module.exports = router;
