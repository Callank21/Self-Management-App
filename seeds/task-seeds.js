const { Task } = require('../models');

const taskData = [
    {
        desc: "buy stronger filament & test it",
        time: 60,
        heading_id: 1
    },
    {
        desc: "buy better hotend & install it",
        time: 120,
        heading_id: 1
    },
    {
        desc: "go over printer for maintainence",
        time: 30,
        heading_id: 1
    },
    {
        desc: "move it to the garage",
        time: 45,
        heading_id: 1
    },
    {
        desc: "set up web server using a raspi",
        time: 150,
        heading_id: 2
    },
    {
        desc: "rewire arm so inputs go through pi",
        time: 90,
        heading_id: 2
    },
    {
        desc: "create web app that interfaces with arm",
        time: 200,
        heading_id: 2
    },
    {
        desc: "Go through the codecademy course on AI",
        time: 300,
        heading_id: 3
    },
    {
        desc: "find & download recognition software for camera & test it",
        time: 150,
        heading_id: 3
    },
    {
        desc: "train recognition software to know when arm grabs something and create a machine learning model to know when it grabs something",
        time: 60,
        heading_id: 3
    },
    {
        desc: "clean out the fridge",
        time: 15,
        heading_id: 4
    },
    {
        desc: "clean the counters",
        time: 30,
        heading_id: 4
    },
    {
        desc: "do the dishes & load the dish washer",
        time: 30,
        heading_id: 4
    },
    {
        desc: "mop floors",
        time: 30,
        heading_id: 4
    },
    {
        desc: "vacuum stairs & upstairs carpet",
        time: 60,
        heading_id: 5
    },
    {
        desc: "do laundry",
        time: 30,
        heading_id: 5
    },
    {
        desc: "make bed",
        time: 15,
        heading_id: 5
    },
    {
        desc: "clean bathroom",
        time: 60,
        heading_id: 5
    },
    {
        desc: "organize garage",
        time: 60,
        heading_id: 6
    },
    {
        desc: "sweep garage",
        time: 45,
        heading_id: 6
    },
    {
        desc: "scoop cat box",
        time: 15,
        heading_id: 6
    }
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;