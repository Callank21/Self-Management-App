const { Project } = require('../models');

const projectData = [
    {
        project_title: 'Improve robot arm',
    },
    {
        project_title: 'Clean the house',
    },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;