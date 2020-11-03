import React, { useState } from "react";
import Api from "../../service/api";
import { useHistory } from "react-router-dom";
// import Create from "../../components/Create/Create";

function CreatePage() {
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

  const createProject = () => {
    Api.createProject({
      name: name,
      img: image,
      description: description,
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
      <button onClick={createProject}>Criar Projeto</button>
    </div>
  );
}

export default CreatePage;
