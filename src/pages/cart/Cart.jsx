import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Cart(){

    const [allItems, setAllItems] = useState([])
    const [error, setError] = useState()


    // const navigate = useNavigate()

    useEffect(() => {
        fetchAllItems()
    }, []);

    async function fetchAllItems() {
        try {
            const result = await axios.get(url)
            setAllItems(result.data)
            console.log(result.data)
        } catch (e) {
            setError(e)
            console.error(error);
        }
    }

const url = 'https://fakestoreapi.com/carts/user/1'
    return (
         <>
             {/*{id ?*/}
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <div>
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
                  {/*: navigate('/Login')}*/}
        </>

    )
}
export default Cart