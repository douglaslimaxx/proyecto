import axios from "axios";
import Project from "../components/Project/Project";

const URL = "http://localhost:3001/";

const connection = axios.create({
  baseURL: URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default {
  getProjects: () => connection.get("/"),
  createProject: (project) => connection.post("/", project),
};
