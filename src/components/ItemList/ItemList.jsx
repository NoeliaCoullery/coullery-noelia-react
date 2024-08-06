 /* eslint-disable react/prop-types */
 import Item from "../Item/Item";
 import styles from "../ItemList/ItemList.module.css";
 
 const ItemList = ({products}) => {
 
  if(!products) {
    return (
    <>
    <h1>DecoHome, hecho por vos.</h1>
    <div>No hay productos disponibles</div>
    </>
  )}
 
  return (
    <>
    <h1>DecoHome, hecho por vos.</h1>
    <div className={`${styles.container} d-flex`}>
    {products.map((product) => {
      return <Item key={product.id} product={product}/>;
    })}
    </div>
    </>
  );
};
export default ItemList;
