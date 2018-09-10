const express = require('express');

const router = express.Router();
const { projects } = require('./data.json');

// render the home route
router.get('/', (req, res) => {
  res.render('index', { projects });
});

// render the about page
router.get('/about', (req, res) => {
  res.render('about');
});

// Render the project associated with the id given in the parameters
router.get('/project/:id', (req, res) => {
  const { id } = req.params;

  // if the id is not valid or doesn't currently exist redirect the user to a randomly chosen project
  if (id < 0 || id > projects.length - 1 || isNaN(id)) {
    const randIndex = Math.floor(Math.random() * projects.length);
    console.log(`That project does not exist. Redirecting to project ${randIndex}`);
    return res.redirect(`/project/${randIndex}`);
  }

  // otherwise show the project associated with the id
  const project = projects[id];
  res.render('project', { project });
});

// If none the route can not be found create an error
router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
},
// render the error page
(err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
  console.log(`Error! Status code: ${err.status} Message: ${err.message}`);
});

module.exports = router;
