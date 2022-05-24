const express = require('express');
const {engine}  = require('express-handlebars');

// Sets up the Express-Handlebars
// =============================================================
const app = express();
// PORT
const PORT = process.env.PORT || 3001;

// Have engine use handlebars template
app.engine('handlebars', engine({defaultLayout: 'main'}));
// Look for files that end with .handlebars
app.set('view engine', 'handlebars');

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
app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}!`);
  });
