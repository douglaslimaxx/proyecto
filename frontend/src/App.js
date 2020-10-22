import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import "./style/App.css";
import Header from "./components//Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/HomePage/Home";
import CreatePage from "./pages/CreatePage/CreatePage";
import Resume from "./pages/ResumePage/Resume";
import Api from "./service/api";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Api.getProjects()
      .then(({ data }) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  const findProjectById = (id) => {
    console.log(projects);
    return projects[id];
  };

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} projects={projects} />}
        />
        <Route
          path="/projects/:id"
          render={(props) => (
            <ProjectPage {...props} findProjectById={findProjectById} />
          )}
        />
        <Route path="/create" component={CreatePage} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
