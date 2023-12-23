import './Header.css'
import {NavLink} from "react-router-dom";
import header_img from '../../assets/transparant wit .png'


function Header(){
    return(
        <header>
        <div className="outer-container">
            <div className="inner-container">
                <span className="header-image">
                    <img src={header_img} alt="logo Gelissen"/>
                </span>
            </div>
        </div>
        <nav className="nav-bar outer-container">
                <div className="nav-bar-container">
                    <ul id="nav-bar">
                            <li><NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"}
                                   to='/Occasions'>Occasions</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"}
                                     to='/Webshop'>Webshop</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to='/Assortiment'>Assortiment</NavLink>
                            </li>
                            <li><NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to='/Location'>Locatie</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to='/About-Us'>Over ons</NavLink></li>
                            <li>
                                <form>
                                    <label>
                                        <input className="search-field" type="search" placeholder="Zoeken..."/>
                                    </label>
                                    <button type="submit">Zoeken</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>
    </header>
)

}
export default Header