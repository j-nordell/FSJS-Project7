const express = require('express');

const router = express.Router();
const { projects } = require('./data.json');

router.get('/', (req, res) => {
  res.render('index', { projects });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/project/:id', (req, res) => {
  const { id } = req.params;

  if(id < 0 || id > projects.length - 1 || isNaN(id)) {
    return res.redirect('/project/0');
  }
  const project = projects[id];
  res.render('project', { project });
});

router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
},
(err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
  console.log(`Error! Status code: ${err.status} Message: ${err.message}`);
});

module.exports = router;
