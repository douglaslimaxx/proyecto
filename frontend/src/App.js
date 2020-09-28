import React from 'react';
import './App.css';
import Project from './components/Project';


var data = {
  projects: [
    {
      id: 0,
      name: "projeto1",
      img: "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
      description: "projeto de livros LGBT",
      progress: 0,
      components: []
    },
    {
      id: 1,
      name: "livros",
      img: "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
      description: "projeto de livros LGBT",
      progress: 0,
      components: []
    },
    {
      id: 2,
      name: "filmesFantasia",
      img: "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
      description: "projeto de livros LGBT",
      progress: 0,
      components: []
    },
    {
      id: 3,
      name: "filmesTerror",
      img: "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
      description: "projeto de livros LGBT",
      progress: 0,
      components: []
    }
  ],

  search: 'filme'
}


function App() {

  return (
    <div className="App">
      <h1>Proyecto</h1>
      <div>
        <input type="search" id="searchBar" />
        <button>buscar</button>
      </div>
      <br />
      <div>
        {
          data.projects.filter(project => project.name.includes(data.search)).map(project => <Project img={project.img} name={project.name} description={project.description} progress={project.progress} />)
        }

      </div>
    </div>
  );
}

export default App;
