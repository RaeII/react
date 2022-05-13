import React from "react";

// export default (props) => {
//   return (
//     <div>
//       <button onClick={() =>{ 
//              props.onClicar(Math.random())
//         }}>Ok</button>
//     </div>
//   );
// };

export default (props) => {
    function acao(){
         props.onClicar(Math.random(),'Valor gerado')
    }
       

      return (
        <div>
          <button onClick={acao}>Ok</button>
        </div>
      );
    };
