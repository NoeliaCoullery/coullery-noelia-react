import {useState, useEffect, createContext, useContext} from 'react';


const cartContext = createContext();


export const { Provider } = cartContext;


export const useCartContext = () => {
    return useContext(cartContext)
}


const CartContextProvider = ({children}) => {
    const [qtyItems, setQtyItems] = useState(0)
    const [ cart, setCart ] = useState([]);
    const [ total, setTotal] = useState(0);


 
    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart'))
        const localTotal = JSON.parse(localStorage.getItem('total'))
        const localQty = JSON.parse(localStorage.getItem('qty'))


        if (localCart && localTotal && localQty){
            setCart(localCart)
            setTotal(localTotal)
            setQtyItems(localQty)
        }
    }, [])


    const isInCart = (id) => {
        return cart.find((elem) => elem.id === id)
    }


    const addToCart = (item, qty) => {
      const updatedQtyItems = qtyItems + qty;
      const updatedTotal = total + item.price * qty;
       
        let newCart = [];


        if (isInCart(item.id)) {
            newCart = cart.map((elem) => {
                if (elem.id === item.id) {
                    return { ...elem, qty: elem.qty + qty };
                } else {
                    return elem;
                }
            });
        } else {
            newCart = [...cart, {...item, qty}];
                }


        setCart(newCart);
        setQtyItems(updatedQtyItems);
        setTotal(updatedTotal);


        localStorage.setItem('cart', JSON.stringify(newCart))
        localStorage.setItem('total', JSON.stringify(updatedTotal))
        localStorage.setItem('qty', JSON.stringify(updatedQtyItems));
    }


        const removeItem = (id, price, qty) => {
        const updatedTotal = (total - price * qty);
        const updatedQtyItems = (qtyItems - qty);


        const newCart = cart.filter((elem) => elem.id !== id);
        setCart(newCart);
        setQtyItems(updatedQtyItems);
        setTotal(updatedTotal);


        localStorage.setItem('cart', JSON.stringify(newCart))
        localStorage.setItem('total', JSON.stringify(updatedTotal))
        localStorage.setItem('qty', JSON.stringify(updatedQtyItems));


    }


    const clearCart = () => {
    setCart([])
    setTotal(0)
    setQtyItems(0)
    localStorage.removeItem('cart')
    localStorage.removeItem('total')
    localStorage.removeItem('qty')


}


    const contextValue = {
        titulo: "DecoHome, hecho por vos.",
        titulo2: "Un espacio para relajarte y reecontrarte con vos misma. ",
        qtyItems,
        total,
        cart,
        addToCart,
        clearCart,
        removeItem
    }
   
   
    return <Provider value={contextValue}>{children}</Provider>
}


export default CartContextProvider;


