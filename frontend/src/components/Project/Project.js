import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="Project">
      <img src={props.img} alt="" />
      <p className="project-name">{props.name}</p>
      <p className="project-description">{props.description}</p>
      <p className="project-category">{props.category}</p>
      <p className="project-progress">{props.progress}</p>
    </div>
  );
}

export default Project;
