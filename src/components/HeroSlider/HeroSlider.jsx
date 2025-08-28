import React, { useEffect, useState } from "react";

import './HeroSlider.css'


const HeroSlider = () => {
    const slides = [
        {url: '/images/slider/slide1.jpg', title: "Slide 1"},
        {url: '/images/slider/slide2.jpg', title: "Slide 2"},
        {url: '/images/slider/slide3.jpg', title: "Slide 3"},
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const intervalId = setTimeout(() => {
        setCurrentIndex(currentIndex => currentIndex < (slides.length - 1) ? (currentIndex + 1) : 0);
      }, 5000);
            
    });
    

    const gotoPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const gotoNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    
  return (
    <>
      <div style={{ width: "100%",height: "100%", position: "relative" }}>
        <div className="slideContainer">
          <img src="/images/slider/arrow2.png" className="arrow" onClick={() => gotoPrevious()} />
        
          {slides.map((slide, slideIndex) => (
            <img src={slide.url} key={slideIndex} className='imgSlide' style={{translate: `${-100 * currentIndex}%`}} />            
          ))}

          <img src="/images/slider/arrow2.png" className="arrow right" onClick={() => gotoNext()} />
      </div>
    </div>
    </>
  );
};

export default HeroSlider;
