/* eslint-disable react/prop-types */
//import styles from "../Navbar/Navbar.module.scss";

import { NavLink } from "react-router-dom";

const NavbarLink = ({category}) => {
  return (
   
    <NavLink to={`/category/${category}`} className="navItem">{category}</NavLink>
    //despues reemplazar por className={styles.navItem}> {category}
  );
};
export default NavbarLink;
