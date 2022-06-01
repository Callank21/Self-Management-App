const express = require('express');
const {engine}  = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

// Sets up the Express-Handlebars
// =============================================================
const app = express();
// PORT
const PORT = process.env.PORT || 3001;

// Have engine use handlebars template
app.engine('handlebars', engine({defaultLayout: 'main'}));
// Look for files that end with .handlebars
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
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
        title: 'My Dashboard'
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
sequelize.sync({ force: false }).then(() =>{
app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}!`);
  });
});