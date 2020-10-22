import React from "react";
import { useParams } from "react-router";
import "./ProjectPage.css";
import Project from "../../components/Project/Project";

function ProjectPage(props) {
  let { id } = useParams();
  const project = props.findProjectById(id);

  return (
    <div className="project-view">
      {project ? (
        <div className="project">
          <h3 className="project-name">{project.name}</h3>
          <div className="details">
            <img src={project.img} alt="" />
            <p className="project-description">{project.description}</p>
            <p className="project-category">Categoria</p>
            <p className="project-progress">{project.progress}</p>
          </div>
          <div className="components"></div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default ProjectPage;
