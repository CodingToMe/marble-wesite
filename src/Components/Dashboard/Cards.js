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
        <div className="  container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className=" cat-card card text-light border-0 " style={{ maxWidth: "20em" }}>
            <img src="https://codingyaar.com/wp-content/uploads/lamp.jpg" className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title fw-bold fs-1">Lamps</h5>
              <button className="btn btn-outline-light btn-sm rounded-0 mt-2">Shop Now</button>
            </div>
          </div>
        </div>
        <div className=" container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="cat-card card text-light border-0 " style={{ maxWidth: "20em" }}>
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title fw-bold fs-1">Lamps</h5>
              <button className="btn btn-outline-light btn-sm rounded-0 mt-2">Shop Now</button>
            </div>
          </div>
        </div>

        <div className=" container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className=" cat-card card text-light border-0 " style={{ maxWidth: "20em" }}>
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title fw-bold fs-1">Lamps</h5>
              <button className="btn btn-outline-light btn-sm rounded-0 mt-2">Shop Now</button>
            </div>
          </div>
        </div>


        <div className=" container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="cat-card card text-light border-0 " style={{ maxWidth: "20em" }}>
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title fw-bold fs-1">Lamps</h5>
              <button className="btn btn-outline-light btn-sm rounded-0 mt-2">Shop Now</button>
            </div>
          </div>
        </div>

        <div className="cat-card container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="card text-light border-0 " style={{ maxWidth: "20em" }}>
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img" alt="..." />
            <div className="card-img-overlay text-center">
              <h5 className="card-title fw-bold fs-1">Lamps</h5>
              <button className="btn btn-outline-light btn-sm rounded-0 mt-2">Shop Now</button>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Cards;
