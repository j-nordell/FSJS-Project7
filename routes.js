const express = require('express');

const router = express.Router();
const { projects } = require('./data.json');

router.get('/', (req, res) => {
  res.render('index', { projects });
});

router.get('/project', (req, res) => {
  const randomProjectId = Math.floor(Math.random(projects.length));
  res.redirect(`project/${randomProjectId}`);
});

router.get('/project/:id', (req, res) => {
  const { id } = req.params;
  const project = projects[id];
  res.render('project', { project });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
