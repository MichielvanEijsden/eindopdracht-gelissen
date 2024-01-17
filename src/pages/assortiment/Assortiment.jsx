import './Assortiment.css'
import pointerLogo from '../../assets/Pointer-logo.png'
import bikkelLogo from '../../assets/bikkel-bikes-logo.png'
import rihlogo from '../../assets/RIH.gif'


function Assortiment(){
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <section className='center-page-container'>
                    <div>
                    <article className='section-background assortiment-layout'>
                        <span>
                            <img className='assortiment-img' src={pointerLogo} alt="Pointer logo"/>
                        </span>
                        <div className='assortiment-text'>
                        <h2 className='assortiment-header'>Pointer Bikes</h2>
                        <h4>DUTCH QUALITY BICYCLES SINCE 1983</h4>
                        <p>
                            Pointer producten schaf je aan bij één van de zorgvuldig geselecteerde Pointer Dealers.
                            Een Pointer Quality Dealer adviseert je bij de aankoop en heeft een ruime collectie Pointer
                            producten voor je klaar staan voor een proefrit. Tevens het adres voor de juiste zorg,
                            onderhoud en de beste service voor de fiets en elektrische fiets. Uw fiets,
                            dat is iets heel persoonlijks. Type fiets, kleur, comfort, onderdelen, accessoires.
                            Allemaal aspecten die samen zorgen dat een fiets ook echt uw fiets wordt.
                            Pointer ontwikkelt als sinds 1983 van dit soort individuele,
                            pure kwaliteitsfietsen voor zowel Nederlandse- als voor internationale markten.
                            Pointer-fietsen zijn alleen verkrijgbaar bij de vakhandel, want die heeft er verstand van.
                            Zo weet u zeker dat u jarenlang plezier heeft van uw POINTER fiets.
                        </p>
                        </div>
                    </article>
                    <article className='section-background assortiment-layout-reverse'>
                        <span>
                            <img className='assortiment-img' src={bikkelLogo} alt="Bikkel-bikes logo"/>
                        </span>
                        <div className='assortiment-text'>
                        <h2 className='assortiment-header'>Bikkel Bikes</h2>
                        <h4>Passie voor fietsen</h4>
                        <p>
                            Nederland staat bekend als fietsland, maar echte Nederlandse fietsen worden steeds
                            zeldzamer op de weg. Bikkel bikes worden al vanaf 1995 in Midden-Limburg ontwikkeld en opgebouwd.
                            Al in 2008 zijn onze eerste e-bikes geproduceerd wat Bikkel Bikes hiermee een van de meest
                            ervaren fabrikanten van elektrische fietsen op de Nederlandse markt maakt.
                            De lokale werkwijze zorgt ervoor dat er maximale controle is op de kwaliteit,
                            snel ingespeeld kan worden op de veranderende markt en vakkundig en snel service verleend
                            kan worden aan onze dealers. Voor u dus een garantie voor jarenlang fietsplezier.
                        </p>
                        </div>
                    </article>
                    <article className='section-background assortiment-layout'>
                        <span>
                            <img className='assortiment-img' src={rihlogo} alt="RIH logo"/>
                        </span>
                        <div className='assortiment-text'>
                        <h2 className='assortiment-header'>RIH</h2>
                        <h4>100 JAAR EEN BEGRIP</h4>
                        <p>
                            Het merk RIH wordt in 1921 opgericht door de gebroeders Bustraan in de Amsterdamse Jordaan
                            waar de eerste RIH-racefietsen worden gebouwd. De in het RIH-logo door elkaar gevlochten
                            letters G en B – Gebroeders Bustraan verwijzen hier dan ook naar. In 1953 start Cové de
                            productie van Cové-rijwielen en in 1963 wordt al snel een mijlpaal bereikt, het 50.000ste
                            Cové fietsframe is gebouwd.
                            In 1973 produceert Cové de eerste RIH-fiets, geheel volgens de RIH-specificaties.
                            RIH is het merk van wereldkampioenen. Al sinds het begin is RIH met meerdere wereldkampioenen
                            succesvol geweest bij het baanwielrennen. In 1990 is Leontien van Moorsel wereldkampioene
                            achtervolging geworden op een RIH-fiets en Ingrid Haringa wordt in 1991 en 1992 wereldkampioene
                            sprint op een RIH-fiets.
                            In 1995 dient de 3e generatie zich aan. Coen Verberkt, zoon van Harry, komt in het bedrijf
                            en ontwikkelt later geheel in eigen beheer de eerste elektrische RIH-fiets die een referentie
                            is in de snelgroeiende wereld van elektrische fietsen. Het model heeft tal van noviteiten,
                            zoals de bediening van het batterijslot en het opstarten van de fiets zonder sleutel.
                            Ook het comfortabele fietsgedrag en de grote actieradius worden enorm gewaardeerd.
                        </p>
                        </div>
                    </article>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Assortiment