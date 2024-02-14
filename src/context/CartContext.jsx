import {createContext, useEffect, useState} from "react";
import Handler from "../components/InfoUpdater.jsx";


export const CartContext = createContext({})

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([]
        // JSON.parse(localStorage.getItem('cart'),[])
    )
    useEffect(() => {
        Handler()

    }, [cartList,setCartList]);

    console.log(cartList)
    const cartData = JSON.stringify(cartList)
    localStorage.setItem('cart', cartData)
    const addToCart = (product) => {
        setCartList([...cartList, product]);

    };

    const removeFromCart = (productId) => {
        const updatedShoppingCart = cartList.filter((product) => product.id !== productId);
        setCartList(updatedShoppingCart);
    };

    const favData = {
        cartList,
        addToCart,
        removeFromCart,
    }

    return (
        <CartContext.Provider value={favData}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider