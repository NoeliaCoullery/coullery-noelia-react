/* eslint-disable react/prop-types */
import styles from "../Navbar/Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

import logo from "../../assets/logo.jpg";
import { categories } from '../../mock/mockData';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={styles.navItems}>
        <div className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>DecoHome, hecho por vos.</h1>
            <Link to="/">
                <img src={logo} className={styles.logo} alt="logo" />
            </Link>
        </div>
        <div className={styles.navItems}>
            {categories.slice(0, 3).map((category, index) => {
                return (
                <Link key={index} to={category} className={styles.navLink}>
                    {category}
                </Link>
                );
            })}
            <div className={styles.dropdown}>
                <span className={styles.navLink}>
                   Nuestra tienda online
                </span>
                <div className={styles.dropdownContent}>
                    {categories.slice(4).map((category, index) => {
                        return (
                        <Link key={index} to={`/category/${category}`} className={styles.dropdownItem}>
                            {category}
                        </Link>
                    );
                    })}
                </div>
            </div>
        </div>
        <CartWidget />
    </nav>


   
    );
};


export default Navbar;

















