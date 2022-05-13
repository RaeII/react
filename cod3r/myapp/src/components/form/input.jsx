import React from 'react';

export default (props) =>{
    let nome ='pedro'
    return(
        <div className='container-input'>
          <input type="text" value={nome} readOnly />{/*input é um controlled components- o valor não muda pelo front, tem que mudar o estado da aplicação para mudar o front*/}

          {/*readOnly - o input será apenas para leitura, react não retornará erro*/}

          {/*<input type="text" value={null} />Pode passar valor pelo input com um null*/}
        </div>
    )
}