import {createContext, useEffect, useState} from "react";
import Handler from "../components/InfoUpdater.jsx";



export const CartContext = createContext({})

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState(
        JSON.parse(localStorage.getItem('cart')) || [])


        console.log(cartList)

        const cartData = JSON.stringify(cartList)
        localStorage.setItem('cart', cartData)
        const addToCart = (product) => {
            setCartList([...cartList, product]);
            Handler()
        };

        const removeFromCart = (productId) => {
            const updatedShoppingCart = cartList.filter((product) => product.id !== productId);
            setCartList(updatedShoppingCart);
            Handler()
        };




        const shoppingCartData = {
            cartList,
            addToCart,
            removeFromCart,

        }

        return (
            <CartContext.Provider value={shoppingCartData}>
                {children}
            </CartContext.Provider>
        )

}

export default CartContextProvider