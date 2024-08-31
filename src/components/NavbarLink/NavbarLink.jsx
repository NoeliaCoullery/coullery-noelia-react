/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

const NavbarLink = ({category}) => {
  return (
   
    <NavLink to={`/category/${category}`} className={styles.navItem}>{category}</NavLink>
    
  );
};
export default NavbarLink;
