import React from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ProjectPage.css";
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";
import AddComponent from "../../components/AddComponent/AddComponent";
import { useProjects } from "../../context/ProjectsContext";

function ProjectPage() {
  let { id } = useParams();
  const { projects, deleteProject } = useProjects();
  const project = projects[id];
  const history = useHistory();

  const handleDelete = () => {
    deleteProject(id);
    history.push("/");
  };

  const getProgress = (components) => {
    if (components.length < 1) {
      return "0%";
    }
    var done = 0;
    for (var i in components) {
      if (components[i].done) {
        done += 1;
      }
    }
    const per = (done / components.length) * 100;
    return per.toFixed(2) + "%";
  };

  return (
    <div>
      {project ? (
        <div className="project-view">
          <h2 className="project-name">{project.name}</h2>
          <Link to={`/edit/${id}`}>
            <button>Editar</button>
          </Link>
          <button onClick={handleDelete}>delete</button>
          <div className="details">
            <img src={project.img} alt="" />
            <p className="project-description">{project.description}</p>
            <p className="project-category">{project.category}</p>
            <p className="project-progress">
              {getProgress(project.components)}
            </p>
          </div>
          <div className="components">
            {project.components.length > 0 ? (
              project.components
                .sort((a, b) => b.priority - a.priority)
                .map((component) => (
                  <ProjectComponent
                    key={component.name}
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
          <AddComponent components={project.components} id={id} />
        </div>
      ) : (
        <p>Loading</p>
      )}
      <p>*obs: Os componentes são ordenados da maior prioridade para a menor</p>
    </div>
  );
}

export default ProjectPage;
