import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useProjects } from "../../context/ProjectsContext";

function CreatePage() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState("diversos");
  const history = useHistory();
  const { createProject } = useProjects();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "image") {
      setImage(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };

  const create = () => {
    createProject({
      name: name,
      img: image,
      description: description,
      category: category,
    }).then((data) => {
      history.push("/projects/" + data);
    });
  };

  function checkURL(url) {
    return (
      url.match(/\.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$/) !=
      null
    );
  }

  const handleCreation = () => {
    if (!name) {
      toast.error("O nome do projeto deve ser inserido");
    } else if (!image) {
      toast.error("O link para imagem deve ser inserido");
    } else if (!checkURL(image)) {
      toast.error("O link deve ser de uma imagem");
    } else if (!description) {
      toast.error("A descrição do projeto deve ser inserida");
    } else if (!category) {
      toast.error("A categoria do projeto deve ser inserida");
    } else {
      create();
    }
  };

  return (
    <div>
      <h3>Criar Projeto</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Nome do Projeto"
      />
      <input
        type="text"
        name="image"
        value={image}
        onChange={handleChange}
        placeholder="Link para imagem"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Descrição do Projeto"
      />
      <select name="category" value={category} onChange={handleChange}>
        <option value="livros">livros</option>
        <option value="filmes">filmes</option>
        <option value="cursos">cursos</option>
        <option value="tarefas">tarefas</option>
        <option value="locais">locais</option>
        <option value="diversos">diversos</option>
      </select>
      <button onClick={handleCreation}>Criar Projeto</button>
      <div className="preview">
        <img src={image} alt="" />
        <h6>Preview</h6>
      </div>
    </div>
  );
}

export default CreatePage;
