import {Link} from "react-router-dom";
import FavButton from "../helpers/FavButton.jsx";

import CartButton from "../helpers/CartButton.jsx";

function AllProducts(prop) {


    return (

            <div className='section-background'>
                <div className='product-info '>
                    <span>
                    <img className='product-img' src={prop.img} alt={prop.title}/>
                    </span>
                    <div className='product-text'>
                        <h3><Link to={`/Product/${prop.id}`}>{prop.title}</Link></h3>
                        <p className='product-category'>{prop.category}</p>
                        <p>{prop.des}</p>
                        <p className='product-price'>€ {prop.price}</p>
                    </div>

                    <span>
                            <FavButton
                                key = {prop.id}
                                id={prop.id}
                                img={prop.img}
                                category={prop.category}
                                des={prop.description}
                                price={prop.price}
                            />

                        <CartButton
                            id={prop.id}
                            img={prop.img}
                            category={prop.category}
                            des={prop.description}
                            price={prop.price}
                        />
                    </span>
                </div>
            </div>

    )
}

export default AllProducts