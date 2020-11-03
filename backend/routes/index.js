var express = require("express");
var router = express.Router();
const { getProjects, createProject, updateProject, addComponent } = require("../controllers/projects");

/* GET home page. */
router.get("/", getProjects);

/* Post new project. */
router.post("/", createProject);

/* Put on project */
router.put("/:id", updateProject);

/* Post new Component */
router.post("/projects/:id", addComponent);

module.exports = router;
