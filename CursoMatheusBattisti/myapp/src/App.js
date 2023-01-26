import './App.css';
import HelloWord from './components/HelloWorld';
import MyDogs from './components/MyDogs'


function App() {
  
  const pipi = 'pipi'
 
  return (
    <div className="App">
      <h1>Toma essa</h1>
      <HelloWord/>
      <MyDogs dogName='Connor'/>
      <MyDogs dogName={pipi} img={'./images/dogCaramelo.png'} cor='caramelo'/>
      <p>Agora essa porra vai</p>
    </div>
  );
}

export default App;
