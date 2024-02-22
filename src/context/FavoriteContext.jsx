import {createContext, useContext, useEffect, useState} from "react";
import Handler from "../components/InfoUpdater.jsx";
import {AuthContext} from "./AuthContext.jsx";
import axios from "axios";
import {CartContext} from "./CartContext.jsx";

export const FavoriteContext = createContext({})

function FavoriteContextProvider({children}) {
    const { auth } = useContext(AuthContext);
    const {cartList,setCarList} = useContext(CartContext)
    const [favList, setFavList] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (auth) {
            getInfo();
        }
    }, [auth]);

    async function getInfo(){
        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user',{
                headers:{
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`
                },
            })
            const data = JSON.parse(response.data.info)
            setCarList(data[0])
            setFavList(data[1])
        }catch (e){
            console.error(e)
        }
    }
    useEffect(() => {
    function updater() {
        Handler(cartList, favList)
    }
    updater()
    }, [favList,cartList]);

    const addFavorite = (product) => {
        setFavList([...favList, product]);
    };

    const removeFavorite = (productId) => {
        if (favList) {
            const updatedFavorites = favList.filter((product) => product.id !== productId);
            setFavList(updatedFavorites);
        }
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