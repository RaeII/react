import React from "react";
import Task from "./task";

  export default ({tasks}) => {
      return(
        <>
           {tasks.map((task) => <Task task={task}></Task>)}
        </>
      )
}
  

  /*const Tasks = ({props}) => {
    console.log(props)apace o valores dentro do obejeto

}*/
