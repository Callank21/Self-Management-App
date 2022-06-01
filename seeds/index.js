const seedProjects = require('./project-seeds');
const seedHeadings = require('./heading-seeds');
const seedTasks = require('./task-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedProjects();
  console.log('\n----- PROJECTS SEEDED -----\n');

  await seedHeadings();
  console.log('\n----- HEADINGS SEEDED -----\n');

  await seedTasks();
  console.log('\n----- TASKS SEEDED -----\n');

  process.exit(0);
};

seedAll();
