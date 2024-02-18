import './Home.css'
import leasefiets from '../../assets/LF.Logo-links-boven-FC-L-768x270.jpg'
import {Link} from "react-router-dom";
import gearIcon from '../../assets/gear-solid.svg'
import bikeIcon from '../../assets/person-biking-solid.svg'

import Gallery from "../../helpers/gallery/Gallery.jsx";


function Home() {


    return (
        <>
            <div className='page-container'>
                <div className='outer-container'>
                    <div className='inner-container'>
                        <section className='center-page-container'>
                            <div className='homepage-container'>
                                <h1>!Nieuw! Ook bij ons mogelijk om te Leasen! </h1>
                                <span>
                                <img id='leaseFiets' src={leasefiets} alt='leasefiets-img'/>
                                </span>
                                <h1>Bikkel E-Bike ANWB Test **** sterren</h1>
                               <Gallery/>

                                <div className='home-info-assortiment'>
                                    <Link to='/Webshop'>
                                        <img className='home-icon' src={bikeIcon} alt='bike icon'/>
                                    </Link>
                                    <p className='home-info'>Wij hebben een ruim assortiment aan nieuwe stadsfietsen en
                                        elektrische-fietsen
                                        (E-bikes)
                                        van verschillende merken. Als u meer wilt weten over een aantal van de door ons
                                        aangeboden
                                        merken, klik dan op de knop of op deze pagina.</p>
                                </div>
                                <div className='home-info-werkplaats'>
                                    <Link to='/Location'>
                                        <img className='home-icon' src={gearIcon} alt='gear icon'/>
                                    </Link>
                                    <p className='home-info'>Wij beschikken over een eigen werkplaats voor onderhoud en
                                        reparatie. Hier wordt
                                        met
                                        veel
                                        ervaring, kennis en precisie aan uw fiets wordt gewerkt. Kijk op deze pagina of
                                        klik
                                        op de
                                        knop voor de locatie van de werkplaats.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='side-menu-container'>
                    <div id='side-menu-container'>
                        <h2>Openingstijden</h2>
                        <div className='side-menu'>
                            <div className='section'>
                                <div className='side-menu-text'><p>Maandag</p></div>
                                <div className='side-menu-text'><p>09:00-18:00</p></div>
                            </div>
                            <div className='section'>
                                <div className='side-menu-text'><p>Dinsdag</p></div>
                                <div className='side-menu-text'><p>Gesloten</p></div>
                            </div>
                            <div className='section'>
                                <div className='side-menu-text'><p>Woensdag</p></div>
                                <div className='side-menu-text'><p>09:00-18:00</p></div>
                            </div>
                            <div className='section'>
                                <div className='side-menu-text'><p>Donderdag</p></div>
                                <div className='side-menu-text'><p>09:00-18:00</p></div>
                            </div>
                            <div className='section'>
                                <div className='side-menu-text'><p>Vrijdag</p></div>
                                <div className='side-menu-text'><p>09:00-18:00</p></div>
                            </div>
                            <div className='section'>
                                <div className='side-menu-text'><p>Zaterdag</p></div>
                                <div className='side-menu-text'><p>09:00-16:00</p></div>
                            </div>
                            <div className='section'>
                                <div className='side-menu-text'><p>Zondag</p></div>
                                <div className='side-menu-text'><p>Gesloten</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}

export default Home