import React from "react";
import { useHistory, useParams } from "react-router";
import "./ProjectPage.css";
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";
import AddComponent from "../../components/AddComponent/AddComponent";
import { useProjects } from "../../context/Projects";
import Api from "../../service/api";

function ProjectPage() {
  let { id } = useParams();
  const { getbyid } = useProjects();
  const project = getbyid(id);
  const history = useHistory();

  const handleDelete = () => {
    Api.deleteComponent(id);
    history.push("/");
  }

  return (
    <div>
      {project ? (
        <div className="project-view">
          <h2 className="project-name">{project.name}</h2>
          <a href={"/edit/" + id}>
            <button>Editar</button>
          </a>
          <button onClick={handleDelete}>delete</button>
          <div className="details">
            <img src={project.img} alt="" />
            <p className="project-description">{project.description}</p>
            <p className="project-category">{project.category}</p>
            <p className="project-progress">{project.progress}</p>
          </div>
          <div className="components">
            {project.components.length > 0 ? (
              project.components.map((component) => (
                <ProjectComponent
                  name={component.name}
                  priority={component.priority}
                  done={component.done}
                  projectId={id}
                />
              ))
            ) : (
                <p>Projeto sem componentes</p>
              )}
          </div>
          <AddComponent id={id} />
        </div>
      ) : (
          <p>Loading</p>
        )}
    </div>
  );
}

export default ProjectPage;
