import React from "react";
import { Switch, Route } from "react-router";
import "./style/App.css";
import Header from "./components//Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/HomePage/Home";
import CreatePage from "./pages/CreatePage/CreatePage";
import Resume from "./pages/ResumePage/Resume";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectsProvider from "./context/Projects";

function App() {
  return (
    <ProjectsProvider>
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/:id" component={ProjectPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </ProjectsProvider>
  );
}

export default App;
