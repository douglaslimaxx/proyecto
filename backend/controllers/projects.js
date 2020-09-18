var projects = [
  {
    id: 0,
    name: "projeto1",
    img: "https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg",
    description: "projeto de livros LGBT",
    progress: 0,
    components: []
  }
]

module.exports = {
  getProjects: (req, res) => {
    res.status(200).json(projects)
  },
  createProject: (req, res) => {
    var nextId = projects.length
    console.log(req.body)


    projects.push({
      id: nextId,
      name: req.body.name,
      img: req.body.img,
      description: req.body.description,
      progress: 0,
      components: []
    })
    res.status(201).json(nextId)
  }
}