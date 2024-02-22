import {createContext, useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthContext.jsx";
import axios from "axios";

export const CartContext = createContext({})

function CartContextProvider({children}) {
    const {auth} = useContext(AuthContext);
    const [cartList, setCartList] = useState([])
    const token = localStorage.getItem('token')


    useEffect(() => {
        if (auth) {
            getInfo();
        }
    }, [auth]);

    async function getInfo() {
        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`
                },
            })
            // console.log('get info result',response.data.info)
            const data = JSON.parse(response.data.info)
            setCartList(data[0])
        } catch (e) {
            console.error(e)
        }
    }

    // console.log('init cart',cartList)
    const addToCart = (product) => {
        setCartList([...cartList, product]);
    };

    const removeFromCart = (productId) => {
        const updatedShoppingCart = cartList.filter((product) => product.id !== productId);
        setCartList(updatedShoppingCart);
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