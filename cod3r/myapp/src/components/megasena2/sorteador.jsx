import React, {useState} from 'react';
import Display from './display';
import './style.css'

export default (props) =>{
     function geraNumerosNaoContido(array){
           const max = 60
           const min = 1
           const novoNumero = Math.floor(Math.random() * (max - min)) 
           //includes tem o valor, se tiver vai verificar até retornar um valor que não existe
           return array.includes(novoNumero) ? geraNumerosNaoContido(array) : novoNumero
     }
    //array ja com 6 posições e o fill passando 0 em todas
    const [num, setNum] = useState(Array(6).fill(0))/*Passa um estado inicial*/
    
    function sortear(){
        let aleatorio = Array(6).fill(0).reduce((a)=>[...a,geraNumerosNaoContido(a)],[])
             setNum(aleatorio)
            
    }
   return(
           <Display funSortear={sortear}
                    num={num}
           ></Display>
         )
}