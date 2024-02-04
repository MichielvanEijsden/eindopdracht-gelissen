import {createContext, useState} from "react";

export const CartContext= createContext([])

function CartContextProvider({children}){

    const [cartItems,setCartItems] =useState([])
    function addToCart(productId){
        console.log(productId)

        let cartList = [...cartItems]
        const index = cartList.findIndex(item=> item.id === productId)

        if(index === -1){
            cartList.push([{
                id: productId,
            }])
        }
    }
// setCartItems(...cartItems)
    console.log(cartItems)
    return(
        <CartContext.Provider value={{cartItems,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider

