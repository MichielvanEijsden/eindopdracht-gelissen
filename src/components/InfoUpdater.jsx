import axios from "axios";
function InfoUpdater(cartList,favList) {
    const token = localStorage.getItem('token')

    async function Handler() {
        try {
            const infoData = [cartList,favList]
            const infoSend =JSON.stringify(infoData)
            console.log(infoData)
            const response = await axios.put('https://frontend-educational-backend.herokuapp.com/api/user', {
                    info:`${infoSend}`,
                },
                {
                    headers: {
                        "Content-Type": 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                },
            )
            console.log('info updater response',response)
        } catch (e) {
            console.error(e)
        }
    }
    Handler()
}

export default InfoUpdater