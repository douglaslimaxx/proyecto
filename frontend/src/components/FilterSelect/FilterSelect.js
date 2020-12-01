import React from "react";

function FilterSelect(props) {
  const { categorySelect, handleSelect } = props;

  return (
    <span>
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
    </span>
  );
}

export default FilterSelect;
