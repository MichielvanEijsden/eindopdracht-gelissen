import axios from "axios";
import InfoUpdater from "./InfoUpdater.jsx";


function GetInfo(){
    const token = localStorage.getItem('token')
    let data =[]
        async function getInfo(){
            try {
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user',{
                    headers:{
                        "Content-Type": 'application/json',
                        Authorization: `Bearer ${token}`
                    },

                })
                console.log(result)
                InfoUpdater(result.data.info)
                data= result.data.info

            }catch (e){
                console.error(e)
            }

        }
       getInfo()
    {!data? localStorage.setItem('favorites',data):''}

}
export default GetInfo