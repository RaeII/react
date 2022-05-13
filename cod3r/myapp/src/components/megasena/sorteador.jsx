import React, {useState} from 'react';
import Display from './display';
import './style.css'

export default (props) =>{

    const [num, setNum] = useState([])/*Passa um estado inicial*/
    
    function sortear(){
        let aleatorio = []
        for (let i = 0; i < 6; i++) {
             aleatorio[i] = Math.floor(Math.random() * 60);
        }
             setNum(aleatorio)
            
    }
   return(
           <Display funSortear={sortear}
                    num={num}
           ></Display>
         )
}