import React from 'react';
import If from './if'
export default props =>{
    return (
        <div>
            <h2>O numero {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <p>Par</p>
            </If>
            <If test={props.numero % 2 === 1} >
               <p>Impar</p>
            </If>
            
       </div>
    )
       
}