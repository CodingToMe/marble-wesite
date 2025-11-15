import { useEffect } from "react";

const CNCTool = () => {
 
  const images = [
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1011/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1032/300/300",
    "https://picsum.photos/id/1041/300/300",
    "https://picsum.photos/id/1020/300/300",
  ];

  return (
    <div className="container py-5 cnc-section">
      <div className="row ">
        {/* LEFT SIDE */}
        <div className="col-md-5 mb-4 mt-4">
          <div className='title-section '>
            <h3 style={{marginBottom:"0px"}}>CNC Tools</h3>
            <img src="images/red-underline.png" alt="line" width={"105px"} />
          </div>

          <div className="d-flex flex-wrap gap-4 mb-3 mt-5">
            {["CNC Machine Tools", "Turning Tools Holder", "Onex Cutting Tools", "CNC Plasma Cutters "].map(
              (item, idx) => (
                <button key={idx} className="btn btn-outline-danger rounded-pill px-3">
                  {item}
                </button>
              )
            )}
          </div>

          <button className="btn btn-danger px-4 py-2 mb-3 mt-4">
            View More →
          </button>

          <p className="text-muted small">
            Bringing nature’s finest tones to your homes with engraved marble
            artwork.
          </p>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="col-md-7">
          <div className="row g-3">
            {images.map((img, i) => (
              <div className="col-6 col-md-4" key={i}>
                <div className="tilt-card shadow-sm">
                  <img
                    src={img}
                    alt={`marble-${i}`}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNCTool;
