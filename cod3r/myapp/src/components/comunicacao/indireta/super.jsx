import React, {useState} from 'react';

import Sub from './sub';

export default (props) => {
    
    const [texto, setTexto] = useState('Valor incicial')/*Passa um estado inicial*/
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado,texto) {
        setNum(valorGerado)/*seta o novo valor*/
        setTexto(texto)
    }
    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}