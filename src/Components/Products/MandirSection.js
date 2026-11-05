import React from "react";
import {
  CommonStartInnerSection,
  CommonCard,
  CommonBanner,
  ContactUsCard,
} from "../../commanComponents";

const MandirSection = () => {
  const cardData = [
    {
      id: 1,
      image: "images/mandir_images/mandir-card1.jpeg",
      title: "Card Title 1",
      description:
        "Vietnam Marble Mandir – Elegant design with premium craftsmanship and beautiful finishing.",
    },
    {
      id: 2,
      image: "images/mandir_images/mandir-card2.jpeg",
      title: "Card Title 2",
      description:
        "Marble Mandir – A timeless temple design crafted with elegance and devotion.",
    },
    {
      id: 3,
      image: "images/mandir_images/mandir-card32.jpeg",
      title: "Card Title 3",
      description:
        "Hand Carving – Intricate handmade patterns showcasing traditional artistic skills.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card4.jpeg",
      title: "Card Title 4",
      description:
        "Fine Detailing – Beautiful decorative elements that enhance every design.",
    },
    {
      id: 5,
      image: "images/mandir_images/mandir-card12.jpg",
      title: "Card Title 4",
      description:
        "Premium Finishing – Smooth surfaces with a refined and luxurious appearance.",
    },
    {
      id: 6,
      image: "images/mandir_images/mandir-card14.jpeg",
      title: "Card Title 4",
      description:
        "Traditional Carving – Detailed craftsmanship inspired by timeless Indian artistry.",
    },
    {
      id: 7,
      image: "images/mandir_images/mandir-card16.jpeg",
      title: "Card Title 4",
      description:
        "Luxury Mandir – Beautifully designed to create a peaceful sacred space.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card17.jpeg",
      title: "Card Title 4",
      description:
        "Vietnam Marble – Premium marble known for its elegant appearance and natural beauty.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card18.jpeg",
      title: "Card Title 4",
      description:
        "Custom Mandir – Personalized designs created to match your space and preferences.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card19.jpeg",
      title: "Card Title 4",
      description:
        "Marble Craftsmanship – Expertly crafted designs with attention to every detail.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card20.jpeg",
      title: "Card Title 4",
      description:
        "Handmade Mandir – Carefully crafted with traditional techniques and artistic precision.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card21.jpeg",
      title: "Card Title 4",
      description:
        "Elegant Finishing – Perfectly polished edges and refined detailing.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card23.jpeg",
      title: "Card Title 4",
      description:
        "Luxury Marble Temple – A beautiful combination of carving, detailing, and premium finishing.",
    },
  ];
  const contactCardsData = [
    {
      id: 1,
      image: "images/mandir_images/mandir-card-contectus.png",
      title: "Peacock Design",
      // title: "PEACOCK DESIGN",
      details: "8 ft × 4 ft = 32 sq. ft.",
      className: "card-one",
    },
    {
      id: 2,
      image: "images/mandir_images/mandir-contact-us2.png",
      title: "Pushp Design",

      details: "Customized Artistry",
      className: "card-two",
    },
    {
      id: 3,

      image: "images/mandir_images/mandir-contact-us3.jpeg",
      title: "Palki Sahib",

      details: "Crafted to Your Vision",
      className: "card-three",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-contact-us4.jpeg",
      title: "Flower Peacock Mandir",

      details: "Personalized Creation",
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
          topic="MANDIR"
          description="Discover our exclusive collection of handcrafted Vietnam marble mandirs, crafted with premium-quality marble. Featuring intricate carvings, elegant finishes, and exceptional craftsmanship. Bring timeless beauty, luxury, and divine elegance to your home."
          image="images/mandir_images/mandir-card4.jpeg"
        />

        <CommonCard heading={"Home Marble Mandir"} cardData={cardData} />
        <CommonBanner
          image="images/mandir_images/mandir-card-bg20.png"
          title="Heritage Peacock & Tree of Life Hand-Carved Marble Home Temple"
          description="This hand-carved white marble temple features a central Tree of Life inlay flanked by gold-accented Om panels under glowing backlit arches. Crowned with a majestic dome and twin peacocks, it sits on an ornate storage base with floral carved drawers."
          buttonText="Order Now"
          onButtonClick={handleOrder}
        />
        <ContactUsCard
          contactCardsData={contactCardsData}
          title="Let's Design Your"
          highlightTitle="Dream Marble Mandir"
          description={`Discover beautifully handcrafted marble mandirs,
                        designed with intricate carvings, elegant detailing,<br />
                        and premium craftsmanship to bring divine beauty
                        and timeless elegance <br /> to your home.`}
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

export default MandirSection;
