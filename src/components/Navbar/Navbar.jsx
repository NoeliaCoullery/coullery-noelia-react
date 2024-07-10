import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ categoriasNavbar, title }) => {
    return(
        <>
        <div>
            <h1>{title}</h1>
        </div>
        <div>
            <a href="#"> {categoriasNavbar[0]}</a>
            <a href="#"> {categoriasNavbar[1]}</a>
            <a href="#"> {categoriasNavbar[2]}</a>
            <a href="#"> {categoriasNavbar[3]}</a>
        </div>
        <CartWidget/>
        </>
    );
}

export default Navbar; 