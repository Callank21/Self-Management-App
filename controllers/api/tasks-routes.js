const router = require('express').Router();
const { Task } = require('../../models');

router.get('/', (req, res) => {
    Task.findAll({
        attributes: [
            'id',
            'desc',
            'time',
            'heading_id'
        ]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Task.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'desc',
            'time',
            'heading_id'
        ]
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No task found with this id' });
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
    Task.create({
        desc: req.body.desc
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put(':/id', (req, res) => {
    Task.update({
        desc: req.body.desc
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No task found with this id' });
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
    Task.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No task found with this id' });
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