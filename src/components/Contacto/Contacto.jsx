/* eslint-disable react/prop-types */
import { useCartContext } from "../../Context/CartContext";


const Contacto = () => {
  const {titulo} = useCartContext();  
 
  return (
      <h2>Formulario de Contacto de {titulo}</h2>
    );
  };
  export default Contacto;
