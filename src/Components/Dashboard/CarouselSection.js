import React, { useEffect } from "react";

const CarouselSection = () => {
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

  return (
    <>
      <div className="carousel">
        {/* list item */}
        <div className="list">
          <div className="item">
            <img src="images/img1.jpg" alt="slide1" />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat...
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="images/img2.jpg" alt="slide2" />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat...
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="images/img3.jpg" alt="slide3" />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat...
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="images/img4.jpg" alt="slide4" />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat...
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
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
