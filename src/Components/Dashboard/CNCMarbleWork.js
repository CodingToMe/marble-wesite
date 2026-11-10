import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CNCMarbleSection = () => {
  const navigate =useNavigate()
  const marbleDecorData = [
    {
      slug:"marble_fountain",
      heading: "Marble Fountain",
      pera: "Elegant marble fountains crafted to bring beauty, luxury, and a peaceful atmosphere to your spaces. Custom designs available.",
      data: [
        {
          id: 1,
          img: "images/decorItems/fountains/gardanFountain.jpg",
          title: "Garden Fountain",
          desc: "Elegant Marble Fountains for Beautiful Gardens.",
          heading: "Marble Fountain",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
        {
          id: 2,
          img: "images/decorItems/fountains/wallBlackfountain.jpg",
          title: "Wall Fountain",
          desc: "Elegant Black Marble Wall Fountains.",
          heading: "Stone Work",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
        {
          id: 3,
          img: "images/decorItems/fountains/flowerPortfountain.jpg",
          title: "Flower Port Fountain",
          desc: "Beautiful 3D CNC designs carved in premium marble.",
          heading: "Bros Work",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
      ],
    },
    {
      slug:"flower_pots",
      heading: "Flower Pots & Vases",
      pera: "Beautifully handcrafted marble pots and vases that add a touch of elegance to your home and garden.",
      data: [
        {
          id: 1,
              img: "images/decorItems/flowerPotsVases/flowerPotsVases.jpg",
          title: "Elegant Marble Design",
          desc: "Beautifully Crafted Marble Flower Pots and Decorative Vases.",
          heading: "Marble Fountain",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
        {
          id: 2,
          img: "images/decorItems/flowerPotsVases/whiteAndBrownLivingRoom.jpg",
          title: "White And Brown Flower Pots",
          desc: "Custom CNC cut marble patterns for modern homes.",
          heading: "Stone Work",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
        {
          id: 3,
          img: "images/decorItems/flowerPotsVases/12ElegantFlowerVaseStyling.jpg",
          title: "12 Elegant Flower Vase Styling",
          desc: "12 Beautifully Crafted Marble Flower Vases for Elegant Spaces.",
          heading: "Bros Work",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
      ],
    },
    {
      slug:"home_office_decor",
      heading: "Home & Office Decor",
      pera: "Premium marble decor pieces designed to enhance your interiors with timeless beauty and modern style.",
      data: [
        {
          id: 1,
          img: "images/decorItems/homeOfficeDecor/marbleBrassInlayDeskOrganizerSet.jpg",
          title: "Elegant Marble and Brass Inlay Desk Organizer Set.",
          desc: "High precision CNC engraving for luxury interiors.",
          heading: "Marble Fountain",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
        {
          id: 2,
          img: "images/decorItems/homeOfficeDecor/marbleAccentBowl.jpg",
          title: "Marble Accent Bowl",
          desc: "Elegant Marble Accent Bowls for Stylish Interiors.",
          heading: "Stone Work",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
        {
          id: 3,
          img: "images/decorItems/homeOfficeDecor/whiteMarbleLedTray.jpg",
          title: "White Marble Led Tray",
          desc: "Elegant White Marble LED Tray for Modern Decor.",
          heading: "Bros Work",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
      ],
    },
    {
      slug:"home_office_decor",
      heading: "Kitchenware & Dining",
      pera: "Stylish and durable marble kitchenware and dining accessories, perfect for adding luxury to everyday living.",
      data: [
        {
          id: 1,
          img: "images/decorItems/kitchenwareDining/rollingBoardRollingPin.jpg",
          title: "Rolling Board Rolling Pin",
          desc: "Premium Marble Rolling Board and Rolling Pin Set.",
          heading: "Marble Fountain",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
        {
          id: 2,
          img: "images/decorItems/kitchenwareDining/mortarAndPestle.jpg",
          title: "Mortar And Pestle",
          desc: "Elegant Marble Mortar and Pestle for Everyday Use.",
          heading: "Stone Work",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
        {
          id: 3,
          img: "images/decorItems/kitchenwareDining/marbleCutleryHolder.jpg",
          title: "Marble Cutlery Holder",
          desc: "Elegant Marble Cutlery Holder for Stylish Dining.",
          heading: "Bros Work",
          heading_desc:
            "High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors.",
        },
      ],
    },
  ];

  // ✅ Fix: initialize 4 columns (not 3)
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0, 0]);

const handleCardClick = (data, cardIndex) => {
  const filterSlug = data.slug;

  switch (filterSlug) {
    case "home_office_decor":
      navigate("/home-office-decor");
      break;

    case "marble_fountain":
      navigate("/fountain");
      break;

    case "flower_pots":
      navigate("/flower-pots");
      break;

    default:
      navigate("/");
  }
};

  // ✅ Handle "Next" button click
  const handleNextClick = (e, colIndex,cardsData) => {
    e.stopPropagation(); // prevent parent click
    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      const nextIndex = (prev[colIndex] + 1) % cardsData.length;
      newIndexes[colIndex] = nextIndex;
      return newIndexes;
    });
  };

  return (
    <section className="CNC-marble-section container">
      <div className="row">
        {marbleDecorData.map((data, col) => (
          <div key={col} className="col-md-6">
            <div  className="content-box">
              <h4 className="sub-heading" onClick={() => handleCardClick(data)}>{data?.heading}</h4>
              <p>{data?.pera}</p>
            </div>
            <ul className="cards">
              {data?.data?.map((card, index) => {
                const currentIndex = currentIndexes[col];
                const isCurrent = index === currentIndex;
                const isNext = index === (currentIndex + 1) % data?.data.length;
                const isOut = !isCurrent && !isNext;

                let cardClass = "card";
                if (isCurrent) cardClass += " card--current";
                else if (isNext) cardClass += " card--next";
                else if (isOut) cardClass += " card--out";

                return (
                  <li
                    key={`${col}-${card.id}`}
                    className={cardClass}
                    style={{ height: "330px", cursor: "pointer" ,width:"80%"}}
                    onClick={(e) => handleNextClick(e, col,data?.data)}
                  >
                    
                    <img
                      className="card-image"
                      src={card.img}
                      alt={card.title}
                    />
                    <div className="info">
                      <h3>{card.title}</h3>
                      <p className="text-white">{card.desc}</p>
                      {/* <button
                        className="btn btn-danger-gradient"
                        onClick={() => handleCardClick(data, index)}
                      >
                        View More{" "}
                        <i
                          class="fa fa-arrow-right ms-1"
                          aria-hidden="true"
                        ></i>
                      </button> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CNCMarbleSection;
