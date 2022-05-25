const router = require('express').Router();
const { Heading, Task } = require('../../models');
const { route } = require('./project-routes');

router.get('/', (req, res) => {
    Heading.findAll({
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
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Heading.findOne({
        where: {
            id: req.params.id
        },
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
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No heading found with this id' });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
    Heading.create({
        title: req.body.title
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put(':/id', (req, res) => {
    Heading.update({
        title: req.body.title
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No heading found with this id' });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.delete('/:id', (req, res) => {
    Heading.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No project found with this id' });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;