/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Contacto from "./components/Contacto/Contacto.jsx";
import Cuenta from "./components/Cuenta/Cuenta.jsx";
import Layout from './pages/Layout.jsx';
import Error404 from './components/Error404/Error404.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';


function App() {
   const title = "Un espacio para que hagas lo que más te gusta";


  return (
   <>
   <BrowserRouter>
      <Layout>
         <Routes>
            <Route path= "/" element ={<ItemListContainer title={title}/>}/>
            <Route path= "/contacto" element ={<Contacto/>}/>
            <Route path= "/cuenta" element ={<Cuenta/>}/>
            <Route path= "/inicio" element={<ItemListContainer title={title}/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer title={title}/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path= "*" element={<Error404/>}/>
         </Routes>
      </Layout>
   </BrowserRouter>
   {/* <Navbar categories={categories} title= "DecoHome, hecho por vos."/>*/}
   </>
  );
}


export default App;
