import './Webshop.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import basket from '../../assets/cart-shopping-solid.svg'
// import Basket from "../../components/Basket.jsx";

function Webshop() {
    const [allItems, setAllItems] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        fetchAllItems()
    }, []);

    async function fetchAllItems() {
        try {
            const result = await axios.get('https://fakestoreapi.com/products')
            setAllItems(result.data)
            console.log(result.data)
        } catch (e) {
            setError(e)
            console.error(error);
        }
    }


    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                            <div>
                            <h2>welcome to the Webshop</h2>
                            <ul>
                                {allItems.map((items) => {
                                    return (
                                        <li key={items.id}>
                                            <div className='section-background'>
                                                <div className='product-info '>
                                                <span className='product-img'>
                                                <img src={items.image} alt={items.title}/>
                                                </span>
                                                <div className='product-text'>
                                                    <h3><Link to={`/Product/${items.id}`}>{items.title}</Link></h3>
                                                    <p className='product-category'>{items.category}</p>
                                                    <p>{items.description}</p>
                                                    <p className='product-price'>€ {items.price}</p>
                                                </div>
                                                    <svg viewBox="10 10 100 100" style={{ fill: 'green' }}></svg>

                                                    <span>

                                                        <button className='btn-cart' type='button'><img className='cart-icon' src={<Basket/>} alt='shoppingcart'/></button>
                                                        </span>
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
        </>
    )
}

export default Webshop