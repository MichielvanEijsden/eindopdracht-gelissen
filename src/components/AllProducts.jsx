import {Link} from "react-router-dom";
import {FavButton, DeleteFavorite} from "../helpers/FavButton.jsx";
import basket from "../assets/cart-shopping-solid.svg";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";
import {FavoriteContext} from "../context/FavoriteContext.jsx";

function AllProducts(prop) {
    const {addToCart} = useContext(CartContext)
    const {fav1} = useContext(FavoriteContext)

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
                        {fav1.isFav ?
                        <DeleteFavorite
                            id = {prop.id}
                        />:
                            <FavButton
                                key = {prop.id}
                                id={prop.id}
                                img={prop.img}
                                category={prop.category}
                                des={prop.description}
                                price={prop.price}
                            />
                        }
                        <button className='btn btn-cart' type='button' onClick={() => {
                            addToCart(prop.id)
                        }}><img
                            className='cart-icon' src={basket}
                            alt='shoppingcart'/></button>
                    </span>
                </div>
            </div>

    )
}

export default AllProducts