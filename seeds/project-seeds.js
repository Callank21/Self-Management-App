const { Project } = require('../models');

const projectData = [
    {
        project_title: 'Improve robot arm',
        user_id: 1
    },
    {
        project_title: 'Clean the house',
        user_id: 1
    },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;