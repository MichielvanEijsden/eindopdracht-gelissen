import {useContext} from "react";
import {FavoriteContext} from "../context/FavoriteContext.jsx";
import fav from "../assets/heart-regular.svg";

function FavButton(prop) {

    const {favorite} = useContext(FavoriteContext)

    return(
        <button className='fav-deActive' onClick={()=>{favorite(
                prop.id,
                prop.img,
                prop.category,
                prop.des,
                prop.price,
            )}}>
            <img className='fav-icon' src={fav} alt='fav-btn'/></button>
    )
}

function DeleteFavorite(prop){
    const {removeFavorite} = useContext(FavoriteContext)
    return(
        <button className='fav-active' onClick={() => {removeFavorite(
            prop.id
        )}}>
            <img className='fav-icon' src={fav} alt='fav-btn'/>
        </button>
    )
}
export {FavButton,DeleteFavorite}