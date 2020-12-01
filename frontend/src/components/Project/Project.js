import React from "react";
import "./Project.css";

function Project(props) {
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
    <div className="Project">
      <img src={props.img} alt="" />
      <p className="project-name">{props.name}</p>
      <p className="project-description">{props.description}</p>
      <p className="project-category">{props.category}</p>
      <p className="project-progress">{getProgress(props.components)}</p>
    </div>
  );
}

export default Project;
