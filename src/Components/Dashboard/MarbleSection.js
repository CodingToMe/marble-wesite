import { useState } from "react";
import DayaMarbleSlider from "./DayaMarbleSlider";
const blackGraniteData = [
  {
    title: "Shanxi Black",
    img: "images/marble_slab/granite/shanxiBlack.jpg",
   
  },
  {
    title: "Nero Marquina",
    img: "images/marble_slab/granite/neroMarquina.jpg",
    
  },
  {
  title: "River Black Granite",
    img: "images/marble_slab/granite/riverBlackGranite.jpg",
   
  },
  {
    title: "New York Stone",
    img: "images/marble_slab/granite/newYorkStone.jpg",
   
  },
];
const whiteMarbleData = [
  {
    title: "Vaitnam White Marble",
    img: "images/marble_slab/whiteMarble/vaitnamWhitemarble.jpg",
   
  },
  {
    title: "Plain White Italian Marble",
    img: "images/marble_slab/whiteMarble/plainWhiteItalianMarble.jpg",
    
  },
  {
   title: "Makrana White Marble",
    img: "images/marble_slab/whiteMarble/makranaWhiteMarble.jpg",
   
  },
  {
     title: "Albeta White Marble",
    img: "images/marble_slab/whiteMarble/albetaWhiteMarble.jpg",
   
  },
];
const greyItalianData = [
  {
    title: "Gray italin Marble",
    img: "images/marble_slab/grayMarble/grayitalinmarble.jpg",
   
  },
  {
    title: "Gray White Light Marble",
    img: "images/marble_slab/grayMarble/grayWhiteLightColorMarble.jpg",
    
  },
  {
    title: "Silver Grey Italian Marble",
    img: "images/marble_slab/grayMarble/silverGreyItalianMarble.jpg",
   
  },
  {
    title: "Tundra Grey Marble",
    img: "images/marble_slab/grayMarble/tundraGreyMarble.jpg",
   
  },
];

const MarbleSection = () => {
  const [activeTab, setActiveTab] = useState("Black Granite");
  const [activeTabData, setActiveTabData] = useState(blackGraniteData);

  const categories = ["Black Granite", "White Makrana Marble", "Grey Italian Marble"];
  const activeTabDataFunc = (category) => {
    setActiveTab(category);
    const tabData = {
      "Grey Italian Marble": greyItalianData,
      "White Makrana Marble": whiteMarbleData,
      "Black Granite": blackGraniteData,
    };

    setActiveTabData(tabData[category] || blackGraniteData);
  };

  return (
    <div className=" daya-marbale-section">
      <div className="text-center">
        <div className="title-section ">
          <h3 style={{ marginBottom: "0px" }}>Marble Slabs</h3>
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

          {/* <li>White Makrana Marble</li>
          <li>Grey Italian Marble</li> */}
        </ul>
      </div>
      <DayaMarbleSlider activeTab={activeTab} activeTabData={activeTabData} />
    </div>
  );
};

export default MarbleSection;
