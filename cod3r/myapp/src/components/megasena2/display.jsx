import React from 'react';

export default (props) =>{
    return(
        <>
        <h2>Sorteio da Mega</h2>
         <div>{props.num.join(' ')}</div>
        <button onClick={props.funSortear}
        className='btn-sort'>Sorteiar</button>
        </>
    )
}