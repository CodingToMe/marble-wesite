import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // 🔹 autoplay on
    autoplaySpeed: 2000, // 🔹 autoplay speed 2 seconds
    slidesToShow: 4, // show 4 cards at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

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
  const handleViewMore = () => {
    navigate("/marble-mandir");
  };
  return (
    <div className="slider-cards">
      <Slider {...settings}>
        {mandirData.map((item) => (
          <div
            key={item.id}
            className="container d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
            onClick={()=>handleViewMore()}
          >
            <div className="cat-card card text-light border-0">
              <img src={item.image} alt={item.title} />

              <div className="card-img-overlay text-center"></div>

              <div className="card-img-overlay">
                <p className="p para">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
