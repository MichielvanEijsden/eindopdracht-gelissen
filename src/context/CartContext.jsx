import {createContext, useEffect, useState} from "react";


export const CartContext = createContext({})

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])


    // useEffect(() => {
    //     let retFav = localStorage.getItem('cart')
    //
    //
    //     if (retFav) {
    //         console.log('yippeeee')
    //     } else {
    //         console.log('boooo')
    //     }
    //
    // }, []);


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