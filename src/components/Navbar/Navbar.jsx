/* eslint-disable react/prop-types */
import styles from "../Navbar/Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import NavbarLink from "../NavbarLink/NavbarLink.jsx";
import logo from "../../assets/logo.jpg"
import { categories } from '../../mock/mockData';
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
    return(
        <nav className="NavBar">
            <div>
                <h1>{title}</h1>
                <Link to= "/">
                    <img src= {logo} className={styles.logo} alt="/" />
                </Link>
            </div>
            <div className={styles.navItems}>
                {categories.map((element, index) =>{
                    return (
                        <NavbarLink key={index} category={element}/>);
                   
                })}
                </div>
                <CartWidget/>
        </nav>
    );
}

export default Navbar;










