import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext({})

function AuthContextProvider({children}){
    const navigate = useNavigate()
    const [auth, setAuth] = useState({
        isAuth:false,
        user: {},
        status:'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token && isTokenValid(token)){
            void logIn(token)
        }else {
            setAuth({
                isAuth: false,
                user: {},
                status: 'done'
            })
        }
    }, []);

    async function logIn(token){
        localStorage.setItem('token', token);
        try{
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,
                {
                    headers: {
                        "Content-Type": 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
            setAuth({
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                    info:response.data.info

                },
                status:'done'
            })
        }catch (e) {
            console.error(e)
            logOut()
        }finally {
            console.log('gebruiker is in gelogd')
        }
    }

    function logOut(){
        localStorage.removeItem('token')
        setAuth({
            isAuth: false,
            user: null,
            status: 'done',
        })
        console.log('gebruiker is uit gelogd')
        navigate('/')
    }

    const data ={
        auth,
        logIn,
        logOut,
    }

    return(
        <AuthContext.Provider value={data}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider