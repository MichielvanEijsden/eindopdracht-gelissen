
import {useContext, useEffect, useState} from "react";
// import {CartContext} from "../context/CartContext.jsx";


function CartCounter(prop) {
    // const {count,addCount,minusCount,totalPrice} =useContext(CartContext)
    const [count, setCount] = useState(1);
    const [totalPrice,setTotalPrice] = useState(0)
    const addCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const minusCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const price=prop.price * count
    price.toFixed(2)
    useEffect(() => {
        setTotalPrice(price)

    }, [count]);



    console.log(totalPrice)


    return (
        <div className="counter">
            <button className="btn counter-btn" onClick={minusCount}>-</button>
            <p>{count}</p>
            <button className="btn counter-btn" onClick={addCount}>+</button>
            <div>
            <p key={prop.itemId}>€{totalPrice}</p>

            </div>
        </div>

    );

}


export default CartCounter ;