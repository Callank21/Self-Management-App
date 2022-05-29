const express = require('express');
const {engine}  = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');

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
// =============================================================


// Lister
sequelize.sync({ force: false }).then(() =>{
app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}!`);
  });
});