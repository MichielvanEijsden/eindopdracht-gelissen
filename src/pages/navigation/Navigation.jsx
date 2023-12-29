import './Navigation.css'
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <>
            <section className="nav">

                <input id="nav-toggle" type="checkbox"/>
                <label className="nav-button-container" htmlFor="nav-toggle">
                    <div className="nav-button"></div>
                </label>

                <nav className="nav-bar">
                    <ul className="nav-bar-menu">
                        <li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}
                                     to='/'>Home</NavLink>
                        </li>
                        {/*<li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}*/}
                        {/*             to='/Occasions'>Occasions</NavLink></li>*/}
                        <li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}
                                     to='/Webshop'>Webshop</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}
                                     to='/Assortiment'>Assortiment</NavLink>
                        </li>
                        <li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}
                                     to='/Location'>Locatie</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}
                                     to='/About-Us'>Over
                            ons</NavLink></li>

                    </ul>
                </nav>
            </section>



        </>
    )
}

export default Navigation