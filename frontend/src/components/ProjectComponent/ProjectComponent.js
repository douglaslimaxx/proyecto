import React from "react";
import "./ProjectComponent.css";

function ProjectComponent(props) {
  return (
    <div className="component">
      <span>{props.name}</span>
      {props.done ? <span>Realizado</span> : <span>Não Realizado</span>}
    </div>
  );
}

export default ProjectComponent;
