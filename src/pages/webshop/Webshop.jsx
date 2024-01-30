import './Webshop.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import basket from '../../assets/cart-shopping-solid.svg'


function Webshop() {
    const [allItems, setAllItems] = useState([])
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        const controller = new AbortController();

        async function fetchAllProducts() {
            toggleLoading(true);
            setError(false);

            try {
                const result = await axios.get(url)
                setAllItems(result.data)
                console.log(result.data)
            } catch (e) {
                setError(true)
                console.error(error);
            } finally {
                toggleLoading(false)
            }
        }

        fetchAllProducts()

        return function cleanup() {
            controller.abort();
        }
    }, [error,filter]);

    function Filter() {
        return (
            <>
                <button className='filter-btn' type='button' onClick={()=> setFilter('')}>all</button>
                <button className='filter-btn' type='button' onClick={()=> setFilter("category/men's clothing")}>Men's Clothing</button>
                <button className='filter-btn' type='button' onClick={()=> setFilter("category/women's clothing")}>Women's Clothing</button>
                <button className='filter-btn' type='button' onClick={()=> setFilter('category/jewelery')}>Jewelery</button>
                <button className='filter-btn' type='button' onClick={()=> setFilter('category/electronics')}>Electronics</button>
            </>
        )
    }
const url = `https://fakestoreapi.com/products/${filter}`
    console.log(filter)
    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <div>
                            <h2>welcome to the Webshop</h2>
                            <Filter/>
                            <ul>
                                {allItems.map((items) => {
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

                                                    <span>
                                                        <button className='btn-cart' type='button'><img
                                                            className='cart-icon' src={basket}
                                                            alt='shoppingcart'/></button>
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
            {loading && <p>Loading...</p>}
        </>
    )
}

export default Webshop