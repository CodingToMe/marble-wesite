import React from "react";

const CollectionSection = () => {
  const collectionData = [
    {
      id: 1,
      name: "Candle Warmer Lamp",
      image: "images/decorItems/others/candleWarmer-Lamp.jpeg",
    },
    {
      id: 2,
      name: "Mini Lotus Water Fountain",
      image: "images/decorItems/fountains/minilotusWaterFountain.jpeg",
    },
    {
      id: 3,
      name: "Indoor Water Fountain",
       image: "images/decorItems/fountains/IndoorWarterFountain.jpeg",
    },
    {
      id: 4,
      name: "Bathroom Accessories",
      image: "images/decorItems/homeOfficeDecor/bathroomAccessories.jpeg",
    },
    {
      id: 5,
      name: "Aesthetic Outdoor Tulsi Planter",
      image: "images/decorItems/flowerPotsVases/aestheticOutdoorTulsiPlanter3.png",
    },
    {
      id: 6,
      name: "12 Elegant Flower Vase",
      image: "images/decorItems/flowerPotsVases/12ElegantFlowerVaseStyling.jpg",
    },
    //  {
    //   id: 7,
    //   name: "Traditional Candle Holder",
    //   image: "images/decorItems/others/traditionalCandleholder.jpeg",
    // },
    // {
    //   id: 8,
    //   name: "Inlay Platter Tray",
    //   image: "images/decorItems/kitchenwareDining/InlayPlatterTray.jpeg",
    // },
    // {
    //   id: 9,
    //   name: "Outdoor Lamp",
    //   image: "images/decorItems/kitchenwareDining/Outdoor Lamp.jpeg",
    // },  
  ];
  return (  
     
    <section className="zigzag-gallery">
  {collectionData.map((item) => (
    <div className="gallery-card" key={item.id}>
      <img src={item.image} alt={item.name} />

      <div className="gallery-overlay">
        <h3>{item.name}</h3>
      </div>
    </div>
  ))}
</section>
    
  );
};

export default CollectionSection;
