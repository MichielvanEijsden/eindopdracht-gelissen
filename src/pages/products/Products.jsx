import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Products() {
    const {id} = useParams()
    const [oneProduct, setOneProduct] = useState([])
    const [error, setError] = useState()

    async function fetchProducts() {
        try {
            const result = await axios.get(url)
            console.log(result.data)
            setOneProduct(result.data)
        } catch (e) {
            setError(e)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    const url = 'https://fakestoreapi.com/products/' + id

    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <li key={oneProduct.id}>
                            <div className='section-background'>
                                <div className='product-info '>
                                    <span className='product-img'>
                                        <img src={oneProduct.image} alt={oneProduct.title}/>
                                    </span>
                                    <div className='product-text'>
                                        <h3>{oneProduct.title}</h3>
                                        <p className='product-category'>{oneProduct.category}</p>
                                        <p>{oneProduct.description}</p>
                                        <p className='product-price'>€ {oneProduct.price}</p>
                                    </div>
                                    <span>
                                        <button className='btn-cart' type='button'>add to cart</button>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Products