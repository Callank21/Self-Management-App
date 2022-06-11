const router = require('express').Router();
const { Project, Heading, Task } = require('../../models');

router.get('/', (req, res) => {
  Project.findAll({
    attributes: ['id', 'project_title', 'time'],
    include: {
      model: Heading,
      attributes: ['id', 'heading_title', 'time', 'project_id'],
      include: {
        model: Task,
        attributes: ['id', 'desc', 'time', 'heading_id'],
      },
    },
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'project_title', 'time'],
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
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No project found with this id' });
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
  Project.create({
    project_title: req.body.project_title,
    time: 0,
    user_id: req.session.user_id
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Project.update(
    {
      project_title: req.body.project_title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No project found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('time/:id', (req, res) => {
  Project.update(
    {
      time: req.body.time,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No project found with this id' });
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
  Project.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No project found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/time/:id', (req, res) => {
  Project.update(
    {
      time: req.body.time,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No heading found with this id' });
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
