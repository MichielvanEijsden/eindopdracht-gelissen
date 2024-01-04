import './Footer.css'
import fb_logo from '../../assets/facebook.svg'
import {Link} from "react-router-dom";
function Footer(){
    return(
        <footer>
            <div className='outer-container'>
            <div className='inner-container'>
                <div className='footer-bar'>
                    <Link to='https://www.facebook.com/GelissentweewielersBeek'><img className='fb-icon' src={fb_logo}  alt='fb logo'/></Link>
                    <div className='footer-text'>
                    <p> ©2024 | Gelissen Tweewielers VOF</p>
                        <p>Made by Michiel van Eijsden</p>
                    </div>
                </div>

            </div>
            </div>
        </footer>
    )
}
export default Footer