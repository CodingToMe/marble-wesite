import React from "react";
import { Footer, Header } from "../commanComponents";
import {
  Cards,
  CarouselSection,
  CNCMarbleWork,
  CollectionSection,
  ContectUsSection,
  MarbleSection,
} from "../Components/Dashboard";
import CNCTool from "../Components/Dashboard/CNCTool";
import YouTubeCarousel from "../Components/Dashboard/YouTubeCarousel";

const RootPage = () => {
  return (
    <>
      <Header />
      <CarouselSection />
      <div className="container  rootpage mt-4">
        <div className="a1-section mt-4 text-center">
          <div className="title-section ">
            <h3>Home Marble Mandir</h3>
            <img src="images/red-underline.png" alt="line" width={"175px"} />
          </div>
          <p className="paragraph-section">
            A meticulously crafted Home Marble Mandir featuring an elegant
            peacock design, carved from pristine white marble with intricate
            carvings inspired by Makrana craftsmanship. It serves as a luxurious
            and peaceful spiritual centerpiece for modern home interiors.
          </p>
        </div>
        <Cards />
      </div>

      {/* Marble Section */}
      <MarbleSection />
      {/* Modern Marble Architecture & Decor  */}
      <div className="container  rootpage">
        <div className="a1-section mt-4 text-center">
          <div className="title-section ">
            <h3>Modern Marble Architecture & Decor</h3>
            <img src="images/red-underline.png" alt="line" width={"175px"} />
          </div>
          <p className="paragraph-section">
            Explore our exclusive collection of marble fountains, flower pots,
            vases, home & office decor, and kitchenware. Beautifully handcrafted
            with modern designs, premium quality, and custom-made options to
            match your style.
          </p>
        </div>
        <CNCMarbleWork />
      </div>

      {/* CNC tool section */}
      {/* <div className=" daya-marbale-section">
        <CNCTool />
      </div> */}
      {/* Collection Section */}
      <div className=" rootpage">
        <div className=" collectionSection ">
          <div className="a1-section mt-4 text-center">
            <div className="title-section ">
              <h3>Beautiful Collections</h3>
              <img src="images/red-underline.png" alt="line" width={"175px"} />
            </div>
          </div>

          <CollectionSection />
        </div>
      </div>
      <div className=" rootpage">
        <div className="contactUsSection  ">
          <div className="a1-section mt-4 text-center">
            <ContectUsSection/>
          </div>
        </div>
      </div>

      {/* youtube section */}
      {/* <div className=" youtube-section">
        <YouTubeCarousel />
      </div> */}
      <>
        <Footer />
      </>
    </>
  );
};

export default RootPage;
