import './Privacy.css';

function Privacy() {
    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <div className='center-page-container'>
                        <div className='privacy-wrapper'>
                            <h2>Wie wij zijn</h2>

                            <p>Ons site adres is: https://www.gelissentweewielers.nl</p>

                            <h2>Welke gegevens wij gebruiken</h2>
                            <ul className='privacy-list'>
                                <li>Naam</li>
                                <li>Adres</li>
                                <li>Postcode</li>
                                <li>E-mailadres</li>
                                <li>Telefoonnummer</li>
                                <li>Bankrekeningnummer</li>
                            </ul>
                            <h2>Ingesloten inhoud van andere sites</h2>

                            <p>Berichten op deze site kunnen ingesloten inhoud bevatten (bijvoorbeeld video’s,
                                afbeeldingen, enz.).
                                Ingesloten inhoud van andere sites gedraagt zich exact hetzelfde alsof de bezoeker deze
                                andere site
                                heeft bezocht.</p>

                            <p>Deze sites kunnen gegevens over je verzamelen, cookies gebruiken, extra tracking van
                                derde partijen
                                insluiten en je interactie met deze ingesloten inhoud monitoren, inclusief het
                                vastleggen van de
                                interactie met ingesloten inhoud als je een account hebt en ingelogd bent op die
                                site.</p>
                            <h2>Met wie we je gegevens delen</h2>

                            <p>Jouw gegevens worden niet voor marketingdoeleinden gebruikt. Gegevens worden alleen
                                gedeeld als wij daar
                                een wettelijke plicht voor hebben.</p>
                            <h2>Hoelang we je gegevens bewaren</h2>

                            <p>De gegevens worden zolang bewaard als wettelijk is bepaald. Gegevens m.b.t. financiële
                                zaken, zoals gegevens
                                die op een factuur (naam, adres e.d.) of die op onze bankrekeningafschriften
                                (bankrekeningnummer) staan,
                                worden zoals wettelijke bepaald 7 jaar bewaard.</p>

                            <p>Videobeelden van ons bewakingssysteem worden maximaal 4 weken bewaard, tenzij er een
                                incident heeft
                                plaatsgevonden. In geval van een incident zullen de videobeelden bewaard worden zolang
                                nodig is in verband
                                met onderzoek door de politie.</p>
                            <h2>elke rechten je hebt over je gegevens</h2>
                            <ul className='privacy-list'>
                                <li>Als je klant bij ons bent mag je om een informatieverzoek in te dienen.</li>
                                <li>Je mag ook een correctieverzoek indienen als je gegevens niet meer kloppen.</li>
                                <li>Je kan ook verzoeken dat we alle persoonlijke gegevens die we van je hebben wissen.
                                    Dit bevat geen gegevens
                                    die we verplicht moeten bewaren in verband met administratieve, wettelijke of
                                    beveiligingsdoeleinden.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Privacy;