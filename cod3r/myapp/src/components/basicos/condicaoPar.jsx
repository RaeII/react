import React from 'react';

export default (props) =>{
    return (
        <div>
            <h2>O numero {props.numero}</h2>
            {props.numero % 2 === 0 ?

               <p>Par</p>
               :
               <p>Impar</p>
            }
            
       </div>
    )
       
}