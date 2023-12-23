import './App.css'
import {Route, Routes} from 'react-router-dom';
import Header from './pages/header/Header.jsx'
import Home from './pages/home/Home.jsx'
import Occasions from './pages/occasions/Occasions.jsx'
import Assortiment from './pages/assortiment/Assortiment.jsx'
import Location from './pages/location/Location.jsx'
import AboutUs from './pages/about-us/AboutUs.jsx'
import Footer from "./pages/footer/Footer.jsx";

function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Occasions' element={<Occasions />}/>
        <Route path='/Assortiment' element={<Assortiment />}/>
        <Route path='/Location' element={<Location />}/>
        <Route path='/About-us' element={<AboutUs />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
