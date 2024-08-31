  /* eslint-disable react/prop-types */
  import { useEffect } from "react";
  import { useParams } from "react-router-dom";
  import GrowExample from "../Spinner/Spinner";
  import ItemDetail from "../ItemDetail/ItemDetail";
  import { useState } from "react";
  import { db } from "../../firebase/dbConnection";
  import {collection, getDoc, doc} from "firebase/firestore";
  
  
   const ItemDetailContainer = () => {
      const [product, setProduct] = useState({});
      const [loading, setLoading] = useState(true);
      const {id} = useParams();
    
      useEffect(() => {
          setLoading(true);
          const productsCollection = collection(db, "productos");
          const refDoc = doc(productsCollection, id);

          getDoc(refDoc)
          .then((doc) => {
          setProduct({id: doc.id, ...doc.data()})
          setLoading(false);
          })
          .catch((error) => {
            console.error("error getting documents: ", error);
          });   
 
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