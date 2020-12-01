var projects = {
  0: {
    id: 0,
    name: "Livros",
    img:
      "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
    description: "livros para ler esse ano",
    category: "livros",
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
    components: [],
  },
  2: {
    id: 2,
    name: "Filmes da Marvel",
    img: "https://br.web.img3.acsta.net/newsv7/19/04/22/20/34/5550692.jpg",
    description: "filmes da Marvel para assistir na quarentena",
    category: "filmes",
    components: [
      {
        name: "Homem de Ferro 1",
        done: true,
        priority: 0,
      },
      {
        name: "Homem de Ferro 2",
        done: true,
        priority: 0,
      },
      {
        name: "Homem de Ferro 3",
        done: false,
        priority: 0,
      },
      {
        name: "Thor 1",
        done: false,
        priority: 0,
      },
      {
        name: "Doutor Estranho",
        done: true,
        priority: 0,
      },
      {
        name: "Guardiões da Galáxia",
        done: true,
        priority: 0,
      },
    ],
  },
  3: {
    id: 3,
    name: "Cursos de python",
    img: "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png",
    description: "filmes de fantasia para assistir essa semana",
    category: "cursos",
    components: [
      {
        name: "Curso de python para iniciantes",
        done: true,
        priority: 10,
      },
      {
        name: "Curso de análise de dados com python",
        done: false,
        priority: 10,
      }
    ],
  },
  4: {
    id: 4,
    name: "Task da semana no epol",
    img: "https://www.letscloud.io/blog/wp-content/uploads/2019/07/tools-of-sys-admin.jpg",
    description: "Lista de tarefas para terminar essa semana na epol",
    category: "tarefas",
    components: [
      {
        name: "Analisar servidor",
        done: true,
        priority: 10,
      },
      {
        name: "Deploy de aplicação",
        done: true,
        priority: 5,
      },
    ],
  },
};

module.exports = {
  getProjects: (req, res) => {
    res.status(200).json(projects);
  },
  createProject: (req, res) => {
    var nextId = Math.max(...Object.keys(projects)) + 1;
    if (Object.keys(projects).length < 1) {
      nextId = 0;
    }

    projects[nextId] = {
      id: nextId,
      name: req.body.name,
      img: req.body.img,
      description: req.body.description,
      category: req.body.category,
      components: [],
    };
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
