import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,          // 🔹 autoplay on
    autoplaySpeed: 2000,   // 🔹 autoplay speed 2 seconds
    slidesToShow: 4,  // show 4 cards at once
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

  return (
    <div className="slider-cards">
      <Slider {...settings}>
        <div className="px-2">
          <figure>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
          </figure>
          <h5 className="title">Card title</h5>
        </div>

        <div className="px-2">
          <figure>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
              className="card-img-top"
              alt="Palm Springs Road"
            />
          </figure>
          <h5 className="title">Card title</h5>
        </div>

        <div className="px-2">
          <figure>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
              className="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
          </figure>
          <h5 className="title">Card title</h5>
        </div>
        <div className="px-2">
          <figure>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
              className="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
          </figure>
          <h5 className="title">Card title</h5>
        </div>
        <div className="px-2">
          <figure>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
              className="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
          </figure>
          <h5 className="title">Card title</h5>
        </div>


      </Slider>
    </div>
  );
};

export default Cards;
