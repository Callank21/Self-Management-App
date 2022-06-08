const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/calendar', function (req, res) {
  res.render('calendar', {
    title: 'My Calendar',
  });
});

module.exports = router;
