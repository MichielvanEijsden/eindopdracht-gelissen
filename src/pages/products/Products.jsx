import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import basket from "../../assets/cart-shopping-solid.svg";

function Products() {
    const {id} = useParams()
    const [oneProduct, setOneProduct] = useState([])
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
    async function fetchProducts() {
        toggleLoading(true);
        setError(false);
        try {
            const result = await axios.get(url)
            console.log(result.data)
            setOneProduct(result.data)
        } catch (e) {
            setError(true)
            console.log(error)
        } finally {
            toggleLoading(false)
        }
    }

    fetchProducts()

        return function cleanup() {
            controller.abort();
        }
    }, [error]);

    const url = 'https://fakestoreapi.com/products/' + id

    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <li key={oneProduct.id}>
                            <div className='section-background'>
                                <div className='product-info '>
                                    <span>
                                        <img  className='product-img' src={oneProduct.image} alt={oneProduct.title}/>
                                    </span>
                                    <div className='product-text'>
                                        <h3>{oneProduct.title}</h3>
                                        <p className='product-category'>{oneProduct.category}</p>
                                        <p>{oneProduct.description}</p>
                                        <p className='product-price'>€ {oneProduct.price}</p>
                                    </div>
                                    <span>
                                        <button className='btn-cart' type='button'><img
                                            className='cart-icon' src={basket}
                                            alt='shoppingcart'/></button>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </section>
                </div>
            </div>
            {loading && <p>Loading...</p>}
        </>
    )
}

export default Products