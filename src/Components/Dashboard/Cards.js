import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
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

  return (
    <div className="slider-cards">
      <Slider {...settings}>
        <div
          className="  container d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div
            className=" cat-card card text-light border-0 "
            //
          >
            <img
              src="images/mandir_images/mandir-card1.jpeg"
              // className="card-img"
              alt="..."
            />
            <div className="card-img-overlay text-center"></div>
            <div className="card-img-overlay ">
            <p className="p para">Exquisite Vietnam Marble Pooja Mandir – Luxury Handcrafted Sacred Temple</p>
            </div>
          </div>
        </div>
        <div
          className=" container d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="cat-card card text-light border-0 ">
            <img
              src="images/mandir_images/mandir-card2.jpeg"
              // className="card-img"
              alt="..."
            />
            <div className="card-img-overlay text-center"></div>
            <div className="card-img-overlay ">
            <p className="p para">Exquisite Vietnam Marble Pooja Mandir – Luxury Handcrafted Sacred Temple</p>
            </div>
          </div>
        </div>

        <div
          className="images/mandir_images/mandir-card2.jpeg"
          style={{ height: "100vh" }}
        >
          <div className=" cat-card card text-light border-0 ">
            <img
              src="images/mandir_images/mar1.png"
              // className="card-img"
              alt="..."
            />
            <div className="card-img-overlay text-center"></div>
            <div className="card-img-overlay ">
            <p className="p para">Exquisite Vietnam Marble Pooja Mandir – Luxury Handcrafted Sacred Temple</p>
            </div>
          </div>
        </div>

        <div
          className=" container d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="cat-card card text-light border-0 ">
            <img
              src="images/mandir_images/mandir-card12.jpg"
              // className="card-img"
              alt="..."
            />
            <div className="card-img-overlay text-center"></div>
            <div className="card-img-overlay ">
            <p className="p para">Exquisite Vietnam Marble Pooja Mandir – Luxury Handcrafted Sacred Temple</p>
            </div>
          </div>
        </div>

        <div
          className=" container d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className=" cat-card card text-light border-0 ">
            <img
              src="images/mandir_images/mandir-card4.jpeg"
              // className="card-img"
              alt="..."
            />
            
            <div className="card-img-overlay text-center"></div>
            <div className="card-img-overlay ">
            <p className="p para">Exquisite Vietnam Marble Pooja Mandir – Luxury Handcrafted Sacred Temple</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Cards;
