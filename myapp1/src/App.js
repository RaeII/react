import React, { useState } from "react";
import Tasks from "./components/tasks";
import "./app.css"
import AddTasks from "./components/add-tasks";
import task from "./components/task";


 export default (props) => { //hero function
  //App é pai das tasks, pois ele o renderiza 
    
   //array inicial das tasks
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
   ])
    
    //click para concluir
    function taskClick(taskId){
      const newTask = tasks.map((task) =>{
          if(task.id === taskId) return {...task, completed: !task.completed}
          return task;
      })

      setTasks(newTask)
    }

     
    //adiciona uma nova task no array
    function handleTaskAddition(taskTitle){
      var lastElement = tasks.slice(-1)[0]
      var lastId = +lastElement.id
      const newTask = [...tasks,{id:(lastId + 1),
                                 title: taskTitle,
                                 completed: false
                       }]
            setTasks(newTask)         
    }
  //renderiza todas as tasks  
  return(
      <>
          <div className="container">
              <AddTasks TaskAdd={handleTaskAddition}/>
              <Tasks tasks = {tasks} taskClick={taskClick} />
          </div>
    
      </>
    )
}
