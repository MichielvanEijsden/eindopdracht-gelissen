import './Impression.css'
import img1 from '../../../../assets/impressie 1.jpg'
import img2 from '../../../../assets/impressie 2.jpg'
import img3 from '../../../../assets/impressie 3.jpg'
function Impression(){
    return(
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <div>
                        <h2>Hieronder ziet u een sfeerimpressie van onze winkel.</h2>
                        <div className='impression-container' >
                        <span className='impression-section'>
                            <img className='impression-img' src={img1} alt='impressie'/>
                            <figcaption>Winkel, richting werkplaats</figcaption>
                        </span>
                        <span className='impression-section'>
                          <img className='impression-img' src={img2} alt='impressie'/>
                            <figcaption>Detail</figcaption>
                        </span>
                        <span className='impression-section'>
                            <img className='impression-img' src={img3} alt='impressie'/>
                             <figcaption>Fietsen</figcaption>
                        </span>
                        </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
export default Impression