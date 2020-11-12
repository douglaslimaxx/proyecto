import React, { useState } from "react";
import Api from "../../service/api";
import { useHistory } from "react-router-dom";

function CreatePage() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState("diversos");
  const history = useHistory();

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

  const createProject = () => {
    Api.createProject({
      name: name,
      img: image,
      description: description,
      category: category,
    });
    history.push("/");
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
        <option value="diversos">diversos</option>
        <option value="livros">livros</option>
        <option value="filmes">filmes</option>
        <option value="cursos">cursos</option>
        <option value="tarefas">tarefas</option>
        <option value="locais">locais</option>
        <option value="diversos">diversos</option>
      </select>
      <button onClick={createProject}>Criar Projeto</button>
    </div>
  );
}

export default CreatePage;
