import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/dbConnection';
import { collection, addDoc } from 'firebase/firestore';

const Cart = () => {
  const { cart, total, removeItem, clearCart } = useCartContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", tel: "", email: "" });

  const handleRemoveItem = (id, price, qty) => {
    removeItem(id, price, qty);
    if (cart.length === 1) {
      navigate('/inicio');
    }
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveCart = () => {
    const ordersCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: total
    };

    addDoc(ordersCollection, newOrder)
      .then((doc) => {
        alert("La orden fue guardada con éxito con el ID: " + doc.id);
        console.log("La orden fue guardada con éxito con el ID: " + doc.id);
        clearCart();
        navigate('/inicio');
        setFormData({ name: "", tel: "", email: "" });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <>
      {cart.length > 0 ? (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ id, title, price, qty }, index) => (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>$ {price}</td>
                  <td>{qty}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(id, price, qty)}>Eliminar ítem</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4}>Total</td>
                <td>$ {total}</td>
              </tr>
            </tbody>
          </Table>
          <button onClick={handleClearCart}>Vaciar carrito</button>
        </>
      ) : (
        <>
          <p>El carrito está vacío.</p>
        </>
      )}

      {/* Campos de entrada y botón siempre visibles */}
      <input
        type="text"
        name="name"
        id="name"
        placeholder='Ingresá tu nombre'
        onChange={handleOnChange}
      />
      <input
        type="number"
        name="tel"
        id="tel"
        placeholder='Ingresá tu teléfono'
        onChange={handleOnChange}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder='Ingresá tu email'
        onChange={handleOnChange}
      />
      <button onClick={handleSaveCart}>Finalizar compra</button>
    </>
  );
};

export default Cart;


