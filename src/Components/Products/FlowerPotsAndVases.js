import React from "react";
import {
  CommonStartInnerSection,
  CommonCard,
  CommonBanner,
  ContactUsCard,
} from "../../commanComponents";

const FlowerPotsAndVases = () => {
  const cardData = [
    {
      id: 1,
      image:
        "images/decorItems/flowerPotsVases/aestheticOutdoorTulsiPlanter.jpg",
      title: "Card Title 1",
      description:
        "Aesthetic Outdoor Tulsi Planter – Traditional elegance with beautiful craftsmanship for your sacred outdoor spaces.",
    },
    {
      id: 2,
      image:
        "images/decorItems/flowerPotsVases/Luxury Black Marble Flower Pots.jpg",
      title: "Card Title 2",
      description:
        "Luxury Black Marble Flower Pots – Elegant designs with premium craftsmanship, adding a sophisticated touch to your indoor and outdoor spaces.",
    },
    {
      id: 3,
      image: "images/decorItems/flowerPotsVases/Tulsi port.jpeg",
      title: "Card Title 3",
      description:
        "Handcrafted Marble Tulsi Pot – Traditional Beauty, Elegant Sacred Design.",
    },
    {
      id: 4,
      image: "images/decorItems/flowerPotsVases/tulsi1.jpg",
      title: "Card Title 4",
      description: " Tulsi – Elegant Traditional Marble Tulsi Planter.",
    },
    {
      id: 5,
      image: "images/decorItems/flowerPotsVases/flowerPotsVases.jpg",
      title: "Card Title 4",
      description:
        "Premium Finishing – Smooth surfaces with a refined and luxurious appearance.",
    },
    {
      id: 6,
      image: "images/decorItems/flowerPotsVases/Table Centerpiece.jpg",
      title: "Card Title 4",
      description:
        "Luxury Marble Table Centerpiece – Elegant Craftsmanship for Sophisticated Table Decor.",
    },
    {
      id: 7,
      image: "images/decorItems/flowerPotsVases/Blumenvase.jpg",
      title: "Card Title 5",
      description:
        "Classic Marble Blumen vase – Blending traditional artistry with elegant architectural designs.",
    },
    {
      id: 4,
      image: "images/decorItems/flowerPotsVases/premium Marble Flower.jpg",
      title: "Card Title 6",
      description:
        "Luxury Indoor premium Marble Flower pot – Beautifully crafted to create a peaceful and refreshing atmosphere.",
    },
  ];
  const contactCardsData = [
    {
      id: 1,
      image:
        "images/decorItems/flowerPotsVases/Blumenvase.jpg",
      title: "Blumen Vase",
      // title: "PEACOCK DESIGN",
      details: "Custom",
      className: "card-one",
    },
    {
      id: 2,
     image: "images/decorItems/flowerPotsVases/Table Centerpiece.jpg",
      title: "Table Centerpiece ",

      details: "Custom",
      className: "card-two",
    },
    {
      id: 3,

      image:
        "images/decorItems/flowerPotsVases/Fancy Carrara Marble Accents.jpg",
      title: "Fancy Carrara",

      details: "Custom",
      className: "card-three",
    },
    {
      id: 4,
      image:
        "images/decorItems/flowerPotsVases/flowervase.jpeg",
      title: "flower Vase",

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
          title="Traditional Marble"
          topic="Flower Pots And Vases"
          description="Beautifully handcrafted marble flower vases featuring traditional designs, intricate carvings, and premium finishing to add timeless elegance to your interiors."
          image="images/decorItems/flowerPotsVases/12ElegantFlowerVaseStyling.jpg"
        />

        <CommonCard heading={"Flower Pots And Vases"} cardData={cardData} />
        <CommonBanner
          image="images/decorItems/flowerPotsVases/tulsipot2.png"
          title="Hand-Carved White Marble Tulsi Vrindavan Planter"
          description="Hand-carved from pure white Makrana marble, this traditional outdoor Tulsi Vrindavan planter features intricate architectural pillar carvings, detailed relief patterns, and a elevated square basin for sacred festive worship."
          buttonText="Order Now"
          onButtonClick={handleOrder}
        />
        <ContactUsCard
          contactCardsData={contactCardsData}
          title="Let's Design Your"
          highlightTitle="Marble Flower Pots "
          description={`
            Discover beautifully handcrafted marble flower pots with elegant designs and intricate detailing.Perfect for adding timeless charm and luxury to your indoor and outdoor spaces.`}
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

export default FlowerPotsAndVases;
