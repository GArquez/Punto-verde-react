import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemList from './components/ItemListContainer/ItemList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemList 
      greeting={'¡Bienvenido a Punto Verde - Tucumán!'}
      />
    </div>
  );
}

export default App;
