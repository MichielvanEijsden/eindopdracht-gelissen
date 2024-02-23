import './Order.css'
import {useForm} from "react-hook-form";
// import {total} from '../cart/Cart.jsx'

function Order(){
    const {register, handleSubmit} = useForm()
    function handleFormSubmit(data) {
        console.log(data)
    }
    return(
        <div className='page-container'>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <div className='section-background'>
                        <form  onSubmit={handleSubmit(handleFormSubmit)} className='order-form' >
                            <div className='order-form-line'>
                            <label>
                                Voornaam:
                                <input type="text" {...register("firstName",{required:{value: true,message:'vul je voornaam in'}})}/>
                            </label>
                            <label>
                                Tussenvoegsel:
                                <input type="text" {...register("Addition")}/>
                            </label>
                            <label>
                                Achternaam:
                                <input type="text"{...register("lastName",{required:{value: true,message:'vul je achternaam in'}})}/>
                            </label>
                            </div>
                            <div className='order-form-line'>
                            <label>
                                Adres:
                                <input type="text"{...register("Adress",{required:{value: true,message:'vul je adres in'}})}/>
                            </label>
                            <label>
                                Huisnummer:
                                <input type="number"{...register("Number",{required:{value: true,message:'vul je huisnummer in'}})}/>
                            </label>
                            </div>
                            <div className='order-form-line'>
                            <label>
                                Postcode:
                                <input type="text" {...register("zipCode",{required:{value: true,message:'vul je postcode in'}})}/>
                            </label>
                            <label>
                                Plaats:
                                <input type="text" {...register("Place",{required:{value: true,message:'vul je woonplaats in'}})}/>
                            </label>
                            </div>

                            <label className='list'>
                                <input type="radio" name="day" {...register("delivery-time")} placeholder="day"/>Overdag
                                <input type="radio" name="evening" {...register("delivery-time")} placeholder="evening"/>s Avonds
                            </label>

                            <label>
                                <input type="checkbox" {...register("terms_of_agreement",{required:{value: true,message:'je moet deze nog aan vinken'}})} placeholder="terms_of_agreement"/>Ik ga akkoord met de voorwaarden
                            </label>

                            <button type="submit" className='btn order-btn'>
                                Bestellen
                            </button>
                        </form>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}
export default Order