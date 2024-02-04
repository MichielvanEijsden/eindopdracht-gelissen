import './Webshop.css'
import {useEffect, useState} from "react";
import axios from "axios";
import AllProducts from "../../components/AllProducts.jsx";



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
                <button className='btn filter-btn' type='button' onClick={()=> setFilter('')}>all</button>
                <button className='btn filter-btn' type='button' onClick={()=> setFilter("category/men's clothing")}>Men's Clothing</button>
                <button className='btn filter-btn' type='button' onClick={()=> setFilter("category/women's clothing")}>Women's Clothing</button>
                <button className='btn filter-btn' type='button' onClick={()=> setFilter('category/jewelery')}>Jewelery</button>
                <button className='btn filter-btn' type='button' onClick={()=> setFilter('category/electronics')}>Electronics</button>
            </>
        )
    }
    const url = `https://fakestoreapi.com/products/${filter}`

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
                                        <AllProducts
                                            key = {items.id}
                                            id = {items.id}
                                            title = {items.title}
                                            img={items.image}
                                            category={items.category}
                                            des={items.description}
                                            price = {items.price}

                                        />
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