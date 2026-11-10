import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getSlides = () => {
  const w = window.innerWidth;
  if (w < 768) return 1;
  if (w < 1024) return 2;
  return 3;
};

const DayaMarbleSlider = ({ activeTab, activeTabData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState(getSlides());

  useEffect(() => {
    const onResize = () => setSlides(getSlides());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: slides > 1, // mobile par arrows hide
    beforeChange: (current, next) => setActiveIndex(next),
    // responsive hata diya
  };

  return (
    <section className="marble-section">
      <div className="marble-content">
        <h2>Explore Our Premium Marble Creations</h2>
        <p>
          Discover our exquisite collection of handcrafted marble art, decor,
          and timeless masterpieces. Elegantly crafted with premium quality
          marble and exceptional craftsmanship.
        </p>
      </div>

      <div className="slider-wrapper">
        {/* key mein tab + slides dono, taaki dono change par fresh render ho */}
        <Slider key={`${activeTab}-${slides}`} {...settings}>
          {activeTabData.map((slide, idx) => (
            <div key={idx}>
              <div className="slide-card">
                <img src={slide.img} alt={slide.title} />
                <div className="overlay">
                  <h4>{slide.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DayaMarbleSlider;