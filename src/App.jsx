/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './Context/CartContext.jsx';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Contacto from "./components/Contacto/Contacto.jsx";
import Cuenta from "./components/Cuenta/Cuenta.jsx";
import Layout from './pages/Layout.jsx';
import Error404 from './components/Error404/Error404.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
   const title = "Un espacio para que hagas lo que más te gusta";

  return (
   <>
   <CartContextProvider>
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path= "/" element ={<ItemListContainer/>}/>
               <Route path= "/inicio" element ={<ItemListContainer/>}/>
               <Route path= "/contacto" element ={<Contacto/>}/>
               <Route path= "/cuenta" element ={<Cuenta/>}/>
               <Route path= "/cart" element ={<Cart/>}/>
               <Route path= "/inicio" element={<ItemListContainer/>}/>
               <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
               <Route path="/product/:id" element={<ItemDetailContainer/>}/>
               <Route path= "/cart" element={<Cart/>}/>
               <Route path= "*" element={<Error404/>}/>
            </Routes>
         </Layout>
      </BrowserRouter>
   </CartContextProvider>
   </>
  );
}

export default App;




