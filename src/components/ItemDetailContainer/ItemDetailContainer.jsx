 /* eslint-disable react/prop-types */
 import { useEffect } from "react";
 import { useParams } from "react-router-dom";
 import { getProductById } from "../../Utils/fetchData";
 import GrowExample from "../Spinner/Spinner";
 import ItemDetail from "../ItemDetail/ItemDetail";
 import { useState } from "react";
 
 
  const ItemDetailContainer = () => {
     const [product, setProduct] = useState({});
     const [loading, setLoading] = useState(true);
     const {id} = useParams();
    
     useEffect(() => {
         setLoading(true);
         getProductById(id)
         .then((res) => {
         setProduct(res);
     })
     .catch((err) => {
         console.log(err);
     })
     .finally(() =>{
         setLoading(false);
     })
 
 
     }, [id])
   return (
         <main>
             <div>Detalle de producto</div>
             { loading ? <GrowExample/> :
             <ItemDetail product= {product}/>}
         </main>
   )
 }
 export default ItemDetailContainer;
 