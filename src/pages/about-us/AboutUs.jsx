import './AboutUs.css'
import {NavLink} from "react-router-dom";
import fingerprint from '../../assets/fingerprint-solid.svg'
import addressCart from '../../assets/address-card-regular.svg'
import revertClock from '../../assets/clock-rotate-left-solid.svg'
import shop from '../../assets/shop-solid.svg'

function AboutUs() {
    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <div className='center-page-container about-us'>
                        <div className='about-us-left'>
                            <section className='section-background height'>
                                <img className='icon' src={addressCart} alt='address-cart'/>
                                <p>
                                    <NavLink
                                        className={({isActive}) => isActive ? "active-text-link" : "default-text-link"}
                                        to='/Contact'>Onze contactgegevens</NavLink>
                                </p>
                            </section>
                            <section className='section-background height'>
                                <img className='icon' src={revertClock} alt='clock-reverse'/>
                                <p>
                                    <NavLink
                                        className={({isActive}) => isActive ? "active-text-link" : "default-text-link"}
                                        to='/History'>Onze geschiedenis</NavLink>
                                </p>
                            </section>
                        </div>
                        <div className='about-us-right'>
                            <section className='section-background height'>
                                <img className='icon' src={shop} alt='shop icon'/>
                                <p>
                                    <NavLink
                                        className={({isActive}) => isActive ? "active-text-link" : "default-text-link"}
                                        to='/Impression'>Impressie</NavLink>
                                </p>
                            </section>
                            <section className='section-background height'>
                                <img className='icon' src={fingerprint} alt='fingerprint'/>
                                <p>
                                    <NavLink
                                        className={({isActive}) => isActive ? "active-text-link" : "default-text-link"}
                                        to='/Privacy-Policy'>Privacy policy</NavLink>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs