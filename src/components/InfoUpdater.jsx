import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";


const token = localStorage.getItem('token')
const favorites = localStorage.getItem('favorites')

function InfoUpdater() {
    // const {auth} = useContext(AuthContext)
    // const id = auth.user.id

        const url = 'https://frontend-educational-backend.herokuapp.com/api/' + 7

        async function handler() {
            try {
                const response = await axios.put(url, {
                        'info': `${favorites}`,
                    },
                    {
                        headers: {
                            "Content-Type": 'application/json',
                            Authorization: `Bearer ${token}`
                        }
                    },

                )
                console.log(response)
            } catch (e) {
                console.error(e)
            }
        }
        handler()



}

export default InfoUpdater