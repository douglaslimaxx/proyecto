import React, { useEffect, useState } from "react";
import "./Home.css";
import Project from "../../components/Project/Project";
import Search from "../../components/Search/Search";
import { useProjects } from "../../context/Projects";

function Home() {
  const [search, setSearch] = useState("");
  const { projects } = useProjects();
  const [categorySelect, setCategorySelect] = useState("");
  const [pro, setPro] = useState();

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

  const sortById = (a, b) => {
    return a.id - b.id;
  };

  const sortByNumberOfComponents = (a, b) => {
    return a.components.length - b.components.length;
  };

  const sortByProgress = (a, b) => {
    return getProgress(a.components) - getProgress(b.components);
  };

  const [sortSelect, setSortSelect] = useState("");

  useEffect(() => {
    setPro(Object.values(projects));
    if (sortSelect === "progress") {
      setPro(Object.values(projects).sort(sortByProgress));
    }
  }, [projects, setPro]);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    if (name === "category-select") {
      setCategorySelect(value);
    } else if (name === "sort-select") {
      console.log(value);
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
      <select
        name="sort-select"
        value={sortSelect}
        onChange={handleSelect}
      >
        <option value="id">Por id</option>
        <option value="components">Por número de Componentes</option>
        <option value="progress">Por progresso</option>
      </select>
      <div>
        {pro ? (
          <div id="container">
            {pro
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
        ) : (<p>Loading</p>)}
      </div>
      {/* <div id="container">
        {pro
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
      </div> */}
    </div>
  );
}

export default Home;
