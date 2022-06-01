const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Biology is superficial, intelligence is artificial',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess))

  const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

// Have engine use handlebars template
app.engine('handlebars',  hbs.engine);
// Look for files that end with .handlebars
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Looks for style.css
app.use(express.static(path.join(__dirname,'public')));

app.use(require('./controllers/'));
// Lister
sequelize.sync({ force: false }).then(() =>{
app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}!`);
  });
});