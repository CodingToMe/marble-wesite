
import React from "react";

const CommonStartInnerSection = ({
  author = "Explore Our",
  title,
  topic,
  description,
  image,
  reverse = false,
}) => {
  return (
    <div className="text-center start-inner-section">
      <div className="container">
        <div className={`row align-items-center ${reverse ? "flex-row-reverse" : ""}`}>

          {/* Left Content */}
          <div className="col-md-6 col-12">
            <div className="carousel inner-sections">
              <div className="list">
                <div className="item">
                  <div className="content">
                    <div className="author">{author}</div>
                    <div className="title">{title}</div>
                    <div className="topic">{topic}</div>
                    <div className="des">{description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 col-12">
            <div className="card card-section">
              <img
                className="side-image"
                src={image}
                alt={topic || title}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CommonStartInnerSection;
