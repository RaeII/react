import React from 'react';//imr
import './task.css'
//sfc

export default ({task,taskClick}) => {
      return (
               //<div className='task-container' onClick={taskClick}>{task.id + ' - ' + task.title}</div>
               <div className='task-container' onClick={() => taskClick(task.id)}
                style={task.completed ? {borderLeft: "6px solid chartreuse"}: {}}>
                  {task.id + ' - ' + task.title}
                </div>
             )
}
 

