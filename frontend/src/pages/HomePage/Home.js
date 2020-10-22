import React, { useState } from "react";
import "./Home.css";
import Project from "../../components/Project/Project";
import Search from "../../components/Search/Search";

function Home(props) {
  const [search, setSearch] = useState("");
  console.log(props);

  return (
    <div className="Home">
      <h2>Lista de projetos</h2>
      <Search search={search} setSearch={setSearch} />
      <br />
      <div id="container">
        {props.projects
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
