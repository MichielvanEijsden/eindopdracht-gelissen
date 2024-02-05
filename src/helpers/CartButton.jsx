import {useContext} from "react";

import basket from "../assets/cart-shopping-solid.svg";
import {CartContext} from "../context/CartContext.jsx";

function CartButton(prop) {

    const {cartList, addToCart, removeFromCart} = useContext(CartContext)
    const isInCart = cartList.some((cartProduct) => cartProduct.id === prop.id);

    const handleToggleCart = () => {
        if (isInCart) {
            removeFromCart(prop.id);
        } else {
            addToCart(prop);
        }
    }

    return (
        <div >
            {/* Product details */}
            <button
                onClick={handleToggleCart}
                className={isInCart ? 'btn-cart in-cart' : 'btn-cart out-cart'}
            >
                <img className='cart-icon' src={basket} alt='shoppingcart'/></button>
        </div>
    )
}

export default CartButton