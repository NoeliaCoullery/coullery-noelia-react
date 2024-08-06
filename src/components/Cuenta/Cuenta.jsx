import styles from "../ItemList/ItemList.module.css";

const Cuenta = () => {
    console.log("renderizando Cuenta");
   
    return (
      <main>
      <h1 className={styles.h1} >Mi Cuenta</h1>
      <p>Bienvenido a tu cuenta personal</p>
      </main>
    );
  };
  export default Cuenta;
  