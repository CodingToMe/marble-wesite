import React from "react";
import {
  CommonStartInnerSection,
  CommonCard,
  CommonBanner,
  ContactUsCard,
} from "../../commanComponents";
import { fountainProducts } from "../../View/constantData";

const Fountain = () => {
  const cardData = [
    {
      id: 1,
      image: "images/decorItems/fountains/marbleFountain7.jpg",
      title: "Card Title 1",
      description:
        "Beautifully crafted with elegant designs and exceptional finishing.",
    },
    {
      id: 2,
      image: "images/decorItems/fountains/marbleFountain8.jpg",
      title: "Card Title 2",
      description:
        "Luxury Garden Fountain – Designed with intricate carvings to enhance your outdoor spaces.",
    },
    {
      id: 3,
      image: "images/decorItems/fountains/marbleFountain9.jpg",
      title: "Card Title 3",
      description:
        "Elegant Marble Water Fountain – A perfect combination of artistic craftsmanship and timeless beauty.",
    },
    {
      id: 4,
      image: "images/decorItems/fountains/Modern Outdoor Fountain Resin Outdoor Garden Fountains.jpg",
      title: "Card Title 4",
      description:
        "Handcrafted Marble Fountain – Featuring detailed patterns, premium quality and luxurious appeal."
    },
    {
      id: 5,
      image: "images/decorItems/fountains/Versailles Garden Pond Fountain.jpg",
      title: "Card Title 4",
      description:
        "Premium Finishing – Smooth surfaces with a refined and luxurious appearance.",
    },
    {
      id: 6,
      image: "images/decorItems/fountains/Luxury LED Garden Water Fountain.jpg",
      title: "Card Title 4",
      description:
        "Wall Fountain -Traditional Carving – Detailed craftsmanship inspired by timeless Indian artistry.",
    },
    {
      id: 7,
      image: "images/decorItems/fountains/marbleFountain4.jpg",
      title: "Card Title 5",
      description:
        "Classic Marble Fountain – Blending traditional artistry with elegant architectural designs.",
    },
    {
      id: 4,
      image: "images/decorItems/fountains/IndoorWarterFountain.jpeg",
      title: "Card Title 6",
      description:
        "Luxury Indoor Fountain – Beautifully crafted to create a peaceful and refreshing atmosphere.",
    },
    {
      id: 4,
      image: "images/decorItems/fountains/minilotusWaterFountain.jpeg",
      title: "Card Title 7",
      description:
        "Premium Marble Fountain – Expertly crafted with artistic detailing and timeless elegance.",
    },
    {
      id: 4,
      image: "images/decorItems/fountains/flowerPortfountain.jpg",
      title: "Card Title 4",
      description:
        "Artistic Vietnam Mandir – Expertly carved with beautiful patterns and exceptional craftsmanship.",
    },
    {
      id: 4,
      image: "images/decorItems/fountains/Robbiana Wall Outdoor Water Fountain.jpg",
      title: "Card Title 4",
      description:
        "Classic Marble Fountain – Blending traditional artistry with elegant architectural designs.",
    },
    {
      id: 4,
      image: "images/decorItems/fountains/Sculptural Indoor Fountain with Ambient Lighting.jpg",
      title: "Card Title 4",
      description:
        "Elegant Finishing – Perfectly polished edges and refined detailing.",
    },
    {
      id: 4,
      image: "images/decorItems/fountains/marbleFountain6.jpg",
      title: "Card Title 4",
      description:
        "Vietnam White Marble Mandir – A symbol of purity, devotion and timeless craftsmanship.",
    },
  ];
  const contactCardsData = [
    {
      id: 1,
      image: "images/decorItems/fountains/Modern Outdoor Fountain Resin Outdoor Garden Fountains.jpg",
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

      image: "images/decorItems/fountains/Marble Fountain Styles for Your Garden.jpg",
      title: "Marble Fountain",

      details: "Crafted to Your Vision",
      className: "card-three",
    },
    {
      id: 4,
      image: "images/decorItems/fountains/Charming Small Courtyard Fountain Ideas.jpg",
      title: "Courtyard Fountain",

      details: "Customization",
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
          title="Premium Marble"
          topic="Fountain"
          description="Discover our exclusive collection of premium marble fountains, beautifully crafted with intricate carvings, elegant designs, and superior finishing. Perfect for gardens, homes, and luxurious spaces, bringing timeless beauty and a peaceful atmosphere to your surroundings."
          image="images/decorItems/fountains/marbleFountain1.jpg"
        />

        <CommonCard heading={"Marble Fountains"} cardData={fountainProducts} />
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
