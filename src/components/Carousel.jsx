import React, { useRef } from 'react'
import './Carousel.css'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'

function Carousel() {
  let count=0

  let imageContainerRef = useRef(null)

  const images = [img1, img2, img3]

  const prev = () => {

    imageContainerRef.current.scrollLeft -= 250
    --count
    if(count < 0){
      imageContainerRef.current.scrollLeft = 800
      count = 2
    }
  }
  const next = () => {

    imageContainerRef.current.scrollLeft += 250
    ++count
    if(count > 2){
      imageContainerRef.current.scrollLeft = 0
      count = 0
    }

  }

  return (
    <div className="container">
        <div className="content">
            <div className="prev" onClick={prev}></div>
            <div className="slide-pannel" ref={imageContainerRef}>
                {images.map((imageArray,index) => { 
                  return (
                        <img key={index} src={imageArray} alt='landscape'/>
                  )
                  })
                }
            </div>
            <div className="next" onClick={next}></div>
        </div>
    </div>
  )
}

export default Carousel
