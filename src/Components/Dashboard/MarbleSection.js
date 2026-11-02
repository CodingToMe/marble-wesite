import { useState } from "react";
import DayaMarbleSlider from "./DayaMarbleSlider";
const washBasin = [
  {
    title: "Luxury Bathroom Vanity",
    img: "images/decorItems/luxuryBathroomVanity.jpg",
   
  },
  {
    title: "Ivory Beige Matte Artificial Stone Oval",
    img: "images/decorItems/IvoryBeigeMatteArtificialStoneOval.jpg",
    
  },
  {
  title: "Lotus Shaped Vessel Basin",
  img: "images/decorItems/lotusShapedVesselBasin.jpg",
   
  },
  {
    title: "Black Wash Besin",
    img: "images/decorItems/blackWashBesin.jpg",
   
  },
];
const marbleTable = [
  {
    title: "Natural Marble Creative Dining Table",
    img: "images/decorItems/naturalMarbleCreativeDiningTable.jpg",
   
  },
  {
    title: "Black  Fluted Stone Pedestal",
    img: "images/decorItems/blackFlutedStonePedestal.jpg",
    
  },
  {
   title: "Marble Cross form Table",
    img: "images/decorItems/marbleCrossformTable.jpg",
   
  },
  {
     title: "Natural Marble Side Table",
    img: "images/decorItems/naturalMarbleSideTable.jpg",
   
  },
];
const marbleLampPots = [
  {
    title: "White Marble Lamp Post Design",
    img: "images/decorItems/whiteMarbleLampPostDesign.jpg",
   
  },
  {
    title: "Sculptural Marble Lamps",
    img: "images/decorItems/bespokeSculpturalLighting.jpg",
    
  },
  {
    title: "Garden Statues",
    img: "images/decorItems/gardenStatues.jpg",
   
  },
  {
    title: "Solar Abstract Ornament",
    img: "images/decorItems/solarAbstractOrnament.jpg",
   
  },
];

const MarbleSection = () => {
  const [activeTab, setActiveTab] = useState("Wash Basin");
  const [activeTabData, setActiveTabData] = useState(washBasin);

  const categories = ["Wash Basin", "Marble Table", "Marble Lamp Pots"];
  const activeTabDataFunc = (category) => {
    setActiveTab(category);
    const tabData = {
      "Marble Lamp Pots": marbleLampPots,
      "Marble Table": marbleTable,
      "Wash Basin": washBasin,
    };

    setActiveTabData(tabData[category] || washBasin);
  };

  return (
    <div className=" daya-marbale-section">
      <div className="text-center">
        <div className="title-section ">
          <h3 style={{ marginBottom: "0px" }}>Premium Marble Creations</h3>
          <img src="images/red-underline.png" alt="line" width={"108px"} />
        </div>
        <ul className="daya-list">
          {categories.map((category, index) => (
            <li
              key={index}
              className={` ${activeTab === category ? "active" : ""}`}
              onClick={() => activeTabDataFunc(category)}
            >
              {category}
              <u></u>
            </li>
          ))}

          {/* <li>Marble Table</li>
          <li>Marble Lamp Pots</li> */}
        </ul>
      </div>
      <DayaMarbleSlider activeTab={activeTab} activeTabData={activeTabData} />
    </div>
  );
};

export default MarbleSection;
