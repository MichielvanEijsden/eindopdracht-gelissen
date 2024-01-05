import './History.css'
import Hein from '../../../../assets/GELISSEN-hein-3.jpg'
import bike from '../../../../assets/bicycle-solid.svg'

function History() {
    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <div className='center-page-container'>
                        <div className='history-wrapper'>
                            <div className='history-center'>
                            <h1>Al since 1953 geopend</h1>
                            </div>
                            <p>Ons verhaal begin in 1934 waar dhr. Arnold Spätgens zijn rijwielhandel opent in
                                Voerendaal.
                                Hij verkocht van alles maar wilde zich toch meer gaan specialiseren in fietsen en alles
                                dat
                                daarbij kwam kijken. 19 jaar lang runt hij deze zaak samen met z’n gezin.</p>

                            <p>Fietsen was Heins lust en leven. Hein nam deel aan verschillende
                                (amateur) wielerwedstrijden
                                en was regelmatig op het podium te vinden. Zoals:</p>
                            <ul>
                                <li><p><img className='bike-icon' src={bike} alt='bike-icon'/> 3e plek in de Ronde van Limburg (1950)</p></li>
                                <li><p><img className='bike-icon' src={bike} alt='bike-icon'/> 1e plek in de Ronde van Limburg (1952)</p></li>
                                <li><p><img className='bike-icon' src={bike} alt='bike-icon'/> 4e plek WK Op de Weg, amateurs, in Luxemburg (1952)</p></li>
                                <li><p><img className='bike-icon' src={bike} alt='bike-icon'/> 3e plek in Kaatsheuvel (1953)</p></li>
                                <li><p><img className='bike-icon' src={bike} alt='bike-icon'/> 2e plek in Krefeld Duitsland (1955)</p></li>
                            </ul>
                            <div className='history-center'>
                                <img className='history-img' src={Hein} alt='Hein Gelissen'/>
                                <p> Hein Gelissen</p>
                                <h2>1953</h2>
                                <p>Jaar van oprichting</p>
                            </div>
                            <p> In 1953 krijgt Hein de kans om in de voetsporen van zijn schoonvader te treden door zijn
                                rijwielhandel in Voerendaal over te nemen.</p>

                            <p>Hij besluit dit op een iets andere manier te doen en samen met zijn gezin gaat hij het
                                avontuur aan om een rijwielhandel in Beek te openen. Dit gebeurde op 1 maart 1953. Hein
                                herstelde de fietsten en Hennie verzorgde de administratie.</p>

                            <p> Hein en Hennie besluiten in 1953 te trouwen en een gezin te stichten. Ze mogen 3
                                kinderen in
                                deze wereld verwelkomen:</p>
                            <ul className='history-list'>
                                <li>Rob, studeerde aan het conservatorium en is altijd met muziek bezig gebleven</li>
                                <li>John, treed in de voetstappen van zijn vader</li>
                                <li>Willem, treed ook in de voetstappen van zijn vader</li>
                            </ul>
                            <p>Op 21-jarige leeftijd gaat John meewerken in de zaak van zijn ouders. Hij trouwt met
                                Berthie. In 1982 stapt hij officieel in de zaak. John en Berthie krijgen 3 kinderen. In
                                1997
                                nemen John en Berthie de zaak over en wordt de zaak verbouwd.</p>

                            <p>Since maart 2022, komt de derde generatie Gelissen in de zaak werken. Dennis, John’s
                                jongste zoon, komt in zaak werken.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History