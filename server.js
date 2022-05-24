const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// PORT
const PORT = process.env.PORT || 3001;

// Listener
app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}!`);
  });