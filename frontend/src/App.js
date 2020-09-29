import React from 'react';
import './App.css';
import Project from './components/Project';




class App extends React.Component {
  constructor() {
    super()
    this.state = {
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

      search: ''
    }

  };

  changeSearch = (e) => {
    this.setState({ search: e.target.value })

  };

  render() {
    return (
      <div className="App">
        <h1>Proyecto</h1>
        <div>
          <input type="search" id="searchBar" value={this.state.search} onChange={this.changeSearch} />
        </div>
        <br />
        <div id="container">
          {
            this.state.projects.filter(project => project.name.includes(this.state.search)).map(project => <Project img={project.img} name={project.name} description={project.description} progress={project.progress} />)
          }

        </div>
      </div>
    )
  }
}

export default App;
