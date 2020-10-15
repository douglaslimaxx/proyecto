import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="buttons">
        <a href="/">Home</a>
        <a href="/create">Criar Projeto</a>
        <a href="/resume">Relatório</a>
      </div>
      <input
        type="search"
        id="searchBar"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  );
}

export default NavBar;
