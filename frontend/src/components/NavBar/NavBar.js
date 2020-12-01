import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="buttons">
        <Link to="/">Home</Link>
        <Link to="/create">Criar Projeto</Link>
      </div>
    </div>
  );
}

export default NavBar;
