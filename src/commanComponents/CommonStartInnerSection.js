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
    <section className="start-inner-section">
      <div className="container">
        <div
          className={`row align-items-center g-4 ${
            reverse ? "flex-md-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <div className="col-12 col-md-6">
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

          {/* Image */}
          <div className="col-12 col-md-6">
            <div className="card-section">
              <img
                className="side-image"
                src={image}
                alt={topic || title}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonStartInnerSection;