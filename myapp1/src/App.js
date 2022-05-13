import React, { useState } from "react";
import Tasks from "./components/tasks";
import "./app.css"

const App = () => { //hero function
  //App é pai das tasks, pois ele o renderiza 
   const [tasks, setTasks] = useState([
      {
           id : "1",
           title: "Correr",
           completed: false,
      },
      {
        id: "2",
        title: "Flexão",
        completed: true,
      }
   ])//state sempre atualiza o componente
     
  return(
      <>
          <div className="container">
              <Tasks tasks = {tasks} />
          </div>
    
      </>
    )
}

export default App;//index importa o App então precisa exportar