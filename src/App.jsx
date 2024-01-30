import './App.css'
import {Route, Routes} from 'react-router-dom';
import Header from './pages/header/Header.jsx'
import Home from './pages/home/Home.jsx'
import Assortiment from './pages/assortiment/Assortiment.jsx'
import Location from './pages/location/Location.jsx'
import AboutUs from './pages/about-us/AboutUs.jsx'
import Footer from "./pages/footer/Footer.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Webshop from "./pages/webshop/Webshop.jsx";
import Contact from "./pages/about-us/subpages/contact/Contact.jsx";
import Privacy from "./pages/about-us/subpages/privacy policy/Privacy.jsx";
import History from "./pages/about-us/subpages/history/History.jsx";
import Impression from "./pages/about-us/subpages/impression/Impression.jsx";
import ErrorPage from "./pages/Errorpage/Errorpage.jsx";
import Products from "./pages/products/Products.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/Register.jsx";


function App() {


  return (
    <>
    <Header/>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Webshop' element={<Webshop />}/>
        <Route path='/Product/:id' element={<Products/>}/>
        <Route path='/Assortiment' element={<Assortiment />}/>
        <Route path='/Location' element={<Location />}/>
        <Route path='/About-us' element={<AboutUs />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/History' element={<History/>}/>
        <Route path='/Impression' element={<Impression/>}/>
        <Route path='/Privacy-Policy' element={<Privacy/>}/>
        <Route path='/Cart/' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
