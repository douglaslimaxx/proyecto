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

  const createProject = (project) => {
    return Api.createProject(project).then(({ data }) => {
      const newProjects = { ...projects };
      newProjects[data] = { id: data, components: [], ...project };
      setProjects(newProjects);
      return data;
    });
  };

  const updateProject = (project) => {
    Api.updateProject(project).then(() => {
      const newProjects = { ...projects };
      newProjects[project.id] = {
        id: project.id,
        components: newProjects[project.id].components,
        ...project,
      };
      setProjects(newProjects);
    });
  };

  const deleteProject = (id) => {
    Api.deleteProject(id).then(() => {
      const newProjects = { ...projects };
      delete newProjects[id];
      setProjects(newProjects);
    });
  };

  return (
    <ProjectsContext.Provider
      value={{ projects, createProject, deleteProject, updateProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}
