import React, { useState } from "react";
import "./app.css"

const App = () => { //hero function
   let [msg, traduzir] = useState('Hello World!')//state sempre atualiza o componente
   //chaves para aparecer o conteudo da variavel  
  return(
      <>
          <h1>{msg}</h1> 
          <div className="container">
            
          </div>
          <button onClick={() => traduzir("Ola Mundo!")}> Traduzir</button>
      </>
    )
}

export default App;//index importa o App então precisa exportar