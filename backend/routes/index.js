var express = require("express");
var router = express.Router();
const {
  getProjects,
  createProject,
  updateProject,
  addComponent,
  doComponent,
  deleteProject,
  deleteComponent,
} = require("../controllers/projects");

/* GET home page. */
router.get("/", getProjects);

/* Post new project. */
router.post("/", createProject);

/* Put on project */
router.put("/:id", updateProject);

/* Delete a project */
router.delete("/:id", deleteProject);

/* Post new Component */
router.post("/projects/:id", addComponent);

/* Change Component */
router.put("/projects/:id", doComponent);

/* Delete a Component */
router.delete("/projects/:id", deleteComponent);

module.exports = router;
