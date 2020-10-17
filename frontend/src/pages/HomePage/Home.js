import React, { useState } from "react";
import "./Home.css";
import Project from "../../components/Project/Project";

function Home(props) {
  const [search, setSearch] = useState("");

  return (
    <div className="Home">
      <h2>Lista de projetos</h2>
      <input
        type="search"
        id="searchBar"
        placeholder="buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <div id="container">
        {props.projects
          .filter((project) => project.name.includes(search))
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
