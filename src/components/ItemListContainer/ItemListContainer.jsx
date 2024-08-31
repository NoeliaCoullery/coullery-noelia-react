 /* eslint-disable react/prop-types */
 import ItemList from "../ItemList/ItemList";
 import { db } from "../../firebase/dbConnection.js";
 import { collection, getDocs, query, where } from "firebase/firestore";
 import {useCartContext} from "../../Context/CartContext.jsx";
 import { useState, useEffect } from "react";
 import styles from "../ItemListContainer/ItemListContainer.module.css";
 import { useParams } from "react-router-dom";
 import GrowExample from "../../components/Spinner/Spinner.jsx";
 
 
     const ItemListContainer = () => {
     const [products, setProducts] = useState([]);
     const { categoryId } = useParams();
     const [loading, setLoading] = useState(true);
     const {titulo, titulo2} = useCartContext();


     let titleToShow = titulo;
   
 
     useEffect(() => {
        setLoading(true);
        let productsCollection = collection(db, "productos")

        if(categoryId) {
            productsCollection = query(productsCollection, where("category", "array-contains", categoryId));
        }
         getDocs(productsCollection).then(({docs}) => {
            const prodFromDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
            }))
            setProducts(prodFromDocs)
            setLoading(false)
        })
            .catch((error) => {
            console.error("Error getting documents: ", error);
                    
            });        
        
     }, [categoryId]);
 
   
      return (
        <main>
             <div className={styles.container}>
                 <div>{titleToShow + " " + titulo2}</div>
                 { loading ? <GrowExample/> :
                 <ItemList products= {products}/>}
             </div>
         </main>
         )};
 export default ItemListContainer;
 