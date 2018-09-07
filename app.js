const express = require('express');
const routes = require('./routes');

const app = express();


app.use('/static', express.static('public'));
app.set('view engine', 'pug');
app.use(routes);

app.listen(3000, () => {
  console.log('The application is listening on localhost:3000');
});
