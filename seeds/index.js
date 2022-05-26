const seedProjects = require('./project-seeds');
const seedHeadings = require('./heading-seeds');
const seedTasks = require('./task-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedProjects();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedHeadings();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTasks();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
