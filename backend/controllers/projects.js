// var projects = [
//   {
//     id: 0,
//     name: "Projeto1",
//     img:
//       "https://o4u.com.br/wp-content/uploads/2018/11/gest%C3%A3o-empresarial-na-pr%C3%A1tica.jpg",
//     description: "descrição do projeto 1",
//     category: "diversos",
//     progress: 0,
//     components: [
//       {
//         name: "teste",
//         done: false,
//         priority: 0,
//       },
//       {
//         name: "teste1",
//         done: false,
//         priority: 0,
//       },
//       {
//         name: "teste2",
//         done: false,
//         priority: 0,
//       },
//     ],
//   },
//   {
//     id: 1,
//     name: "Livros",
//     img:
//       "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
//     description: "livros para ler esse ano",
//     category: "livros",
//     progress: 0,
//     components: [
//       {
//         name: "It",
//         done: true,
//         priority: 0,
//       },
//       {
//         name: "Monte dos ventos Uivantes",
//         done: false,
//         priority: 0,
//       },
//       {
//         name: "Dom Casmurro",
//         done: false,
//         priority: 0,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Filmes de fantasia",
//     img: "https://s.aficionados.com.br/imagens/senhordosaneis.jpg",
//     description: "filmes de fantasia para assistir essa semana",
//     category: "filmes",
//     progress: 0,
//     components: [],
//   },
//   {
//     id: 3,
//     name: "Filmes de terror",
//     img: "https://cdn.cinepop.com.br/2016/08/filmesdeterror2017-696x353.jpg",
//     description: "melhores filmes de terror",
//     category: "filmes",
//     progress: 0,
//     components: [],
//   },
//   {
//     id: 4,
//     name: "Filmes da Marvel",
//     img: "https://miro.medium.com/max/2560/0*qdHImq1G588SB9Ii.jpg",
//     description: "todos os filmes da marvel",
//     category: "filmes",
//     progress: 0,
//     components: [],
//   },
//   {
//     id: 5,
//     name: "Cursos udemy",
//     img: "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png",
//     description: "cursos para fazer no isolamento",
//     category: "cursos",
//     progress: 0,
//     components: [],
//   },
// ];

var projects = {
  0: {
    id: 0,
    name: "Livros",
    img:
      "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
    description: "livros para ler esse ano",
    category: "livros",
    progress: 0,
    components: [
      {
        name: "It",
        done: true,
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
  1: {
    id: 1,
    name: "Filmes de fantasia",
    img: "https://s.aficionados.com.br/imagens/senhordosaneis.jpg",
    description: "filmes de fantasia para assistir essa semana",
    category: "filmes",
    progress: 0,
    components: [],
  },

};

module.exports = {
  getProjects: (req, res) => {
    res.status(200).json(projects);
  },
  createProject: (req, res) => {
    // var nextId = [...projects].pop().id + 1;
    var nextId = Math.max(...Object.keys(projects)) + 1;

    projects[nextId] = {
      id: nextId,
      name: req.body.name,
      img: req.body.img,
      description: req.body.description,
      category: req.body.category,
      progress: 0,
      components: [],
    };
    // projects.push({
    //   id: nextId,
    //   name: req.body.name,
    //   img: req.body.img,
    //   description: req.body.description,
    //   category: req.body.category,
    //   progress: 0,
    //   components: [],
    // });
    res.status(201).json(nextId);
  },

  updateProject: (req, res) => {
    const { id } = req.params;
    const { name, img, description, category } = req.body;

    projects[id].name = name;
    projects[id].img = img;
    projects[id].description = description;
    projects[id].category = category;
    res.status(200).json(id);
  },

  deleteProject: (req, res) => {
    const { id } = req.params;
    // const removed = projects.splice(id, 1);
    const removed = delete projects[id];
    res.status(204).json(removed);
  },

  addComponent: (req, res) => {
    const { id } = req.params;
    const { name, priority } = req.body;

    projects[id].components.push({
      name: name,
      done: false,
      priority: priority,
    });
    res.status(201).json(name);
  },

  doComponent: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    index = projects[id].components.findIndex(
      (component) => component.name === name
    );

    projects[id].components[index].done = true;
    res.status(200).json(index);
  },

  deleteComponent: (req, res) => {
    const { id, name } = req.params;
    index = projects[id].components.findIndex(
      (component) => component.name === name
    );
    const removed = projects[id].components.splice(index, 1);
    res.status(200).json(removed);
  },
};
