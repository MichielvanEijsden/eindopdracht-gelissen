import './Cart.css'
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";
import {CartContext} from "../../context/CartContext.jsx";
import FavButton from "../../helpers/FavButton.jsx";
import CartCounter from "../../helpers/CartCounter.jsx";

function Cart() {
    const {cartList} = useContext(CartContext)
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [totalAmount, setTotalAmount] = useState(0)

    return (
        <>
            <div className='outer-container'>
                {auth.isAuth === true &&
                    <div className='inner-container'>
                        <section className='center-page-container'>
                            <div>
                                <ul>
                                    {cartList.map((items) => {
                                        return (
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
                                                        </div>
                                                        <FavButton
                                                            key={items.id}
                                                            id={items.id}
                                                            title={items.title}
                                                            img={items.image}
                                                            category={items.category}
                                                            des={items.des}
                                                            price={items.price}
                                                        />
                                                        <CartCounter
                                                            itemId={items.id}
                                                            price={items.price}
                                                            totalAmount={totalAmount}
                                                            setTotalAmount={setTotalAmount}

                                                        />
                                                    </div>
                                                </div>
                                            </li>)
                                    })}
                                </ul>
                            </div>
                        </section>
                    </div>

                }
                <div className='side-menu-container'>
                    <div id='side-menu-container'>
                        <h2>Overzicht</h2>
                        <div className='side-menu'>

                            <div className='section'>
                                <div className='side-menu-text'><p>artikelen({cartList.length})</p></div>
                                <div className='side-menu-text'><p> €{parseFloat(totalAmount).toFixed(2)}</p></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {
                auth.isAuth === false && navigate('/Login')
            }

        </>

    )

}

export default Cart