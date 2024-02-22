import {useContext, useEffect, useState} from "react";
import {CartContext} from "../context/CartContext.jsx";

function CartCounter({totalAmount,setTotalAmount,price,itemId}) {

    const {cartList} = useContext(CartContext)
    const storedCount = localStorage.getItem(`count_${itemId}`);
    const [count, setCount] = useState(storedCount|| 1);
    const productPrice =(price*count).toFixed(2)

    useEffect(() => {
        localStorage.setItem(`count_${itemId}`, count);
    }, [count, itemId]);

    useEffect(() => {
        if (storedCount !== null) {
            setCount(parseInt(storedCount));
        }
    }, []);

    const calcTotalAmount = cartList.reduce((total, item) => {
        return total + item.price;
    }, 0).toFixed(2);

    useEffect(() => {
        setTotalAmount(calcTotalAmount)
    }, []);

    const addCount = () => {
        setCount(prevCount => prevCount + 1);
        setTotalAmount(parseFloat(totalAmount)+parseFloat(price))
    };

    const minusCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
            setTotalAmount(parseFloat(totalAmount)-parseFloat(price))
        }
    };

    return (
        <div className="counter">
            <button className="btn counter-btn" onClick={minusCount}>-</button>
            <p>{count}</p>
            <button className="btn counter-btn" onClick={addCount}>+</button>
            <div>
            <p key={itemId}>€{productPrice}</p>

            </div>
        </div>
    );
}
export default CartCounter ;