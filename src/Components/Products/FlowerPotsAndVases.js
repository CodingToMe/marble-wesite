import React from "react";
import {
  CommonStartInnerSection,
  CommonCard,
  CommonBanner,
  ContactUsCard,
} from "../../commanComponents";
import { flowerPotProducts } from "../../View/constantData";
import { useNavigate } from "react-router-dom";

const FlowerPotsAndVases = () => {
 const navigate =useNavigate()
  const contactCardsData = [
    {
      id: 1,
      image: "images/decorItems/flowerPotsVases/Blumenvase.jpg",
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
      image: "images/decorItems/flowerPotsVases/flowervase.jpeg",
      title: "flower Vase",

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
          title="Traditional Marble"
          topic="Flower Pots And Vases"
          description="Beautifully handcrafted marble flower vases featuring traditional designs, intricate carvings, and premium finishing to add timeless elegance to your interiors."
          image="images/decorItems/flowerPotsVases/12ElegantFlowerVaseStyling.jpg"
        />

        <CommonCard
          heading={"Flower Pots And Vases"}
          cardData={flowerPotProducts}
          navigateFuc={navigateFuc}
        />
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
