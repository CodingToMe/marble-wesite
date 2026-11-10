import React, { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = "91XXXXXXXXXX"; // asli number daalein
  const callNumber = "+916367877532";
  const message = "Hello, I want to know more about your marble products.";

  return (
    <div className="floating-buttons">
      {/* Back To Top */}
      {showTopButton && (
        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}

      {/* Call */}
      <a
        href={`tel:${callNumber}`}
        className="call-btn"
        aria-label="Call us"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-chat"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default FloatingButtons;