import React from "react";

function Project(props) {
  return (
    <div className="Project">
      <img src={props.img} alt="" />
      <p>
        <b>{props.name}</b>
      </p>
      <p>{props.description}</p>
      <p>Categoria</p>
      <p>{props.progress}</p>
    </div>
  );
}

export default Project;
