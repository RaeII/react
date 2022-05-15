import React, { useState } from "react";
import Tasks from "./components/tasks";
import "./app.css"
import AddTasks from "./components/add-tasks";


 export default (props) => { //hero function
  //App é pai das tasks, pois ele o renderiza 

   const [tasks, setTasks] = useState([
      {
           id : 1,
           title: "Correr",
           completed: false,
      },
      {
        id: 2,
        title: "Flexão",
        completed: true,
      }
   ])//state sempre atualiza o componente
     
 
    function handleTaskAddition(taskTitle){
      var lastElement = tasks.slice(-1)[0]
      var lastId = +lastElement.id
      const newTask = [...tasks,{id:(lastId + 1),
                                 title: taskTitle,
                                 completed: false
                       }]
            setTasks(newTask)         
    }
  return(
      <>
          <div className="container">
              <AddTasks TaskAdd={handleTaskAddition}/>
              <Tasks tasks = {tasks} />
          </div>
    
      </>
    )
}
