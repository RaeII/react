import React from 'react';//imr
import './task.css'
//sfc

export default ({task}) => {
      return (
               <div className='task-container'>{task.id + ' - ' + task.title}</div>
             )
}
 

