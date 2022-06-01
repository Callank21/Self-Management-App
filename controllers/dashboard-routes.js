const router = require('express').Router();
const sequelize = require('../config/connection');
const { Heading, Project, Task } = require('../models');
const withAuth = require('../utils/auth');

// get all projects for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('===========Projects===========');
  Project.findAll({
    attributes: [
        'id',
        'title',
        'time'
    ],
    include: {
        model: Heading,
        attributes: [
            'id',
            'title',
            'time',
            'project_id'
        ],
        include: {
            model: Task,
            attributes: [
                'id',
                'desc',
                'time',
                'heading_id'
            ]
        }
    }
})
.then(dbCategoryData => res.json(dbCategoryData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});



module.exports = router;
