import * as React from 'react';
import './task.css'
import Button from '@mui/material/Button';

const button = ({children, clicou}) =>{
  return(  <Button onClick={clicou} className='button-task'>
                      {children}
          </Button>)
}

export default button