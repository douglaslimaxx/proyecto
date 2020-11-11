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
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "image") {
      setImage(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const editProject = () => {
    Api.updateProject({
      id: id,
      name: name,
      img: image,
      description: description,
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
      <button onClick={editProject}>Salvar</button>
    </div>
  );
}

export default EditProject;
