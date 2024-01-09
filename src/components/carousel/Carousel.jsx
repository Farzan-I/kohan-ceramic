import { useState } from "react"
import { styles } from "../../styles";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css"

const Carousel = ({ data }) => {
    const[slide, setSlide] =  useState(0);

    const nextSlide = () => {
      setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
      setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }


  return (
    <div className="carousel-section">
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Extensive range
      </h2>
      <h2 className={`${styles.sectionHeroText} text-center`}>
        Full range on instagram
      </h2>
      <h2 className={`${styles.sectionHeroText} text-center`}>
        @kohan_ceramic
      </h2>

      <br/>
      
      <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {data.map((item, idx) => {
          return (
            <img src={item.src} alt={item.alt} key={idx} className={ slide === idx ? "slide" : "slide slide-hidden" }/>
          );
        })}
          <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
          <span className="indicators">
            {data.map((_, idx) => {
              return <button key={idx} 
                      onClick={() => setSlide(idx)} 
                      className={ 
                        slide === idx ? "indicator" : "indicator indicator-inactive" 
                      }>
                      </button>
            })}
          </span>
      </div>
    </div>
  )
}

export default Carousel