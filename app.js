// ====================================
//   Jennifer Nordell
//   FSJS Techdegree - Project 7
// ====================================

const express = require('express');
const routes = require('./routes');

const app = express();

// set the public assets folder
app.use('/static', express.static('public'));
// set the templating engine
app.set('view engine', 'pug');
// use the routes file
app.use(routes);
// serve the app
app.listen(3000, () => {
  console.log('The application is listening on localhost:3000');
});
