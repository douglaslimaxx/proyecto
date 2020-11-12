import React from "react";
import "./ProjectComponent.css";
import Api from "../../service/api";

function ProjectComponent(props) {
  const handleClick = () => {
    Api.doComponent(props.projectId, { name: props.name });
    window.location.reload();
  };
  const handleDelete = () => {
    Api.deleteComponent(props.projectId, props.name);
    window.location.reload();
  }
  return (
    <div className="component">
      <span>{props.name}</span>
      {props.done ? (
        <span>Realizado</span>
      ) : (
          <button onClick={handleClick}>realizar</button>
        )}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default ProjectComponent;
