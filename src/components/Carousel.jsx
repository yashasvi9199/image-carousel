import React, { useRef } from 'react'
import './Carousel.css'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'

function Carousel() {

  let imageContainerRef = useRef(null)

  const images = [img1, img2, img3]

  const prev = () => imageContainerRef.current.scrollLeft -= 250
  const next = () => imageContainerRef.current.scrollLeft += 250

  return (
    <div className="container">
        <div className="content">
            <div className="prev" onClick={prev}></div>
            <div className="slide-pannel" ref={imageContainerRef}>
                {images.map(image => { return (<img src={image} />)})}
            </div>
            <div className="next" onClick={next}></div>
        </div>
    </div>
  )
}

export default Carousel
