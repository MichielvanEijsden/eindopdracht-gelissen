import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";
import {CartContext} from "../../context/CartContext.jsx";


function Cart() {

    const {cartList} = useContext(CartContext)
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()


    return (
        <>
            {auth.isAuth === true &&
                <div className='outer-container'>
                    <div className='inner-container'>
                        <section className='center-page-container'>
                            <div>
                                <ul>
                                    {cartList.map((items)=>{
                                    return(
                                    <li key={items.id}>
                                        <div className='section-background'>
                                            <div className='product-info '>
                                                <span>
                                                <img className='product-img' src={items.img} alt={items.title}/>
                                                </span>
                                                <div className='product-text'>
                                                    <h3>{items.title}
                                                    </h3>
                                                    <p className='product-category'>{items.category}</p>
                                                    <p>{items.des}</p>
                                                    <p className='product-price'>€ {items.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>)
                                    })}
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            }

            {
                auth.isAuth === false && navigate('/Login')
            }
        </>

    )
}

export default Cart