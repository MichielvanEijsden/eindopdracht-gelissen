import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";

function Cart(){

    const [cartItems, setCartItems] = useState([])
    const [error, setError] = useState()
    const {logIn,auth} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        const controller = new AbortController();

        async function fetchAllItems() {
            try {
                const result = await axios.get(url)
                setCartItems(result.data)
                // console.log(result.data)
            } catch (e) {
                setError(e)
                console.error(error);
            }
        }
        fetchAllItems()
        return function cleanup() {
            controller.abort();
        }
    }, [logIn,error]);

    console.log('userid: ',auth.user.id)
    console.log('cart info: ', cartItems)
const id = auth.user.id
const url = 'https://fakestoreapi.com/carts/user/'+id


    return (
         <>
         {auth.isAuth === true &&

            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <div>
                            <ul>
                                {cartItems.map((items) => {
                                    console.log('çart items',items.products.quantity)

                                    return (
                                        <li key={items.id}>
                                            <div className='section-background'>
                                                <div className='product-info '>
                                                <span>
                                                <img className='product-img' src={items.image} alt={items.title}/>
                                                </span>
                                                    <div className='product-text'>
                                                        <h3><Link to={`/Product/${items.id}`}>{items.title}</Link></h3>
                                                        <p className='product-category'>{items.category}</p>
                                                        <p>{items.description}</p>
                                                        <p className='product-price'>€ {items.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )

                                })}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            }
             {auth.isAuth === false && navigate('/Login')}
        </>

    )
}
export default Cart