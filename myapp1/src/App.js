/* eslint-disable no-unused-vars */
import React,{ useEffect, useState,  useCallback } from "react";
 

    // Componente filho que recebe uma função como prop
  const ChildComponent = React.memo(({ onClick }) => {
    console.log('ChildComponent renderizado');
    return <button onClick={onClick}>Clique me</button>;
  });

  // Componente pai
  function ParentComponent() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // Sem useCallback
    // const handleClick = () => {
    //   setCount(count + 1);
    // };

    // Com useCallback
    const handleClick = useCallback(() => {
      setCount(prevCount => prevCount + 1);
    }, []); // Array de dependências vazio

    // useCallback com dependências
    const expensiveCalculation = useCallback(() => {
      console.log('Cálculo caro executado');
      return count * 2;
    }, [count]); // Depende de 'count'

    // useCallback com dependências
    const printLogCount = useCallback(() => {
      console.log('COUNT',count *2)
      handleClick()
    },[count,handleClick]); // Depende de 'count'

    useEffect(() => {
      const result = expensiveCalculation();
      console.log('Resultado do cálculo:', result);
    }, [expensiveCalculation]);

    return (
      <div 
        style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          height:'100vh',
          width:'100vw'
        }}>
        <div>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <p>Count: {count}</p>
          <ChildComponent onClick={handleClick} />
          <button onClick={printLogCount}>print log</button>;
        </div>

      </div>
    );
  }



export default ParentComponent