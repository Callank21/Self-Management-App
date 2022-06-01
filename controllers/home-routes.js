const router = require('express').Router();
const { Heading, Project, Task } = require('../models');
const sequelize = require('../config/connection');

const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    console.log('homepage');
    if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
    }    
    res.render('homepage', {
        loggedIn: req.session.loggedIn        
    });
});

// Get one project
// router.get ('/project/:id', async (req,res) =>{
//     try {}
//     catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
// }),

// // Get all tasks
// router.get ('/', async (req,res) =>{
//     try {}
//     catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
// })


module.exports = router;
