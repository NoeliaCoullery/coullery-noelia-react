import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { categoriasNavbar } from './mock/mockData.js';

function App() {
   const title = "Un espacio para que hagas lo que más te gusta";

  return (
     <>
      <Navbar categoriasNavbar={categoriasNavbar} title= "DecoHome, hecho por vos."/>
      <ItemListContainer title={title}/>
      </>
  )
}

export default App;
