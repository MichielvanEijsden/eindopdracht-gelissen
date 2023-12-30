import './Webshop.css'
import {useEffect, useState} from "react";
import axios from "axios";

function Webshop(){
    const [allItems,setAllItems]=useState([])
    const [error,setError]=useState()

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

    return(
        <>
            <div className='outer-container'>
                <div className='inner-container'>
            <section className='center-page-container'>
            <h2>welcome to the Webshop</h2>
            <ul>
                {allItems.map((items) =>{
                    return(
                        <li key={items.id}>
                            <h3>{items.title}</h3>
                            <img src={items.image} alt={items.title}/>
                            <p>{items.description}</p>
                        </li>
                    )
                })}
            </ul>
            </section>
                </div>
        </div>
        </>
        )
}
export default Webshop