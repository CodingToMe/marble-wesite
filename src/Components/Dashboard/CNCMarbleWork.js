import React, { useState } from "react";

const CNCMarbleSection = () => {
  const cardsData = [
    {
      id: 1,
      img: "https://picsum.photos/id/1015/400/300",
      title: "Elegant Marble Design",
      desc: "High precision CNC engraving for luxury interiors.",
      heading:"Wooden Work",
      heading_desc:"High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors."
    },
    {
      id: 2,
      img: "https://picsum.photos/id/1016/400/300",
      title: "CNC Wall Art",
      desc: "Custom CNC cut marble patterns for modern homes.",
      heading:"Stone Work",
      heading_desc:"High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors."
    },
    {
      id: 3,
      img: "https://picsum.photos/id/1018/400/300",
      title: "3D Marble Texture",
      desc: "Beautiful 3D CNC designs carved in premium marble.",
      heading:"Bros Work",
      heading_desc:"High precision CNC engraving for luxury interiors. High precision CNC engraving for luxury interiors."
    },
  ];

  // ✅ Fix: initialize 4 columns (not 3)
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0, 0]);

  const handleCardClick = (colIndex, cardIndex) => {
    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[colIndex] = cardIndex;
      return newIndexes;
    });
  };
  
  // ✅ Handle "Next" button click
  const handleNextClick = (e, colIndex) => {
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
        {[0, 1, 2, 3].map((col) => (
          <div key={col} className="col-md-6">
            <div style={{margin: "40px 0px 71px 65px"}}>
            <h4 className="sub-heading">Wooden Work </h4>
            <p>Explore our exclusive collection of design templates crafted by top designers worldwide.</p>  
            </div>
            <ul className="cards">
              {cardsData.map((card, index) => {
                const currentIndex = currentIndexes[col];
                const isCurrent = index === currentIndex;
                const isNext = index === (currentIndex + 1) % cardsData.length;
                const isOut = !isCurrent && !isNext;

                let cardClass = "card";
                if (isCurrent) cardClass += " card--current";
                else if (isNext) cardClass += " card--next";
                else if (isOut) cardClass += " card--out";

                return (
                  <li
                    key={`${col}-${card.id}`}
                    className={cardClass}
                    style={{ height: "330px", cursor: "pointer" }}
                    onClick={(e) => handleNextClick(e, col)}
                  >
                    <img className="card-image" src={card.img} alt={card.title} />
                    <div className="info">
                      <h3>{card.title}</h3>
                      <p className="text-white">{card.desc}</p>
                      <button className="btn btn-danger-gradient" 
                      onClick={() => handleCardClick(col, index)}
                      >
                        View More <i class="fa fa-arrow-right ms-1" aria-hidden="true"></i> 
                        
                        </button>
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
