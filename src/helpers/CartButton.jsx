import {useContext} from "react";
import basket from "../assets/cart-shopping-solid.svg";
import {CartContext} from "../context/CartContext.jsx";
import {AuthContext} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

function CartButton(prop) {

    const {cartList, addToCart, removeFromCart} = useContext(CartContext)
    const isInCart = cartList.some((cartProduct) => cartProduct.id === prop.id);
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleToggleCart = () => {
        if (!auth.isAuth) {
            navigate('/Login')
        } else if(isInCart) {
            removeFromCart(prop.id);
        }else{
            addToCart(prop);
        }
    }

    return (
        <div >
            <button
                onClick={handleToggleCart}
                className={isInCart ? 'btn-cart in-cart' : 'btn-cart out-cart'}
            >
                <img className='cart-icon' src={basket} alt='shoppingcart'/></button>
        </div>
    )
}

export default CartButton