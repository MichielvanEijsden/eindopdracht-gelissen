import './Footer.css'
import fb_logo from '../../assets/facebook.svg'
function Footer(){
    return(
        <footer>
            <div className='outer-container'>
            <div className='inner-container'>
                <div className='footer-bar'>
                    <img src={fb_logo}  alt='fb logo'/>
                    dit word een hele mooie footer ooit
                </div>

            </div>
            </div>
        </footer>
    )
}
export default Footer