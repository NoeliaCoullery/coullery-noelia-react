/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styles from "../Item/Item.module.css";


const Item = ({product}) => {
 
   
  return (
    <div className={`${styles.containerItem}`}>
    <Card className="m-1 d-flex" style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
      <Card.Img
        variant="top" src={product.image} style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }}/>
      <Card.Body>
        <Card.Title className= "d-flex justify-content-center">{product.title}</Card.Title>
        <Card.Text className= {`d-flex justify-content-center ${styles.cardPrice}`}> ${product.price}</Card.Text>
        <Link to={`/product/${product.id}`}>
          <Button variant="secondary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  );
 
};

export default Item;




