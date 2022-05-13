import React from 'react';
import Display from './display';
import Passo from './passo';
export default class Contador extends React.Component{
    
    // constructor(props){
    //     super(props)

    //     this.state = {
    //          passo: props.passo,
    //          valor:0
    //     }
    // }

    state = {                         //objeto da classe
        passo: this.props.passo || 1,
        valor:0
   }

   inc = () =>{
       this.setState({
           valor: this.state.valor + this.state.passo 
       })
   }

   dec = () => {
    this.setState({
        valor: this.state.valor - this.state.passo 
    })
   }

   mudarPasso = (novoPasso) => {
       this.setState({
           passo:novoPasso
       })
   }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                
                 <Display valor={this.state.valor}></Display> 
                 <Passo passo={this.state.passo}
                        onPassoChange={this.mudarPasso}></Passo>
                        {/*função é passada para o filho*/}               
                <div>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>
            </div>
        )
    }

}