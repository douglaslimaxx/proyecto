import axios from "axios";

const URL = "http://localhost:3001/";

const connection = axios.create({
  baseURL: URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default {
  getProjects: () => connection.get("/"),
};
