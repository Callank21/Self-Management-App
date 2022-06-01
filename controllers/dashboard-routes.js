const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', function (req, res) {
    res.render('dashboard', {
        title: 'My Dashboard'
    });
});

module.exports = router;