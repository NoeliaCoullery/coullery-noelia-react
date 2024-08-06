 /* eslint-disable react/prop-types */
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 
    const ItemDetail = ({product}) => {
    const {title, image, price, description, stock} = product;
    
     return (
         <Card className="text-center w-100%">
         <Card.Header>{title}</Card.Header>
         <Card.Img variant="top" src={image} />
         <Card.Body>
           <Card.Title>${price}</Card.Title>
           <Card.Text>
            {description}
           </Card.Text>
           <Button variant="primary">Comprar</Button>
         </Card.Body>
         <Card.Footer className="text-muted">Sólo quedan {stock}</Card.Footer>
       </Card>
     );
   }
   export default ItemDetail;
 
 
 