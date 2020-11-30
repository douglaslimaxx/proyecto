import React from "react";
import { Switch, Route } from "react-router";
import "./style/App.css";
import Header from "./components//Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/HomePage/Home";
import CreatePage from "./pages/CreatePage/CreatePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectsProvider from "./context/Projects";
import EditProject from "./pages/EditProject/EditProject";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ProjectsProvider>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/:id" component={ProjectPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/edit/:id" component={EditProject} />
        </Switch>
      </ProjectsProvider>
    </div>
  );
}

export default App;
