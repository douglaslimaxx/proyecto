import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useProjects } from "../../context/Projects";
import Api from "../../service/api";

function EditProject() {
  let { id } = useParams();
  const { getbyid } = useProjects();
  const project = getbyid(id);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
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

  const editProject = () => {
    Api.updateProject({
      id: id,
      name: name,
      img: image,
      description: description,
      category: category,
    });
    history.push("/projects/" + id);
  };

  return (
    <div>
      <h3>Editar Projeto</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Novo Nome"
      />
      <input
        type="text"
        name="image"
        value={image}
        onChange={handleChange}
        placeholder="Novo link para imagem"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Nova descrição do Projeto"
      />
      <select name="category" value={category} onChange={handleChange}>
        <option value="livros">livros</option>
        <option value="filmes">filmes</option>
        <option value="cursos">cursos</option>
        <option value="tarefas">tarefas</option>
        <option value="locais">locais</option>
        <option value="diversos">diversos</option>
      </select>
      <button onClick={editProject}>Salvar</button>
    </div>
  );
}

export default EditProject;
