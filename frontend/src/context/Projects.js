import React, { createContext, useState, useContext, useEffect } from "react";
import Api from "../service/api";

const ProjectsContext = createContext();

export const useProjects = () => useContext(ProjectsContext);

export default function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Api.getProjects()
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, [setProjects]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}
