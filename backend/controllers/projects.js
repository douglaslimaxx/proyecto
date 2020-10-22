var projects = [
  {
    id: 0,
    name: "Projeto1",
    img:
      "https://o4u.com.br/wp-content/uploads/2018/11/gest%C3%A3o-empresarial-na-pr%C3%A1tica.jpg",
    description: "descrição do projeto 1",
    progress: 0,
    components: [
      {
        name: "teste",
        done: false,
        priority: 0,
      },
      {
        name: "teste",
        done: false,
        priority: 0,
      },
      {
        name: "teste",
        done: false,
        priority: 0,
      },
    ],
  },
  {
    id: 1,
    name: "Livros",
    img:
      "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
    description: "livros para ler esse ano",
    progress: 0,
    components: [
      {
        name: "It",
        done: false,
        priority: 0,
      },
      {
        name: "Monte dos ventos Uivantes",
        done: false,
        priority: 0,
      },
      {
        name: "Dom Casmurro",
        done: false,
        priority: 0,
      },
    ],
  },
  {
    id: 2,
    name: "Filmes de fantasia",
    img: "https://s.aficionados.com.br/imagens/senhordosaneis.jpg",
    description: "filmes de fantasia para assistir essa semana",
    progress: 0,
    components: [],
  },
  {
    id: 3,
    name: "Filmes de terror",
    img: "https://cdn.cinepop.com.br/2016/08/filmesdeterror2017-696x353.jpg",
    description: "melhores filmes de terror",
    progress: 0,
    components: [],
  },
  {
    id: 4,
    name: "Filmes da Marvel",
    img: "https://miro.medium.com/max/2560/0*qdHImq1G588SB9Ii.jpg",
    description: "todos os filmes da marvel",
    progress: 0,
    components: [],
  },
  {
    id: 5,
    name: "Cursos udemy",
    img: "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png",
    description: "cursos para fazer no isolamento",
    progress: 0,
    components: [],
  },
];

module.exports = {
  getProjects: (req, res) => {
    res.status(200).json(projects);
  },
  createProject: (req, res) => {
    var nextId = projects.length;
    console.log(req.body);

    projects.push({
      id: nextId,
      name: req.body.name,
      img: req.body.img,
      description: req.body.description,
      progress: 0,
      components: [],
    });
    res.status(201).json(nextId);
  },
};
