import React, { createContext, useState, useContext, useEffect } from "react";
import Api from "../service/api";

const ProjectsContext = createContext();

export default function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  const { projects, setProjects } = context;

  useEffect(() => {
    Api.getProjects()
      .then(({ data }) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  return { projects, setProjects };
}