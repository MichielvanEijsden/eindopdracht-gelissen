import {createContext} from "react";
import {AuthContext} from "./AuthContext.jsx";


export const CartContext= createContext([])

function CartContextProvider({children}){




    return(
        <AuthContext.Provider value={''}>
            {children}
        </AuthContext.Provider>
    )
}
export default CartContextProvider
