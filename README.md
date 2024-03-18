link naar website: https://main--dapper-dodol-430fe4.netlify.app/

link naar github: https://github.com/MichielvanEijsden/eindopdracht-gelissen/tree/main

# Inleiding

![firstPage.PNG](src%2Fassets%2FfirstPage.PNG)

Op de website van Gelissen Tweewielers is het mogelijk om benodigde artikelen te bekijken, toevoegen aan de winkelwagen 
en te bestellen, ook is het mogelijk om als klant een account aan te maken en artikelen toe te voegen aan de favorieten.

## benodigdheden

1. IDE: Zoals Webstorm 
2. Webbrowser: Zoals Chrome,Firefox,Safari,Edge
3. Internetverbinding: voor het ophalen en versturen van gegevens naar de externe backend

## stappenplan

1. Download en installeer NodeJs en de IDE 
2. Ga naar https://github.com/MichielvanEijsden/eindopdracht-gelissen/tree/main
3. Clone het project vanuit GitHub ![git.PNG](src%2Fassets%2Fgit.PNG)
4. In Webstorm ga naar File > klik op New > dan op Project from Version Control en plak de link in het URL velt en klik op clone
5. Open de terminal en type npm install, dit zou alle npm's moeten installeren, is dit niet het geval dan moeten deze apart geïnstalleerd moeten worden met de volgende commando's
   5.1. npm install axios
   5.2. npm install jwd-decode
   5.3. npm install react-router-dom
   5.4. npm install react-hook-form
6. Voor het runnen van de applicatie gebruik het commando: npm run dev
    
### inloggen

Er is geen account direct beschikbaar, je dient eerst een account te registreren, dit doet men via de registratie pagina
(het wachtwoord heeft een minimale lengte van 6 karakters)

#### uitleg van npm installs:

*npm install axios*: axios is een gebruiksvriendelijke bibliotheek voor het maken en beheren van HTTP-verzoeken in JavaScript-applicaties, waardoor het een populaire keuze is voor ontwikkelaars bij het werken met HTTP-communicatie.

*npm install jwd-decode*: jwd decode zorgt ervoor dat de verkregen token kan worden gedecodeerd en de gegeven zoals gebruikersnaam, email en andere account gegevens kunnen worden ingezien, wachtwoorden blijven geheim

*npm install react-router-dom*: react-router-dom zorgt ervoor dat de applicatie weet op welke sub pagina je op het moment bent en past de link hierop aan, hierdoor kun je ook gebruik maken van direct link, dit houdt in dat je direct naar de betreffende pagina kunt gaan door de juiste url in te voeren,
ook kan de applicatie via de *navigate* functie de gebruiker door verwijzen naar de juiste pagina.

*npm install react-hook-form*: react-hook-form is een handige bibliotheek die ontwikkelaars in staat stelt om snel en efficiënt formulieren te maken en te beheren in React-toepassingen, met ingebouwde validatieondersteuning en een eenvoudige API.



