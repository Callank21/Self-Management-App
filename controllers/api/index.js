const router = require('express').Router();

const projectRoutes = require('./project-routes');
const headingRoutes = require('./heading-routes');
const taskRoutes = require('./tasks-routes');

router.use('/projects', projectRoutes);
router.use('/headings', headingRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;