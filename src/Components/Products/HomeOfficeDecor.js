import React from "react";
import {
  CommonStartInnerSection,
  CommonCard,
  CommonBanner,
  ContactUsCard,
} from "../../commanComponents";
import { homeOfficeDecor } from "../../View/constantData";
import { useNavigate } from "react-router-dom";

const HomeOfficeDecor = () => {
  const navigate = useNavigate();

  const contactCardsData = [
    {
      id: 1,
      image: "images/decorItems/candleWarmer-Lamp.jpeg",
      title: "Candle Warmer Lamp",
      // title: "PEACOCK DESIGN",
      details: "Custom",
      className: "card-one",
    },
    {
      id: 2,
      image: "images/decorItems/solarAbstractOrnament.jpg",
      title: "Solar Abstract Ornament",

      details: "Custom",
      className: "card-two",
    },
    {
      id: 3,

      image: "images/decorItems/Fancy Carrara Marble Accents.jpg",
      title: "Fancy Carrara",

      details: "Custom",
      className: "card-three",
    },
    {
      id: 4,
      image: "images/decorItems/lotusShapedVesselBasin.jpg",
      title: "Lotus Shaped Vessel Basin",

      details: "Customize",
      className: "card-four",
    },
  ];
  const handleOrder = () => {
    console.log("Order Now clicked");
  };
  const navigateFuc = (data) => {
    localStorage.setItem("orderData", JSON.stringify(data));
    navigate(`/product/${data.slug}`);
  };
  return (
    <div>
      <div className="mandir-section ">
        <CommonStartInnerSection
          author="Explore Our"
          title="Home Office Decor "
          topic="Handicraft Items"
          description="Handcrafted from natural stone and premium marble, our home and office decor items combine traditional artisan craftsmanship with modern elegance."
          image="images/decorItems/bathroomAccessories.jpeg"
        />

        <CommonCard heading={"Handicraft Items"}
         cardData={homeOfficeDecor}
         navigateFuc={navigateFuc}
         />
        <CommonBanner
          image="images/decorItems/diya-bg.png"
          title="Handcrafted marble diya and brass tealight holders for festive glow."
          description="Hand-carved from white marble with brass brass-toned inserts, these handcrafted diyas bring timeless elegance and a warm, festive glow to your home."
          buttonText="Order Now"
          onButtonClick={handleOrder}
        />
        <ContactUsCard
          contactCardsData={contactCardsData}
          title="Let's Design Your"
          highlightTitle="Handicraft Items"
          description={`
           Explore our exclusive collection of handcrafted marble handicrafts, featuring elegant designs, intricate carvings, and premium finishing.  From decorative pieces to unique artistic creations, we bring your ideas to life with exceptional craftsmanship and personalized customization.`}
        />
        {/* <div className="carousel inner-sections">
          <div className="list">
            <div className="item">
              <img src="images/mandir_images/mandirc3.png" alt="slide1" />
              <div className="content">
                <div className="author">Explore Our</div>
                <div className="title">Premium Marble</div>
                <div className="topic">MANDIR</div>
                <div className="des">
                  White marble temple featuring intricate CNC carvings,
                  traditional domes, and elegant peacock motifs for luxury home
                  interiors.
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeOfficeDecor;
