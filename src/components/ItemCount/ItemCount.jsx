/* eslint-disable react/prop-types */

import {useState} from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import styles from "../ItemCount/ItemCount.module.css"


const ItemCount = ({ stock, initial, handleOnBuy }) => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(initial);
    const [itemAdded, setItemAdded] = useState(false);


const handleClick = (op) => {
        console.log(op);
        op === "-" ? clickMenos() : clickMas();
    };
   
const clickMenos = () => {
          if (qty === 0){
        alert("¡Agregá algo al carrito!");
        return;
    }
    setQty(qty - 1);
};

const clickMas = () => {
    if (qty === stock) {
        alert("Agregaste el stock máximo");
        return;
    }
    setQty(qty + 1);
};

const handleAddToCart = () => {
    handleOnBuy(qty)
    setItemAdded(true)
}

const handleGoToCheckout = () => {
    setItemAdded(false)
    navigate("/cart")
}
return (
    <>
        <div className={styles.buttonContainer}>
            <button  className={styles.button} onClick={() => handleClick("-")} disabled={qty === 1}> - </button>
            <span className={styles.quantity}>{qty}</span>
            <button  className={styles.button}  onClick={() => handleClick("+")} disabled={!stock}> +  </button>
        </div>


        {itemAdded ? (
        <Button variant="secondary" onClick={handleGoToCheckout}>Ir al carrito</Button>
        ) : (
        <Button variant="secondary" onClick={handleAddToCart}>Agregar al carrito</Button>
    )}
    </>
);
};
export default ItemCount;




