import {createContext, useEffect, useState} from "react";


export const FavoriteContext = createContext({})

function FavoriteContextProvider({children}) {

    const [favList, setFavList] = useState([])


    // useEffect(() => {
    //     let retFav = localStorage.getItem('fav')
    //
    //
    //     if (retFav) {
    //         console.log('yippeeee')
    //     } else {
    //         console.log('boooo')
    //     }
    //
    // }, []);


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