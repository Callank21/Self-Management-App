const { Heading } = require('../models');

const headingData = [
    {
        heading_title: "upgrade 3d printer",
        project_id: 1
    },
    {
        heading_title: "create interface web app",
        project_id: 1
    },
    {
        heading_title: "Train AI to control arm",
        project_id: 1
    },
    {
        heading_title: "Clean the Kitchen",
        project_id: 2
    },
    {
        heading_title: "Clean Upstairs",
        project_id: 2
    },
    {
        heading_title: "Clean Garage",
        project_id: 2
    },
];

const seedHeadings = () => Heading.bulkCreate(headingData);

module.exports = seedHeadings;