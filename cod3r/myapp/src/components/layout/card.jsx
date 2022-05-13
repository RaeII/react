import React from 'react';

export default props =>
  <div className='card' style={{borderColor:props.color || '#75d803'}}>
    <div>
          {props.children} 
        <div className='footer' style={{backgroundColor:props.color || '#000'}}>
             {props.titulo}
        </div>
    </div>
  </div>