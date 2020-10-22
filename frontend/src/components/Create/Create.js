import React from "react";

function Create() {
  return (
    <div>
      <h3>Criar Projeto</h3>
      <input type="text" name="name" placeholder="Nome do Projeto" />
      <input type="text" name="image" placeholder="Link para imagem" />
      <input
        type="text"
        name="description"
        placeholder="Descrição do Projeto"
      />
    </div>
  );
}

export default Create;
