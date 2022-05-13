import React from 'react';

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

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <div>
                    <label htmlFor="passoInput"></label>
                    <input id='passoInput' type="number" 
                     value={this.state.passo}
                     onChange={e => this.setState({passo: +e.target.value})}/>
                </div>
                <h4>Valor: {this.state.valor}</h4>
                <div>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>
            </div>
        )
    }

}