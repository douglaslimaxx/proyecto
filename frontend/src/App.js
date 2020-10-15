import React, { useState } from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Resume from "./pages/Resume";

const projects = [
  {
    id: 0,
    name: "projeto1",
    img:
      "https://o4u.com.br/wp-content/uploads/2018/11/gest%C3%A3o-empresarial-na-pr%C3%A1tica.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: [],
  },
  {
    id: 1,
    name: "livros",
    img:
      "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: [],
  },
  {
    id: 2,
    name: "filmes de fantasia",
    img: "https://s.aficionados.com.br/imagens/senhordosaneis.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: [],
  },
  {
    id: 3,
    name: "filmes de terror",
    img: "https://cdn.cinepop.com.br/2016/08/filmesdeterror2017-696x353.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: [],
  },
  {
    id: 4,
    name: "filmes da Marvel",
    img: "https://miro.medium.com/max/2560/0*qdHImq1G588SB9Ii.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: [],
  },
  {
    id: 5,
    name: "cursos udemy",
    img: "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png",
    description: "projeto de livros LGBT",
    progress: 0,
    components: [],
  },
];

const initialSearch = "";

function App() {
  const [search, setSearch] = useState(initialSearch);

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
