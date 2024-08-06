//importar los estilos
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
    
    <footer className={styles.footer}>
        <p className= {styles.parrFooter}>Estamos cerca tuyo</p>
        <a className= {styles.footerItem} href="http://www.instagram.com/instagram/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a className= {styles.footerItem}  href="http://www.facebook.com/?locale=es_LA" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a className= {styles.footerItem} href="http://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">Chateá con nosotros</a>
    </footer>
    </>
  )
}


export default Footer;
