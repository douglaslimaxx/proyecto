import axios from "axios";

const URL = "http://localhost:3001/";

const connection = axios.create({
  baseURL: URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default {
  getProjects: () => connection.get("/"),
  createProject: (project) => connection.post("/", project),
  updateProject: (project) => connection.put("/" + project.id, project),
  addComponent: (component, id) =>
    connection.post("/projects/" + id, component),
};
