import './Location.css'
import map from '../../assets/map.png'
function Location() {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <section className='center-page-container'>
                    <div className='location-container'>
                        <div className='location-text-wrapper'>
                            <div className='location-text'>
                            <h1>Winkel</h1>
                            <p>De ingang van onze winkel is Heirstraat 2A</p>
                            </div>
                            <div className='location-text'>
                            <h1>Werkplaats</h1>
                            <p>De ingang van onze werkplaats is op de Prins Mauritslaan, tussen huisnummers 9 en 11</p>
                            </div>
                        </div>
                        <span>
                            <img className='map' src={map} alt='map'/>
                            <figcaption>dit is een afbeelding</figcaption>
                        </span>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Location