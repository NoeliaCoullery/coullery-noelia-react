import { useCartContext } from "../../Context/CartContext";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { qtyItems } = useCartContext();
    return (
        <Link to="/cart" className={styles.cartWidget}>
        🛒<span>{ qtyItems }</span>
        </Link>
    )  
};


export default CartWidget;