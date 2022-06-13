const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Project, Heading, Task } = require('../models');

router.get('/', function (req, res) {
  res.render('homepage', {
    title: 'Home Page',
    // can pass more values here(eg.): "name: 'lorem'"
  });
});

router.get('/login', function (req, res) {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login', {
    title: 'Log In',
  });
});

router.get('/signup', function (req, res) {
  res.render('signup', {
    title: 'Sign Up',
  });
});

router.get('/calendar', function (req, res) {
  res.render('calendar', {
    title: 'My Calendar',
  });
});

router.get('/dashboard', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    where: {
      id: req.session.user_id,
    },
    include: {
      model: Project,
      attributes: ['id', 'project_title', 'time'],
      include: {
        model: Heading,
        attributes: ['id', 'heading_title', 'time', 'project_id'],
        include: {
          model: Task,
          attributes: ['id', 'desc', 'time', 'heading_id'],
        },
      },
    },
  })
    .then((dbCategoryData) => {
      const users = dbCategoryData.map((user) => user.get({ plain: true }));

      res.render('dashboard', { users, title: 'My Dashboard' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
