import React, { useState } from "react";
import "./Home.css";
import Project from "../../components/Project/Project";
import Search from "../../components/Search/Search";
import { useProjects } from "../../context/Projects";

function Home() {
  const [search, setSearch] = useState("");
  const { projects } = useProjects();

  return (
    <div className="Home">
      <h2>Lista de projetos</h2>
      <Search search={search} setSearch={setSearch} />
      <br />
      <div id="container">
        {projects
          .filter((project) =>
            project.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((project) => (
            <a href={"/projects/" + project.id}>
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
