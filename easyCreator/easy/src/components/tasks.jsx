import React from "react";
import Task from "./task";

const task = ({tasks,taskClick}) => {
      return(
        <>
           {tasks.map((task) => <Task task={task} taskClick={taskClick}></Task>)}
        </>
      )
}

export default task
  
