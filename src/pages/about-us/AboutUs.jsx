import './AboutUs.css'
import {NavLink} from "react-router-dom";

function AboutUs() {
    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <div className='center-page-container about-us'>
                        <div className='about-us-left'>
                            <section className='contact section-background'>
                                <NavLink className={({isActive}) => isActive ? "active-text-link" : "default-text-link"} to='/Contact'>Onze contactgegevens</NavLink>
                            </section>
                            <section className='history section-background'>
                                <NavLink className={({isActive}) => isActive ? "active-text-link" : "default-text-link"} to='/History'>Onze geschiedenis</NavLink>
                            </section>
                        </div>
                        <div className='about-us-right'>
                            <section className='impression section-background'>
                                <NavLink className={({isActive}) => isActive ? "active-text-link" : "default-text-link"} to='/Impression'>Impressie</NavLink>
                            </section>
                            <section className='privacy section-background'>
                                <NavLink className={({isActive}) => isActive ? "active-text-link" : "default-text-link"} to='/Privacy-Policy'>Privacy policy</NavLink>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs