import './Header.css'
import header_img from '../../assets/transparant wit .png'


function Header() {
    return (
        <>
            <header>
                <div className='outer-container'>
                    <div className='inner-container'>
                <span>
                    <img className='header-image' src={header_img} alt='logo Gelissen'/>
                </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header