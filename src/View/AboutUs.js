import React from "react";
import { Link } from "react-router-dom";
import { ContactUsCard } from "../commanComponents";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="">
        <img
          className="banner"
          src="images/about us banner.png"
          alt="Snow"
          width={"100%"}
          height={"470px"}
        />

        <div className="centered">
          <div className="content">
            <h1 className="title">
              The <span style={{ color: "#ff4000" }}>Art of Marble </span> , The
              Beauty of Craftsmanship.
            </h1>
            <p className="para">
              {/* <span style={{color:"#ffff"}} >White Marble Art </span> */}
              White Marble Art creates exquisite handcrafted marble temples,
              fountains, and decorative pieces, bringing timeless elegance to
              homes, temples, and gardens across India.
            </p>
          </div>
          <div className="stats">
            <span>
              <b>5+</b> Years of craft
            </span>
            <span>
              <b>15+</b> Projects delivered
            </span>
            <span>
              <b>100%</b> Hand finished
            </span>
          </div>
        </div>
      </div>
      <section>
        <div className="container wrap story">
          <div>
            <h2>Our Story</h2>
            <p>
              Our work began with a simple belief: a piece of white marble can
              carry devotion, beauty and craftsmanship for a lifetime. For over
              5 years, our family of artisans has been shaping raw marble into
              mandirs, murtis, fountains and handicrafts.
            </p>
            <p>
              Every piece is carved, polished and finished by hand. We choose
              each block ourselves, so the stone you receive is pure, smooth and
              free from flaws.
            </p>
            <p>
             Today, we serve homes, temples, hotels and gardens with exquisite marble temples, fountains, decorative pieces and handcrafted creations, each reflecting timeless beauty and skilled craftsmanship.
            </p>
          </div>
          <div className="quote">
            “We don’t just sell marble. We shape it until it feels alive.”
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "0px" }} className="container">
        <div className="wrap">
          <h2>What we make</h2>
          <div className="card-section">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card about-card ">
                  <img
                    src="images/mandir_images/mandir-card20.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Marble Mandir</h5>
                    <p className="card-text">
                      Home temples and large temple structures with fine
                      carving, domes and pillars, made to your size and design.
                    </p>
                    <span className="about-link" link="">
                      Explore mandirs
                    </span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card about-card ">
                  <img
                    src="images/decorItems/fountains/Versailles Garden Pond Fountain.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Marble fountains</h5>
                    <p className="card-text">
                      Garden, courtyard and indoor fountains in classic and
                      modern styles, built for steady flow and easy upkeep.
                    </p>
                    <span className="about-link" link="">
                      Explore fountain
                    </span>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card about-card ">
                  <img
                    src="images/decorItems/bathroomAccessories.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Handicraft items</h5>
                    <p className="card-text">
                      Explore our exquisite collection of handcrafted marble
                      sculptures, artistic decor and unique gifting creations.
                    </p>
                    <Link to={"/home-office-decor"} className="about-link">
                      Explore handicrafts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="why-choose-wrap">
          <h2>Why Customers Choose Us</h2>

          <ul className="why-choose-list">
            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 3l11 8-11 18L5 11z" />
              </svg>
              <strong>Premium Quality</strong>
              <span>Exceptional quality crafted with premium marble.</span>
            </li>

            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 26l14-14M18 6l8 8-4 4-8-8zM6 26l-1 3 3-1" />
              </svg>
              <strong>Skilled Artisans</strong>
              <span>Traditional carving passed down over years.</span>
            </li>

            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 8h24v16H4zM4 14h24M10 20h6" />
              </svg>
              <strong>Custom Designs</strong>
              <span>Share your idea or size and we will build it.</span>
            </li>

            <li>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9h16v13H3zM19 13h6l4 4v5H19zM9 26a2 2 0 100-4 2 2 0 000 4zM24 26a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <strong>Safe Delivery</strong>
              <span>Careful packing and shipping across India.</span>
            </li>
          </ul>
        </div>
      </section>
      <ContactUsCard
      // contactCardsData={contactCardsData}
          title="Let's Create Something"
          highlightTitle="Beautiful Together"
          description={`
            From elegant marble temples to fountains and handcrafted decor, we turn your ideas into timeless creations.`}
      />      
          </div>
  );
};

export default AboutUs;
