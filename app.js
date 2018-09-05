const express = require('express');
const path = require('path');

const projectData = path.basename('data.json');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.listen(3000, () => {
  console.log('The application is listening on localhost:3000');
});
