// routes/projects.js
const express = require('express');
const router = express.Router();
const { getAllProjects } = require('../controllers/projectController');

// Route: GET /api/projects
router.get('/', getAllProjects);

module.exports = router;
