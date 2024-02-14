import {createContext, useEffect, useState} from "react";
import Handler from "../components/InfoUpdater.jsx";



export const FavoriteContext = createContext({})

function FavoriteContextProvider({children}) {

    const [favList, setFavList] = useState([],
        JSON.parse(localStorage.getItem('favorites'))
    )


    console.log(favList)
    useEffect(() => {
        Handler()
    }, [favList]);

    const favorites = JSON.stringify(favList)
    localStorage.setItem('favorites',favorites)

    const addFavorite = (product) => {
        setFavList([...favList, product]);

    };

    const removeFavorite = (productId) => {
        const updatedFavorites = favList.filter((product) => product.id !== productId);
        setFavList(updatedFavorites);
    };

    const favData = {
        favList,
        addFavorite,
        removeFavorite,
    }

    return (
        <FavoriteContext.Provider value={favData}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider