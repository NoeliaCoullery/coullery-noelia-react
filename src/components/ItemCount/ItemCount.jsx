import {useState} from "react";

const ItemCount = ({ stock, initial}) => {
    const [qty, setQty] = useState(initial);

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
return(
    <div>
        <button onClick={() => handleClick ("-")}>-</button>
        <span>{qty}</span>
        <button onClick={() => handleClick ("+")}>+</button>
    </div>
)
};
export default ItemCount;