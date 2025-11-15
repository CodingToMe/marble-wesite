import React, { useState } from "react";


const YouTube3DCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // start from middle

  const slides = [
    { id: 1, video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, video: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, video: "https://www.w3schools.com/html/movie.mp4" },
    { id: 5, video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="video-section slider-wrapper">
        <h2 className="fw-bold">
        You <span className="text-danger">Tube</span>
      </h2>
      <p className="text-muted">This is the full video description shown here...</p>

      <section id="slider">
        {slides.map((slide, index) => (
          <input
            key={index}
            type="radio"
            name="slider"
            id={`s${index + 1}`}
            checked={activeIndex === index}
            readOnly
          />
        ))}

        {slides.map((slide, index) => (
          <label
            key={index}
            htmlFor={`s${index + 1}`}
            id={`slide${index + 1}`}
            className={activeIndex === index ? "active" : ""}
          >
            <video
              src={slide.video}
              controls
              muted
              loop
              className="video-slide"
            />
          </label>
        ))}
      </section>

      {/* Bottom Controls */}
      <div className="controls">
        <button onClick={prevSlide} className="arrow-btn">
          &#8592;
        </button>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active-dot" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
        <button onClick={nextSlide} className="arrow-btn">
          &#8594;
        </button>
      </div>
    </div>
  );
};
export default YouTube3DCarousel;
