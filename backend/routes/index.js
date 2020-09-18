var express = require('express');
var router = express.Router();
const { getProjects, createProject } = require("../controllers/projects")

/* GET home page. */
router.get('/', getProjects);

/* Post new project. */
router.post('/', createProject);

module.exports = router;
