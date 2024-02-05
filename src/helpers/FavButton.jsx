import {useContext} from "react";
import {FavoriteContext} from "../context/FavoriteContext.jsx";
import fav from "../assets/heart-regular.svg";


function FavButton(prop) {

    const {favList, addFavorite, removeFavorite} = useContext(FavoriteContext)
    const isFavorite = favList.some((favProduct) => favProduct.id === prop.id);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(prop.id);
        } else {
            addFavorite(prop);
        }
    }

    return (
        <div>
            {/* Product details */}
            <button
                onClick={handleToggleFavorite}
                className={isFavorite ? 'fav-active' : 'fav-deActive'}
            >
                <img className='fav-icon' src={fav} alt='fav-btn'/></button>
        </div>
    )
}

export default FavButton;