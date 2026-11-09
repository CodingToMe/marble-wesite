import React from "react";
import {
  CommonStartInnerSection,
  CommonCard,
  CommonBanner,
  ContactUsCard,
} from "../../commanComponents";
import { fountainProducts } from "../../View/constantData";
import { useNavigate } from "react-router-dom";

const Fountain = () => {
  const navigate = useNavigate();
  const contactCardsData = [
    {
      id: 1,
      image:
        "images/decorItems/fountains/Modern Outdoor Fountain Resin Outdoor Garden Fountains.jpg",
      title: "Garden Fountain",
      // title: "PEACOCK DESIGN",
      details: "6 ft × 4 ft = 24 sq. ft.",
      className: "card-one",
    },
    {
      id: 2,
      image: "images/decorItems/fountains/Lotus Whisper Marble Fountain.jpg",
      title: "Lotus Whisper",

      details: "Custom",
      className: "card-two",
    },
    {
      id: 3,

      image:
        "images/decorItems/fountains/Marble Fountain Styles for Your Garden.jpg",
      title: "Marble Fountain",

      details: "Crafted to Your Vision",
      className: "card-three",
    },
    {
      id: 4,
      image:
        "images/decorItems/fountains/Charming Small Courtyard Fountain Ideas.jpg",
      title: "Courtyard Fountain",

      details: "Customization",
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
          title="Premium Marble"
          topic="Fountain"
          description="Discover our exclusive collection of premium marble fountains, beautifully crafted with intricate carvings, elegant designs, and superior finishing. Perfect for gardens, homes, and luxurious spaces, bringing timeless beauty and a peaceful atmosphere to your surroundings."
          image="images/decorItems/fountains/marbleFountain1.jpg"
        />

        <CommonCard
          heading={"Marble Fountains"}
          cardData={fountainProducts}
          navigateFuc={navigateFuc}
        />
        <CommonBanner
          image="images/decorItems/fountains/marbleFountainBg1.png"
          title="Hand-Carved Marble Wall Water Fountain featuring Majestic Horse Reliefs."
          description="This magnificent, hand-carved marble wall water fountain is a breathtaking centerpiece, featuring detailed reliefs of strong horses. A powerful standing horse is centrally located above a multi-tiered cascading fountain, while two pairs of rearing horses adorn the side pillars."
          buttonText="Order Now"
          onButtonClick={handleOrder}
        />
        <ContactUsCard
          contactCardsData={contactCardsData}
          title="Let's Design Your"
          highlightTitle="Dream Marble Fountain"
          description={`
            Custom-crafted from natural marble, our bespoke fountains feature hand-carved relief sculptures and multi-tiered cascading basins tailored to your space. Designed for lasting durability and soothing ambiance, each piece brings timeless luxury to any garden or entryway.`}
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

export default Fountain;
