import React, { useState } from "react";

export default (props) => {
  const [nome, alteraNome] = useState("israel");
  
  return (
    <div className="container-input">
      <h2>{nome}</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => alteraNome(e.target.value)}
      />
    </div>
  );
};
