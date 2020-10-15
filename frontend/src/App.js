import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import "./style/App.css";
import Header from "./components//Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/HomePage/Home";
import Create from "./pages/CreatePage/Create";
import Resume from "./pages/ResumePage/Resume";

function App() {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => setProjects(response));
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar search={search} setSearch={setSearch} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              name="Lista de projetos"
              projects={projects}
              search={search}
              setSearch={setSearch}
            />
          )}
        />
        <Route path="/create" component={Create} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
