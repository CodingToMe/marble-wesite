import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CarouselSection = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const list = carousel.querySelector(".list");
    const thumbnail = carousel.querySelector(".thumbnail");
    const items = list.querySelectorAll(".item");
    const countItem = items.length;

    let itemActive = 0;
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, 4000);

    function showSlider(type) {
      carousel.classList.remove("next", "prev");
      let itemOld = list.querySelector(".item:nth-child(1)");
      let thumbnailOld = thumbnail?.querySelector(".item:nth-child(1)");

      if (type === "next") {
        list.appendChild(itemOld);
        if (thumbnailOld) thumbnail.appendChild(thumbnailOld);
        carousel.classList.add("next");
        itemActive = (itemActive + 1) % countItem;
      } else {
        let itemLast = list.querySelector(".item:last-child");
        let thumbnailLast = thumbnail?.querySelector(".item:last-child");
        list.prepend(itemLast);
        if (thumbnailLast) thumbnail.prepend(thumbnailLast);
        carousel.classList.add("prev");
        itemActive = (itemActive - 1 + countItem) % countItem;
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove("next", "prev");
      }, 2000);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, 6000);
    }

    nextBtn.onclick = () => showSlider("next");
    prevBtn.onclick = () => showSlider("prev");
  }, []);

  const navigateToRelatedPage = () => {
    navigate("/marble-mandir");
  };

  return (
    <>
      <div className="carousel"  >
        {/* list item */}
        <div className="list">
          <div className="item">
            <img src="images/mandir_images/mandir3.jxl" alt="slide1" />
            <div className="content">
              <div className="author">White Marble Art</div>
              <div className="title">TRADITIONAL DESIGN</div>
              <div className="topic">MANDIR</div>
              <div className="des">
                White marble temple featuring intricate CNC carvings,
                traditional domes, and elegant peacock motifs for luxury home
                interiors.
              </div>
              <div className="buttons">
                <button onClick={navigateToRelatedPage}>SEE MORE</button>
                <button
                
                  onClick={() => (window.location.href = "tel:+916367877532")}
                >
                  CONTACT
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="images/mandir_images/mandirc1.png" alt="slide2" />
            <div className="content">
              <div className="author">White Marble Art</div>
              <div className="title">PUSPH DESIGN</div>
              <div className="topic">MANDIR</div>
              <div className="des">
                Pure white marble temple featuring a carved lotus crown,
                intricate jali arch, and hand-painted floral inlay for
                palace-style luxury homes.
              </div>
              <div className="buttons">
                <button onClick={navigateToRelatedPage}>SEE MORE</button>
                <button
                  onClick={() => (window.location.href = "tel:+916367877532")}
                >
                  CONTACT
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="images/mandir_images/mandirc2.png" alt="slide3" />
            <div className="content">
              <div className="author">White Marble Art</div>
              <div className="title">PEACOCK OM DESIGN</div>
              <div className="topic">MANDIR</div>
              <div className="des">
                White marble temple with fine CNC carvings, hand-painted
                peacocks, and a peacock-feather Om centerpiece for elegant home
                interiors.
              </div>
              <div className="buttons">
                <button onClick={navigateToRelatedPage}>SEE MORE</button>
                <button
                  onClick={() => (window.location.href = "tel:+916367877532")}
                >
                  CONTACT
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="images/mandir_images/mandirc3.png" alt="slide4" />
            <div className="content">
              <div className="author">White Marble Art</div>
              <div className="title">ROYAL MAYUR DESIGN</div>
              <div className="topic">MANDIR</div>
              <div className="des">
                Grand white marble temple with vibrant peacock motifs,
                auspicious swastik panels, and detailed carved drawers for
                luxury living spaces.
              </div>
              <div className="buttons">
                <button onClick={navigateToRelatedPage}>SEE MORE</button>
                <button
                  onClick={() => (window.location.href = "tel:+916367877532")}
                >
                  CONTACT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* arrows */}
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>

        {/* time running */}
        <div className="time" />
      </div>
    </>
  );
};

export default CarouselSection;
