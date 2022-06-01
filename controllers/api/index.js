const router = require('express').Router();

const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const headingRoutes = require('./heading-routes');
const taskRoutes = require('./tasks-routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/headings', headingRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;