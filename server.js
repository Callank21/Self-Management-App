const express = require('express');
<<<<<<< HEAD
const { engine } = require('express-handlebars');

//----- features will be added soon ----//
// utilize the sequalize from the connection.js
// const sequalize = require('./config/connection');
// import helpers to implement
// const helpers = require('./utils/helpers');
// pass the helpers to express handlebars
// const hbs = exphbs.create({ helpers });
//------ Jin -----------//
=======
const {engine}  = require('express-handlebars');
const path = require('path');
>>>>>>> 8ba3cb433d46a590816cb61c794b7f4149d397dd

// Sets up the Express-Handlebars
// =============================================================
const app = express();
// PORT
const PORT = process.env.PORT || 3001;

// Have engine use handlebars template
app.engine('handlebars', engine({ defaultLayout: 'main' }));
// Look for files that end with .handlebars
app.set('view engine', 'handlebars');

// Looks for style.css
app.use(express.static('public'));


// Routes & Renders homepage.handlebars
app.get('/', function (req, res) {
  res.render('homepage', {
    title: 'Home Page',
    // can pass more values here(eg.): "name: 'lorem'"
  });
});

// Routes & Renders dashboard.handlebars
app.get('/dashboard', function (req, res) {
  res.render('dashboard', {
    title: 'My Dashboard',
  });
});

app.get('/login', function (req, res) {
    res.render('login', {
        title: 'Log In'
    });
});

app.get('/signup', function (req, res) {
    res.render('signup', {
        title: 'Sign Up'
    });
});

// // Routes & Renders dashboard.handlebars
// app.get('/header', function (req, res) {
//     res.render('header', {
//         title: ''
//     });
// });
// =============================================================

// Lister
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}!`);
});
