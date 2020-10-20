import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import "./style/App.css";
import Header from "./components//Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/HomePage/Home";
import CreatePage from "./pages/CreatePage/CreatePage";
import Resume from "./pages/ResumePage/Resume";
import Api from "./service/api";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Api.getProjects()
      .then(({ data }) => setProjects(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home projects={projects} />}
        />
        <Route path="/create" component={CreatePage} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
