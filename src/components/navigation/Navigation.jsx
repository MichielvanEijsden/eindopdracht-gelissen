import './Navigation.css'
import {NavLink} from 'react-router-dom';
import basket from '../../assets/cart-shopping-solid.svg'
import {useContext, useState} from 'react';
import bars from '../../assets/bars-solid.svg'
import cross from '../../assets/xmark-solid.svg'
import {AuthContext} from "../../context/AuthContext.jsx";


function Navigation() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [subMenu, setSubMenu] = useState(false)
    const {auth, logOut} = useContext(AuthContext)

    function Menu() {
        return (

            <>
                <li><NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                             to='/' onClick={() => setToggleMenu(false)}>Home</NavLink>
                </li>
                <li><NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                             to='/Webshop' onClick={() => setToggleMenu(false)}>Webshop</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                             to='/Assortiment' onClick={() => setToggleMenu(false)}>Assortiment</NavLink>
                </li>
                <li><NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                             to='/Location' onClick={() => setToggleMenu(false)}
                >Locatie</NavLink></li>
                <li onMouseEnter={() => setSubMenu(true)}
                    onMouseLeave={() => setSubMenu(false)}
                ><NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                          to='/About-Us'
                >Over ons</NavLink>
                    {subMenu && <SubMenu/>}
                </li>
                {auth.isAuth === false &&
                    <>

                        <li><NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                                     to='/Login' onClick={() => setToggleMenu(false)}>Login</NavLink></li>
                    </>
                }
                {auth.isAuth === true &&
                    <>
                        <li><NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                                     to='/Cart/' onClick={() => setToggleMenu(false)}><img src={basket}
                                                                                           alt='shopping cart'/></NavLink>
                        </li>
                        <li><NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                                     to='/Login' onClick={() => logOut() && setToggleMenu(false)}>Logout</NavLink></li>
                    </>}
            </>
        )
    }
    function SubMenu(){
    return(
        <>
            <ul className={subMenu ? 'subMenu-aboutUs' : 'subMenu-aboutUs-clicked'}>
                <li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to='/Contact'
                             onClick={() => setSubMenu(false) & setToggleMenu(false)}>Contactgegevens</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to='/History'
                             onClick={() => setSubMenu(false) & setToggleMenu(false)}>Onze geschiedenis</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to='/Impression'
                             onClick={() => setSubMenu(false) & setToggleMenu(false)}>Impressie</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to='/Privacy-policy'
                             onClick={() => setSubMenu(false) & setToggleMenu(false)}>Privacy policy</NavLink></li>
            </ul>

        </>
    )}
    return (
        <>
            <section className='nav'>
                <nav className='nav-bar'>
                    <ul className='nav-bar-menu'>
                        <Menu/>
                    </ul>

                    <div className='nav-button-container'>
                        {toggleMenu ? <img className='nav-button-img' src={cross} alt='cross'
                                           onClick={() => setToggleMenu(false)}/> :
                            <img className='nav-button-img' src={bars} alt='bars'
                                 onClick={() => setToggleMenu(true)}/>}
                        {toggleMenu && (
                            <ul className='dropdown-menu'>
                                <Menu/>
                            </ul>
                        )}
                    </div>
                </nav>

            </section>

        </>
    )
}

export default Navigation