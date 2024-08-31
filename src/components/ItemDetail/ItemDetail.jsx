 /* eslint-disable react/prop-types */
 import Card from 'react-bootstrap/Card';
 import ItemCount from '../../components/ItemCount/ItemCount';
 import { useCartContext } from '../../Context/CartContext';
 import { useEffect, useState } from 'react';
 import styles from "../ItemDetail/ItemDetail.module.css"
 import { useNavigate } from 'react-router-dom';

    const ItemDetail = ({product}) => {
    const {id, title, image, price, description, stock} = product;
    const { addToCart } = useCartContext();
   
    const [currentStock, setCurrentStock] = useState(stock);
    const navigate = useNavigate();


    useEffect(() => {
      const storedStock = localStorage.getItem(`stock-${id}`);
      if (storedStock) {
      setCurrentStock(Number(storedStock));
      }
    }, [id]);


    const handleOnBuy = (qty) => {
      if (qty <= currentStock) {
        console.log(`Se agregaron ${qty} productos al carrito`);
     
        const item = { id, title, price, description }
        addToCart(item, qty);


        const newStock = currentStock - qty;
        setCurrentStock(newStock)
        localStorage.setItem(`stock-${id}`, newStock);
      } else {
        alert('No hay stock disponible');
      }
   
    };
   
    const handleContinueShopping = () => {
      navigate("/inicio");
    }

    return (
      <>
      <Card className= {`text-center w-25 mx-auto d-block ${styles.cardContainer}`}>
        <Card.Header className={`${styles.cardHeader}`}>{title}</Card.Header>
        <Card.Img
          variant="top" src={image} style={{ width: '100%', height: 'auto', maxWidth: '15rem', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title className={`${styles.cardPrice}`}>${price}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy}/>
        </Card.Body>
        <Card.Footer className="text-muted">Sólo quedan {currentStock}</Card.Footer>
      </Card>
      <button className={styles.continueShopping} onClick={handleContinueShopping}>Seguir comprando</button>
   </>
    )};
   export default ItemDetail;
 
 
 



 