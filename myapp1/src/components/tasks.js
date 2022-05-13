import React from "react";
import Task from "./task";

  const Tasks = ({tasks}
    ) => {
      return(
        <>
           {tasks.map((task) => <Task />)}
        </>
      )

  }

  /*const Tasks = ({props}) => {
    console.log(props)apace o valores dentro do obejeto

}*/


  export default Tasks