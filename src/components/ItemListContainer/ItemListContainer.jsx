 /* eslint-disable react/prop-types */
 import ItemList from "../ItemList/ItemList";
 import { useState, useEffect } from "react";
 import { getProducts } from "../../Utils/fetchData";
 import styles from "../ItemListContainer/ItemListContainer.module.css";
 import { useParams } from "react-router-dom";
 import GrowExample from "../../components/Spinner/Spinner.jsx";
 
 
     const ItemListContainer = ({title, otroTitle}) => {
     const [products, setProducts] = useState([]);
     const { categoryId } = useParams();
     const [loading, setLoading] = useState(true);
 
     useEffect(() => {
         setLoading(true);
         getProducts(categoryId)
         .then((res) => {
         setProducts(res);
     })
     .catch((err) => {
         console.log(err);
     })
     .finally(() =>{
         setLoading(false);
     })
     }, [categoryId]);
 
     let titleToShow;
     if (title != undefined){
         titleToShow = title;
     } else{
         titleToShow = otroTitle;
     }
    
     return (
         <main>
             <div className={styles.container}>
                 <div>{titleToShow}</div>
                 { loading ? <GrowExample/> :
                 <ItemList products= {products}/>}
                 {/*<ItemCount stock={15} initial={0}/> */}
             </div>
         </main>
         )};
 export default ItemListContainer;
 
 
 