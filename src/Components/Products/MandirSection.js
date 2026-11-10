import React from "react";
import {
  CommonStartInnerSection,
  CommonCard,
  CommonBanner,
  ContactUsCard,
} from "../../commanComponents";
import {MandirInnerOrderData, mandirProducts} from '../../View/constantData'
import { useNavigate } from "react-router-dom";

const MandirSection = () => {
  const navigate =useNavigate()
  
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
  const navigateFuc =(data)=>{
    localStorage.setItem("orderData", JSON.stringify(data));
    navigate(`/product/${data.slug}`);
  }

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

        <CommonCard heading={"Home Marble Mandir"} cardData={mandirProducts} navigateFuc={navigateFuc}/>
        <CommonBanner
          image={MandirInnerOrderData?.image}
          title={MandirInnerOrderData?.title}
          description={MandirInnerOrderData?.description}
          buttonText="Order Now"
          onButtonClick={handleOrder}
          data={MandirInnerOrderData}
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
