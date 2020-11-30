import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Project from "../../components/Project/Project";
import Search from "../../components/Search/Search";
import { useProjects } from "../../context/Projects";

function Home() {
  const [search, setSearch] = useState("");
  const { projects } = useProjects();
  const [categorySelect, setCategorySelect] = useState("");

  const ORDER_BY = {
    ID: { label: "id", comparator: (a, b) => a.id - b.id },
    COMPONENTS: {
      label: "components",
      comparator: (a, b) => a.components.length - b.components.length,
    },
    PROGRESS: {
      label: "progress",
      comparator: (a, b) =>
        getProgress(a.components) - getProgress(b.components),
    },
  };

  const [sortSelect, setSortSelect] = useState("ID");

  const getProgress = (components) => {
    if (components.length < 1) {
      return 0;
    }
    var done = 0;
    for (var i in components) {
      if (components[i].done) {
        done += 1;
      }
    }
    const per = (done / components.length) * 100;
    return per.toFixed(2);
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    if (name === "category-select") {
      setCategorySelect(value);
    } else if (name === "sort-select") {
      setSortSelect(value);
    }
  };

  return (
    <div className="Home">
      <h2>Lista de projetos</h2>
      <Search search={search} setSearch={setSearch} />
      <br />
      <span>Filtrar por categoria: </span>
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
      <span>Ordenar por: </span>
      <select name="sort-select" value={sortSelect} onChange={handleSelect}>
        <option value="ID">Id</option>
        <option value="COMPONENTS">Número de Componentes</option>
        <option value="PROGRESS">Progresso</option>
      </select>
      <div id="container">
        {Object.values(projects)
          .filter((project) =>
            project.name.toLowerCase().includes(search.toLowerCase())
          )
          .filter((project) => project.category.includes(categorySelect))
          .sort(ORDER_BY[sortSelect].comparator)
          .map((project) => (
            <Link
              className="project-link"
              to={"/projects/" + project.id}
              key={project.id}
            >
              <Project
                img={project.img}
                name={project.name}
                description={project.description}
                category={project.category}
                components={project.components}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
