import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DayaMarbleSlider = () => {
  const slidesData = [
    {
      title: "Flawless White",
      img: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
      desc: "Flawless White is luxurious, versatile, and perfect for temples and homes."
    },
    {
      title: "Imported Marble",
      img: "https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",
      desc: "Imported Marble brings elegance and durability with stunning textures."
    },
    {
      title: "Imported Italian Marble",
      img: "https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",
      desc: "Imported Italian Marble is known worldwide for beauty and strength."
    },
    {
      title: "Travertine Marble",
      img: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
      desc: "Travertine Marble offers a natural rustic look with timeless appeal."
    }
  ];

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
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="marble-section">
      {/* Left content updates based on active slide */}
      <div className="marble-content">
        <h2>Popular Marble, Mandir</h2>
        <p>{slidesData[activeIndex].desc}</p>
      </div>

      {/* Right slider */}
      <div className="slider-wrapper">
        <Slider {...settings}>
          {slidesData.map((slide, idx) => (
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
