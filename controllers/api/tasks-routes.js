const router = require('express').Router();
const { json } = require('express/lib/response');
const { Task, Project, Heading } = require('../../models');

router.get('/', (req, res) => {
  Task.findAll({
    attributes: ['id', 'desc', 'time', 'heading_id'],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/time', (req, res) => {
  Task.sum('time').then(sum => {
    res.json(sum)
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/headings/:id', (req, res) => {
  Task.findAll({
    attributes: ['time'],
      include: {
        model: Heading,
        attributes: ['id'],
        where: {
          id: req.params.id
        }
      }
  })
  .then((response) => res.json(response))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Task.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'desc', 'time', 'heading_id'],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No task found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Task.create({
    desc: req.body.desc,
    time: req.body.time
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put(':/id', (req, res) => {
  Task.update(
    {
      desc: req.body.desc,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ) .then()
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No task found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No task found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
