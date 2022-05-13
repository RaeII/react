import React from 'react';

export default (props) => {
  
    return (
        <div>
            <label htmlFor="passoInput"></label>
            <input id='passoInput' type="number"
                value={props.passo}//passo é pego aqui
                onChange={e => props.onPassoChange(+e.target.value)} />
        </div>
    )
}