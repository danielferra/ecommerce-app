import './App.css';
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting= 'Bienvenidos' />
    </>
  );
}

export default App;
