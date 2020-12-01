import React from "react";

function SortSelect(props) {
  const { sortSelect, handleSelect } = props;

  return (
    <span>
      <span>Ordenar por: </span>
      <select name="sort-select" value={sortSelect} onChange={handleSelect}>
        <option value="ID">Id</option>
        <option value="NAME">Nome</option>
        <option value="COMPONENTS">Número de Componentes</option>
        <option value="PROGRESS">Progresso</option>
      </select>
    </span>
  );
}

export default SortSelect;
