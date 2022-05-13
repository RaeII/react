import React from 'react';

//deve retornar um bloco apenas ou dentro de tags vazias
/*function Primeiro(){
    return (<>
                 <h1>Primeiro</h1>
                 <h2>Exemplo de um componente</h2>
             </>)

      Dessa forma também
      
      <React.Fragment>
                 <h1>Primeiro</h1>
                 <h2>Exemplo de um componente</h2>
      </React.Fragment>
}*/

//Forma classica de funcao
/*
function Primeiro(){
    return (<div>
                 <h1>Primeiro</h1>
                 <h2>Exemplo de um componente</h2>
           </div>)
}*/

export default () =>
 <>
      <h1>Funcão Arrow</h1>
      <h2>Primeiro</h2>
      <h2>Exemplo de um componente</h2>
 </>

