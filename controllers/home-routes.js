const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, Heading, Task } = require('../models');

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
  Project.findAll({
    attributes: ['id', 'project_title'],
    include: {
      model: Heading,
      attributes: ['id', 'heading_title', 'project_id'],
      include: {
        model: Task,
        attributes: ['id', 'desc', 'time', 'heading_id'],
      },
    },
  })
    .then((dbCategoryData) => {
      const projects = dbCategoryData.map((project) =>
        project.get({ plain: true })
      );
      console.log(projects[0].headings[0].tasks);
      res.render(
        'dashboard',
        { projects }

        // title: 'My Dashboard'
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/dashboard', (req, res) => {
// Project.findAll({
//   attributes: ['id', 'project_title'],
//   include: {
//     model: Heading,
//     attributes: ['id', 'heading_title', 'project_id'],
//     include: {
//       model: Task,
//       attributes: ['id', 'desc', 'time', 'heading_id'],
//     },
//   },
// })
//     .then((dbCategoryData) => {
//       const projects = dbCategoryData.map((project) =>
//         project.get({ plain: true })
//       );
//       res.render('dashboard', { projects });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
