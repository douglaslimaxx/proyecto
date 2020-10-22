import React from "react";
import { useParams } from "react-router";
import "./ProjectPage.css";
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";

function ProjectPage(props) {
  let { id } = useParams();
  const project = props.findProjectById(id);

  return (
    <div>
      {project ? (
        <div className="project-view">
          <h2 className="project-name">{project.name}</h2>
          <div className="details">
            <img src={project.img} alt="" />
            <p className="project-description">{project.description}</p>
            <p className="project-category">Categoria</p>
            <p className="project-progress">{project.progress}</p>
          </div>
          <div className="components">
            {(project.components.length > 0) ?
              (project.components.map((component) => (
                <ProjectComponent name={component.name} priority={component.priority} done={component.done} />
              ))) : <p>Projeto sem componentes</p>
            }
          </div>
        </div>
      ) : (
          <p>Loading</p>
        )}
    </div>
  );
}

export default ProjectPage;
