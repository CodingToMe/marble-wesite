import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const getSlides = () => {
  const w = window.innerWidth;
  if (w < 576) return 1;
  if (w < 992) return 2;
  if (w < 1200) return 3;
  return 4;
};

const Cards = () => {
  const navigate = useNavigate();
  const [slides, setSlides] = useState(getSlides());

  useEffect(() => {
    const onResize = () => setSlides(getSlides());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: slides,
    slidesToScroll: 1,
    arrows: false,
    // responsive hata diya
  };

  // mandirData same rahega ...
  const mandirData = [
    {
      id: 1,
      image: "images/mandir_images/mandir-card1.jpeg",
      title:
        "Exquisite Vietnam Marble Pooja Mandir – Luxury Handcrafted Sacred Temple",
      link: "/Marble-mandir",
    },
    {
      id: 2,
      image: "images/mandir_images/mandir-card2.jpeg",
      title:
        "Premium Marble Temple – Elegant Traditional Craftsmanship with Timeless Beauty",
      link: "/Marble-mandir",
    },
    {
      id: 3,
      image: "images/mandir_images/mar1.png",
      title:
        "Designer Vietnam Marble Mandir – Beautifully Crafted for Sacred Spaces",
      link: "/Marble-mandir",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card12.jpg",
      title:
        "Exclusive Marble Pooja Mandir – A Perfect Blend of Luxury and Devotion",
      link: "/Marble-mandir",
    },
    {
      id: 5,
      image: "images/mandir_images/mandir-card4.jpeg",
      title:
        "Handcrafted Marble Temple – Bringing Spiritual Elegance to Your Home",
      link: "/Marble-mandir",
    },
  ];

  return (
    <div className="slider-cards">
      {/* key change hone par slider fresh render hota hai */}
      <Slider key={slides} {...settings}>
        {mandirData.map((item) => (
          <div key={item.id} className="slide-wrapper" onClick={() => navigate("/marble-mandir")}>
            <div className="cat-card card text-light border-0">
              <img src={item.image} alt={item.title} />
              <div className="card-img-overlay">
                <p className="para">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;