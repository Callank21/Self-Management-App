const Project = require('./project');
const Heading = require('./headings');
const Task = require('./tasks');
const User = require('./User');

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Project, {
  foreignKey: 'user_id'
});

//Heading belongsto Project
Heading.belongsTo(Project, {
  foreignKey: 'project_id',
});

//Project hasMany Headings
Project.hasMany(Heading, {
  foreignKey: 'project_id',
});

//Task belongsto Heading
Task.belongsTo(Heading, {
  foreignKey: 'heading_id',
});

//Heading hasMany Tasks
Heading.hasMany(Task, {
  foreignKey: 'heading_id',
});

module.exports = { Project, Heading, Task, User };
