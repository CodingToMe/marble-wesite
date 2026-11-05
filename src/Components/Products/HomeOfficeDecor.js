import React from "react";
import {
  CommonStartInnerSection,
  CommonCard,
  CommonBanner,
  ContactUsCard,
} from "../../commanComponents";

const HomeOfficeDecor = () => {
  const cardData = [
    {
      id: 1,
      image: "images/decorItems/bathroomAccessories.jpeg",
      title: "Card Title 1",
      description:
        "Beautifully crafted with elegant designs and exceptional finishing.",
    },
    {
      id: 2,
      image: "images/decorItems/bespokeSculpturalLighting.jpg",
      title: "Card Title 2",
      description:
        "This hand-carved stone floor lamp features a spiraling flame design with warm internal illumination, creating a dramatic luxury centerpiece for modern homes and offices.",
    },
    {
      id: 3,
      image: "images/decorItems/blackFlutedStonePedestal.jpg",
      title: "Card Title 3",
      description:
        "Hand-carved black fluted stone pedestal for displaying luxury home decor table.",
    },
    {
      id: 4,
      image: "images/decorItems/blackWashBesin.jpg",
      title: "Card Title 4",
      description:
        "Hand-carved black natural stone washbasin with a sleek matte finish."
    },
    {
      id: 5,
      image: "images/decorItems/lotusShapedVesselBasin.jpg",
      title: "Card Title 4",
      description:
        "Artisan natural stone vessel basin, hand-carved into a blooming lotus shape.",
    },
    {
      id: 6,
      image: "images/decorItems/gardenStatues.jpg",
      title: "Card Title 4",
      description:
        "Traditional Carving – Detailed craftsmanship inspired by timeless Indian artistry.",
    },
    {
      id: 7,
      image: "images/decorItems/naturalMarbleCreativeDiningTable.jpg",
      title: "Card Title 5",
      description:
        "Luxury natural marble dining table with a creative hand-sculpted stone base.",
    },
    {
      id: 4,
      image: "images/decorItems/solarAbstractOrnament.jpg",
      title: "Card Title 6",
      description:
        "Luxury Indoor Solar Abstract Ornament – Beautifully crafted to create a peaceful and refreshing atmosphere.",
    },
    {
      id: 4,
      image: "images/decorItems/whiteMarbleLampPostDesign.jpg",
      title: "Card Title 7",
      description:
        "Hand-carved white marble lamp post featuring elegant architectural curves and glowing ambient light.",
    },
    {
      id: 4,
      image: "images/decorItems/naturalMarbleSideTable.jpg",
      title: "Card Title 4",
      description:
        "Hand-sculpted natural marble side table showcasing elegant veins and timeless architectural craftsmanship.",
    },
    {
      id: 4,
      image: "images/decorItems/candleWarmer-Lamp.jpeg",
      title: "Card Title 4",
      description:
        "Elegant natural stone candle warmer lamp that melts wax safely with soft, ambient heat.",
    },
    {
      id: 4,
      image: "images/decorItems/IvoryBeigeMatteArtificialStoneOval.jpg",
      title: "Card Title 4",
      description:
        "Smooth ivory beige artificial stone oval basin with a refined matte finish.",
    },
    {
      id: 4,
      image: "images/decorItems/marble candles.jpg",
      title: "Card Title 4",
      description:
        "Hand-carved natural marble candle holder designed for serene, ambient luxury decor.",
    },
  ];
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

        <CommonCard heading={"Handicraft Items"} cardData={cardData} />
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
