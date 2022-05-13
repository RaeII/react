import React from 'react';

import Produtos from '../../data/produtos.js'

export default props =>{

       function getProdutosListItem(){
         return Produtos.map(prod =>{
             return <li key={prod.id}>{/*Na repetição react precisa de uma key para identificar cada elemento*/}
                     {prod.id} - {prod.nome} - R$ {prod.preco}
                 </li>
         })
       }

       return(
            <div>
                <h2>Repetição</h2>
                <ul>
                    {getProdutosListItem()}
                </ul>
            </div>

      )
}