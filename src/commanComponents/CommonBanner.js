import React, { useState } from "react";
import OrderModal from "../Components/Products/OrderModal";

const CommonBanner = ({
  image,
  title,
  description,
  buttonText = "Order Now",
  
  showButton = true,
  data,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleOrder = (data) => {
    setSelectedProduct(data);
    setIsOpen(true);
  };
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
              <button type="button" className="buy-btn" onClick={()=>handleOrder(data)
              }>
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <OrderModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          productData={selectedProduct}
        />
      )}
    </section>
  );
};

export default CommonBanner;
