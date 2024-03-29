import {useContext} from "react";
import {FavoriteContext} from "../context/FavoriteContext.jsx";
import fav from "../assets/heart-regular.svg";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";

function FavButton(prop) {

    const {favList, addFavorite, removeFavorite} = useContext(FavoriteContext)
    const isFavorite = favList.some((favProduct) => favProduct.id === prop.id);
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleToggleFavorite = () => {
        if (!auth.isAuth) {
            navigate('/Login')
        }
        else if (isFavorite ) {
            removeFavorite(prop.id);
        } else {
            addFavorite(prop);
        }
    }

    return (
        <div>
            <button
                onClick={handleToggleFavorite}
                className={isFavorite ? 'fav-active' : 'fav-deActive'}>
                <img className='fav-icon' src={fav} alt='fav-btn'/>
            </button>
        </div>
    )
}

export default FavButton;