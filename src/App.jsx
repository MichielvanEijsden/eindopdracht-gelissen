import './App.css'
import {Route, Routes} from 'react-router-dom';
import Header from './pages/header/Header.jsx'
import Home from './pages/home/Home.jsx'
// import Occasions from './pages/occasions/Occasions.jsx'
import Assortiment from './pages/assortiment/Assortiment.jsx'
import Location from './pages/location/Location.jsx'
import AboutUs from './pages/about-us/AboutUs.jsx'
import Footer from "./pages/footer/Footer.jsx";
import Navigation from "./pages/navigation/Navigation.jsx";
import Webshop from "./pages/webshop/Webshop.jsx";
import Contact from "./pages/about-us/subpages/contact/Contact.jsx";
import Privacy from "./pages/about-us/subpages/privacy policy/Privacy.jsx";
import History from "./pages/about-us/subpages/history/History.jsx";
import Impression from "./pages/about-us/subpages/impression/Impression.jsx";

function App() {


  return (
    <>
    <Header/>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home />}/>
        {/*<Route path='/Occasions' element={<Occasions />}/>*/}
        <Route path='/Webshop' element={<Webshop />}/>
        <Route path='/Assortiment' element={<Assortiment />}/>
        <Route path='/Location' element={<Location />}/>
        <Route path='/About-us' element={<AboutUs />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/History' element={<History/>}/>
        <Route path='Impression' element={<Impression/>}/>
        <Route path='Privacy-Policy' element={<Privacy/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
