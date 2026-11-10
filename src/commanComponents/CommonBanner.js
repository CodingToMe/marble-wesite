import React from "react";

const CommonBanner = ({
  image,
  title,
  description,
  buttonText = "Order Now",
  onButtonClick,
  showButton = true,
}) => {
  return (
    <section className="product-banner">
      <div className="row g-0 h-100">
        {/* Left Image Section */}
        <div className="col-md-6 banner-left">
          <img src={image} alt={title} className="banner-model" />
        </div>

        {/* Right Content Section */}
        <div className="col-md-6 banner-right">
          <div className="product-content">
            <h1>{title}</h1>
            <h6>DESCRIPTION</h6>
            <p>{description}</p>

            {showButton && (
              <button type="button" className="buy-btn" onClick={onButtonClick}>
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;