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
    </div>
  );
}

export default NavBar;
