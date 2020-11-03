import React, { useState } from "react";
import Api from "../../service/api";

function AddComponent(props) {
  const [name, setName] = useState();
  const [priority, setPriority] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "priority") {
      setPriority(value);
    }
  };

  const addComponent = () => {
    Api.addComponent(
      {
        name: name,
        priority: priority,
      },
      props.id
    );
    window.location.reload();
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
      <button onClick={addComponent}>Add Componente</button>
    </div>
  );
}

export default AddComponent;
