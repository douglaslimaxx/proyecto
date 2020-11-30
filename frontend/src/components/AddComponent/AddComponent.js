import React, { useState } from "react";
import Api from "../../service/api";
import { toast } from "react-toastify";

function AddComponent(props) {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "priority") {
      setPriority(value);
    }
  };

  const verifyNameDuplicate = () => {
    // console.log(props.id); //0
    for (var component in props.components) {
      console.log(component);
      console.log(name);
      return component.name === name;
    }
  };

  const addComponent = () => {
    // console.log(props.id); //1
    Api.addComponent(
      {
        name: name,
        priority: priority,
      },
      props.id
    );
    toast.success("Componente adicionado com sucesso");
  };

  const handleAdd = () => {
    console.log(props.id);
    if (!name) {
      toast.error("O nome deve ser inserido");
    } else if (verifyNameDuplicate()) {
      toast.error("Projeto não pode ter projetos com o mesmo nome");
    } else if (!priority) {
      toast.error("Prioridade do componente deve ser inserida");
    } else if (isNaN(priority)) {
      toast.error("Prioridade deve ser um número");
    } else if (priority > 10 || priority < 0) {
      toast.error("Prioridade deve ter um valor entre 0 e 10");
    } else {
      addComponent();
      window.location.reload();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Nome do componente"
      />
      <input
        type="text"
        name="priority"
        value={priority}
        onChange={handleChange}
        placeholder="Prioridade: 0 a 10"
      />
      <button onClick={handleAdd}>Add Componente</button>
    </div>
  );
}

export default AddComponent;
