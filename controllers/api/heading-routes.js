const router = require('express').Router();
const { Project, Heading, Task } = require('../../models');

router.get('/', (req, res) => {
    Heading.findAll({
        attributes: [
            'id',
            'heading_title',
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
            'heading_title',
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
        heading_title: req.body.heading_title
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put(':/id', (req, res) => {
    Heading.update({
        heading_title: req.body.heading_title
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