import {createContext,useState} from "react";


export const CartContext = createContext({})

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])


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