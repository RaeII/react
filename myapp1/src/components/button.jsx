import React from 'react';
import './task.css'

export default ({children, clicou}) =>{
  return(  <button onClick={clicou} className='button-task'>
                      {children}
          </button>)
}