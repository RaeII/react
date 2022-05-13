import React from 'react';

export default props =>
    <div>
        <h4>{props.children} {props.sobrenome}</h4>
    </div>
    //children vai pegar sua extenções
    //pai passa para o filho os sobrenomes