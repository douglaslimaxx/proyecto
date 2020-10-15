import React, { useState } from "react";
import "./Home.css";
import Project from "../../components/Project/Project";

function Home(props) {
  return (
    <div className="Home">
      <h2>{props.name}</h2>
      <br />
      <div id="container">
        {props.projects
          .filter((project) => project.name.includes(props.search))
          .map((project) => (
            <a href="/create">
              <Project
                img={project.img}
                name={project.name}
                description={project.description}
                progress={project.progress}
              />
            </a>
          ))}
      </div>
    </div>
  );
}

export default Home;
