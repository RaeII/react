import React from "react";
import Task from "./task";

  export default ({tasks,taskClick}) => {
      return(
        <>
           {tasks.map((task) => <Task task={task} taskClick={taskClick}></Task>)}
        </>
      )
}
  

  /*const Tasks = ({props}) => {
    console.log(props)apace o valores dentro do obejeto

}*/
