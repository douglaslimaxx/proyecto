import React, { useState } from "react";
import "./Home.css";
import Project from "../../components/Project/Project";
import Search from "../../components/Search/Search";
import { useProjects } from "../../context/Projects";

function Home() {
  const [search, setSearch] = useState("");
  const { projects } = useProjects();
  const [categorySelect, setCategorySelect] = useState("");

  const handleSelect = (e) => {
    const { value } = e.target;
    setCategorySelect(value);
  };

  return (
    <div className="Home">
      <h2>Lista de projetos</h2>
      <Search search={search} setSearch={setSearch} />
      <br />
      <select
        name="category-select"
        value={categorySelect}
        onChange={handleSelect}
        title={"Filtrar"}
        placeholder={"Filtrar"}
      >
        <option value=""></option>
        <option value="livros">livros</option>
        <option value="filmes">filmes</option>
        <option value="cursos">cursos</option>
        <option value="tarefas">tarefas</option>
        <option value="locais">locais</option>
        <option value="diversos">diversos</option>
      </select>
      <div id="container">
        {Object.values(projects)
          .filter((project) =>
            project.name.toLowerCase().includes(search.toLowerCase())
          )
          .filter((project) => project.category.includes(categorySelect))
          .map((project) => (
            <a href={"/projects/" + project.id} key={project.id}>
              <Project
                img={project.img}
                name={project.name}
                description={project.description}
                category={project.category}
                components={project.components}
              />
            </a>
          ))}
      </div>
    </div>
  );
}

export default Home;
