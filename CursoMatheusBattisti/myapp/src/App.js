import './App.css';
import HelloWord from './components/HelloWorld';
import ListDogs from './components/2.props/ListDogs'
import List from './components/1.fragments/List'


/**
 * - Utilizando props
 * - Imagem (carregadas pela pasta public)
 * 
 */

function App() {
   
  return (
    <div className="App">
      <h1>Toma essa</h1>
      <HelloWord/>
      <ListDogs/>
      <p>Agora essa porra vai</p>
      <List/>
    </div>
  );
}

export default App;
