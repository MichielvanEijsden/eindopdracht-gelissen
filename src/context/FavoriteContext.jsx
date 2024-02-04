import {createContext, useEffect, useState} from "react";


export const FavoriteContext = createContext({})

function FavoriteContextProvider({children}) {
    const [fav1, setFav] = useState({
        isFav: false,
        className: 'fav-deActive',
    })
    const [favList, setFavList] = useState([])


    useEffect(() => {
        let retFav = localStorage.getItem('fav')


        if (retFav) {
            console.log('yippeeee')
        } else {
            console.log('boooo')
        }

    }, []);


    console.log('fav1:', fav1)
    console.log('favlist:', favList)

    function favorite(id, img, category, des, price) {
        let favolist = [...favList]
        const index = favolist.findIndex(item => item.id === id)
        if (index+1 !== id) {
            setFavList([
                ...favList,
                {
                    id,
                    img,
                    category,
                    des,
                    price,
                },
            ])
            setFav({
                isFav: true,
                className: 'fav-active',
            })

        } else {
            console.log("staat er al in")

        }

           
        localStorage.setItem('fav', JSON.stringify(favList))

    }

   function removeFavorite(id){
        let favolist = [...favList]
        const index = favolist.findIndex(item => item.id === id)
        console.log('índex:', index)
        if (index+1 === id)
           favolist.splice(index,1)
       console.log("product verwijderd")
        setFav({
            isFav: false,
            className: 'fav-deActive'
        })
       console.log('favolistis: ',favolist)
    setFavList(favolist)

    }

    const favData = {
        fav1,
        favorite,
        removeFavorite,
    }



    return (
        <FavoriteContext.Provider value={favData}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider