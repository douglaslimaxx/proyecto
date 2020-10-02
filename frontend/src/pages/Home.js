import React, { useState } from 'react';
import './Home.css';
import Project from '../components/Project';


const projects = [
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
  },
  {
    id: 4,
    name: "filmesMarvel",
    img: "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: []
  },
  {
    id: 5,
    name: "curso udemy",
    img: "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: []
  }
]

const initialSearch = ''

function Home() {

  const [search, setSearch] = useState(initialSearch);

  return (
    <div className="Home">
      <div>
        <input type="search" id="searchBar" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <br />
      <div id="container">
        {
          projects.filter(project => project.name.includes(search)).map(project => <a href="/create"><Project img={project.img} name={project.name} description={project.description} progress={project.progress} /></a>)
        }
      </div>
    </div >
  )
}

export default Home;
