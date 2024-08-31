//importar los estilos

import styles from "./Footer.module.css";
import  {items} from "../../mock/mockData";
import { db } from "../../firebase/dbConnection";
import { collection, addDoc } from "firebase/firestore";

const Footer = () => {
  
  const addProducts = () => {
    const productsCollection = collection(db, "productos");
    
    items.forEach((item) => {
      addDoc(productsCollection, item)
      .then(doc => {
        console.log("Productos agregado con ID: ", doc.id)
      })
      .catch(error => {
        console.error("Error al agregar el producto: ", error)})
    })

  }
  return (
    <>
    <footer className={styles.footer}>
        <p className= {styles.parrFooter}>Contactanos</p>
        <a className= {styles.footerItem} href="http://www.instagram.com/instagram/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a className= {styles.footerItem}  href="http://www.facebook.com/?locale=es_LA" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a className= {styles.footerItem} href="http://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">Chateá con nosotros</a>
        
    </footer>
    </>
  )
}

export default Footer;


