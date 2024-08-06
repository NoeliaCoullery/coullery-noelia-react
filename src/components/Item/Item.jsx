/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Item = ({product}) => {
 
   
  return (
  <Card style={{ width: '100%' }} className = "m-1 d-flex">
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>${product.price}</Card.Text>
      <Link to={`/product/${product.id}`}>
      <Button variant="secondary">+ Info</Button>
      </Link>
    </Card.Body>
  </Card>
  );
};


export default Item;


