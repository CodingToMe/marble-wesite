import React, { useState } from "react";

const CommonCard = ({ heading ,cardData}) => {
 


  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleShowLess = () => {
    setVisibleCount(8);
  };

  return (
    // <div className="container">
    //   <div className="row g-4">
    //     {cardData.map((card) => (
    //       <div className="col-6 col-md-3" key={card.id}>
    //         <div className="card marble-card h-100">
    //           <img src={card.image} className="card-img-top" alt={card.title} />
    //           <div className="card-overlay">
    //             <p>{card.description}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
     <div className="container comman-card-section">
        <div className="title-section ">
            <h3>{heading}</h3>
            <img src="images/red-underline.png" alt="line" width={"175px"} />
          </div>
      <div className="row g-4">
        {cardData.slice(0, visibleCount).map((card) => (
          <div className="col-6 col-md-3" key={card.id}>
            <div className="card marble-card h-100">
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
              />

              <div className="card-overlay">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        {visibleCount < cardData.length && (
          <button className="btn btn-dark px-4" onClick={handleShowMore}>
            Show More
          </button>
        )}

        {visibleCount > 8 && (
          <button className="btn btn-outline-dark px-4 ms-2" onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>
    </div>
  
  );
};

export default CommonCard;
