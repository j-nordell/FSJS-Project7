const express = require('express');
const path = require('path');

const projectData = path.basename('data.json');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('The application is listening on localhost:3000');
});