const { User } = require('../models');

const userData = [
    {
    firstname: "Callan",
    lastname: "Keesling",
    email: "callankeesling@gmail.com",
    password: "12345" 
    },
    {
    firstname: "allan",
    lastname: "eesling",
    email: "allaneesling@gmail.com",
    password: "678910s"
}
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;