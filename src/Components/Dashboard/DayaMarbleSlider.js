import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DayaMarbleSlider = ({ activeTab, activeTabData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    beforeChange: (current, next) => setActiveIndex(next), // update content when slide changes
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="marble-section">
      {/* Left content updates based on active slide */}
      <div className="marble-content">
        <h2>Explore Our Premium Marble Creations</h2>
        <p>
          Discover our exquisite collection of handcrafted marble art, decor,
          and timeless masterpieces. Elegantly crafted with premium quality
          marble and exceptional craftsmanship.
        </p>
      </div>

      {/* Right slider */}
      <div className="slider-wrapper">
        <Slider key={activeTab} {...settings}>
          {activeTabData.map((slide, idx) => (
            <div className="slide-card" key={idx}>
              <img src={slide.img} alt={slide.title} />
              <div className="overlay">
                <h4>{slide.title}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DayaMarbleSlider;
