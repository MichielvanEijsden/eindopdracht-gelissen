import axios from "axios";


function InfoUpdater() {
    const token = localStorage.getItem('token')
    const favorites = localStorage.getItem('favorites')
    const cart = localStorage.getItem('cart')
    async function Handler() {
        try {
            const response = await axios.put('https://frontend-educational-backend.herokuapp.com/api/user', {
                    info: `${favorites}, ${cart}`,
                },
                {
                    headers: {
                        "Content-Type": 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                },

            )
            console.log(response)
            // setResponse(response)
        } catch (e) {
            console.error(e)
        }
    }
    Handler()

}

export default InfoUpdater