import img1 from "../../assets/gallery/Bikkel-iBee-Tuba-Disk-Gates-1024x689.gif"
import img2
    from "../../assets/gallery/Bikkel-iBee-Tuba-Disk-Gates-Denim-blue-1024x689.jpg";
import img3
    from "../../assets/gallery/Bikkel-iBee-Tuba-Disk-Gates-Indigo-blue--1024x689.jpg";
import img4 from '../../assets/gallery/Bikkel-iBee-Tuba-Disk-Gates-Indigo-blue-Lifestyle-1-1024x768.jpg'
import img5 from '../../assets/gallery/Bikkel-iBee-Tuba-Disk-Gates-Steel-grey-1024x689.jpg'
import img6 from '../../assets/gallery/Bikkel-iBee-Tuba-Disk-Gates-Night-grey-1024x689.jpg'
import {useEffect, useState} from "react";
import './Gallery.css'

function Gallery() {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return(<>
            <div className='gallery-container'>
            <span className='gallery-sides'>
                {currentImageIndex ===0? <img src={images[images.length-1]} alt='img-1'/>: <img src={images[currentImageIndex-1]} alt='img-test'/>  }
            </span>
            <span className='gallery'>
                <img src={images[currentImageIndex]} alt="gallery-img" />
            </span>
            <span className='gallery-sides'>
                {currentImageIndex === images.length-1? <img src={images[0]} alt='img+test'/> : <img src={images[currentImageIndex+1]} alt='img+1'/> }
            </span>
            </div>
        </>
    )
}
export default Gallery