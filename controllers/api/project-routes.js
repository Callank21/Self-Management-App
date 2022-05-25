const router = require('express').Router();
const { Project, Heading, Task } = require('../../models');

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
    Project.findOne({
        where: {
            id: req.params.id
        },
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

router.post('/', (req, res) => {
    Project.create({
        title: req.body.title
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Project.update({
        title: req.body.title
    },
    {
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

router.delete('/:id', (req, res) => {
    Project.destroy({
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