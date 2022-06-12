const router = require('express').Router();
const { json } = require('express/lib/response');
const { Task, Project, Heading } = require('../../models');

// Create helper function to retrieve all tasks and get the sum of all times
const addTaskTime = async (heading) => {
  // Get an array of task times and add them
  const taskTimes = await Task.findAll({
    attributes: ["time"],
    where: {
      heading_id: heading
    }
  });

  // Update heading time

  // Get heading's project id
  const project = await Heading.findOne({
    attributes: ["project_id"],
    where: {
      id: heading
    }
  });

  // Get all heading times with the project id and add them

  // Update project time
};

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
    .then((dbPostData) => {
      // Run helper function that adds up all times
      res.json(dbPostData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put(':/id', (req, res) => {
  Task.update(
    {
      desc: req.body.desc,
      time: req.body.time
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
      // Run helper function that adds up all times
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

router.get('/headings/:id', (req, res) => { // returns a list of time attributes for tasks at a specific heading
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

module.exports = router;
