import React from "react";

const ContactUsCard = ({contactCardsData,
   title = "Let's Design Your",
  highlightTitle = "Dream Marble Mandir",
  description,
}) => {
 
  return (
    <section className="real-estate-hero">
      {/* Floating Property Cards */}
      {contactCardsData.map((card) => (
        <div className={`property-card ${card.className}`} key={card.id}>
          <img src={card.image} alt={card.title} />

          <div className="property-info">
            <h6>{card.title}</h6>
            {/* <p>{card.title}</p> */}
            <small>{card.details}</small>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="hero-content">
        <div className="homeowners">
          <img src="https://i.pravatar.cc/100?img=47" alt="Homeowner" />
          <img src="https://i.pravatar.cc/100?img=12" alt="Homeowner" />
          <img src="https://i.pravatar.cc/100?img=32" alt="Homeowner" />

          <span>15+</span>
          <div>15+ Happy Customers</div>
        </div>

        <h1>
          {title}
          <br />
          <span>{highlightTitle}</span>
        </h1>

        <p>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </p>

        {/* Search Bar */}
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <button className="btn btn-primary-orange"
          onClick={() => window.location.href = 'tel:+916367877532'}
          >
            Contact Us <i className="bi bi-arrow-right ms-2"></i>
          </button>

          <button className="btn orange-btn-outline" onClick={() => window.open('https://wa.me/916367877532', '_blank')}>
            <i className="bi bi-whatsapp me-2"></i>
            Chat With Us
          </button>
        </div>
        {/* <div className="property-search">
          <div className="search-field">
            <select defaultValue="">
              <option value="" disabled>
                Location
              </option>
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
          </div>

          <div className="search-field">
            <select defaultValue="">
              <option value="" disabled>
                Property Type
              </option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>House</option>
            </select>
          </div>

          <div className="search-field">
            <select defaultValue="">
              <option value="" disabled>
                Price range
              </option>
              <option>$100,000 - $200,000</option>
              <option>$200,000 - $500,000</option>
              <option>$500,000+</option>
            </select>
          </div>

          <button className="search-btn" aria-label="Search">
            <i className="bi bi-search"></i>
          </button>
        </div> */}
      </div>

      {/* Testimonial */}
      {/* <div className="testimonial-card">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
          alt="Happy client"
        />

        <p>
          "From the cozy living room to the beautiful balcony, everything was
          just perfect."
        </p>

        <small>— Happy Client</small>
      </div> */}
    </section>
  );
};

export default ContactUsCard;
