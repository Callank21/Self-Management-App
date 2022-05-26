const router = require('express').Router();

const projectRoutes = require('./project-routes');
const headingRoutes = require('./heading-routes');
const taskRoutes = require('./tasks-routes');

router.use('/projects', projectRoutes);
router.use('/headings', headingRoutes);
router.use('/taskRoutes', taskRoutes);

module.exports = router;