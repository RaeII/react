import React, {useState} from 'react';
import Button from './button';

const AddTask = (props) =>{
      const [inputData, setInputData] = useState('')

      const handleInputChange = (e) => {
           setInputData(e.target.value)
      }

      const addTaskClick = () =>{
          props.TaskAdd(inputData)
      }

    return (
        <div className='input-add'>
        <input onChange={handleInputChange} type="text" value={inputData}/>
        <Button clicou={addTaskClick }>Add Task</Button>
        </div>
    )
}

export default AddTask