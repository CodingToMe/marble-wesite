import { useState } from "react";
import { CommonCard } from "../../commanComponents";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./SingleProduct.css";

/* ---------- Data (images ko apne paths se replace karein) ---------- */
const GALLERY = [
  "images/mandir_images/mandir-card2.jpeg",
  "images/mandir_images/mandir-card32.jpeg",
  "images/mandir_images/mandir-card4.jpeg",
  "images/mandir_images/mandir-card12.jpg",
];

const SIZES = ["L", "XL", "XS"];
const COLORS = ["#816DFA", "#000000", "#B88E2F"];

 const cardData = [
    {
      id: 1,
      image: "images/mandir_images/mandir-card1.jpeg",
      title: "Card Title 1",
      description:
        "Vietnam Marble Mandir – Elegant design with premium craftsmanship and beautiful finishing.",
    },
    {
      id: 2,
      image: "images/mandir_images/mandir-card2.jpeg",
      title: "Card Title 2",
      description:
        "Marble Mandir – A timeless temple design crafted with elegance and devotion.",
    },
    {
      id: 3,
      image: "images/mandir_images/mandir-card32.jpeg",
      title: "Card Title 3",
      description:
        "Hand Carving – Intricate handmade patterns showcasing traditional artistic skills.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card4.jpeg",
      title: "Card Title 4",
      description:
        "Fine Detailing – Beautiful decorative elements that enhance every design.",
    },
    {
      id: 5,
      image: "images/mandir_images/mandir-card12.jpg",
      title: "Card Title 4",
      description:
        "Premium Finishing – Smooth surfaces with a refined and luxurious appearance.",
    },
    {
      id: 6,
      image: "images/mandir_images/mandir-card14.jpeg",
      title: "Card Title 4",
      description:
        "Traditional Carving – Detailed craftsmanship inspired by timeless Indian artistry.",
    },
    {
      id: 7,
      image: "images/mandir_images/mandir-card16.jpeg",
      title: "Card Title 4",
      description:
        "Luxury Mandir – Beautifully designed to create a peaceful sacred space.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card17.jpeg",
      title: "Card Title 4",
      description:
        "Vietnam Marble – Premium marble known for its elegant appearance and natural beauty.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card18.jpeg",
      title: "Card Title 4",
      description:
        "Custom Mandir – Personalized designs created to match your space and preferences.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card19.jpeg",
      title: "Card Title 4",
      description:
        "Marble Craftsmanship – Expertly crafted designs with attention to every detail.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card20.jpeg",
      title: "Card Title 4",
      description:
        "Handmade Mandir – Carefully crafted with traditional techniques and artistic precision.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card21.jpeg",
      title: "Card Title 4",
      description:
        "Elegant Finishing – Perfectly polished edges and refined detailing.",
    },
    {
      id: 4,
      image: "images/mandir_images/mandir-card23.jpeg",
      title: "Card Title 4",
      description:
        "Luxury Marble Temple – A beautiful combination of carving, detailing, and premium finishing.",
    },
  ];

const TABS = ["Description", "Additional Information", "Reviews [5]"];

/* ---------- Small helpers ---------- */
function Stars({ rating = 4.5 }) {
  return (
    <span className="sp-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const fill =
          rating >= i ? "full" : rating >= i - 0.5 ? "half" : "empty";
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            width="18"
            height="18"
            className={`star ${fill}`}
          >
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#FFC700" />
                <stop offset="50%" stopColor="#D9D9D9" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={
                fill === "full"
                  ? "#FFC700"
                  : fill === "half"
                    ? `url(#half-${i})`
                    : "#D9D9D9"
              }
            />
          </svg>
        );
      })}
    </span>
  );
}

const SocialIcons = {
  whatsapp: {
    icon: <i className="bi bi-whatsapp me-2"></i>,
    url: `https://wa.me`,
  },
  instagram: {
    icon: <i className="bi bi-instagram me-2"></i>,
    url: "https://instagram.com", 
  },
  facebook: {
    icon: <i className="bi bi-facebook me-2"></i>,
    url: "https://facebook.com", // 
  },
};

/* ---------- Main component ---------- */
export default function ProductView() {
  const [activeImg, setActiveImg] = useState(0);
  //   const [size, setSize] = useState("L");
  //   const [color, setColor] = useState(COLORS[2]);
  //   const [qty, setQty] = useState(1);
  const [tab, setTab] = useState(TABS[0]);

  return (
    <div className="sp">
      {/* ===== Top: gallery + details ===== */}
      <section className="container-xl sp-top">
        <div className="row g-4 g-lg-5">
          {/* Gallery */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column-reverse flex-md-row gap-3 gap-md-4">
              <div className="sp-thumbs d-flex flex-row flex-md-column gap-3">
                {GALLERY.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className={`sp-thumb ${i === activeImg ? "active" : ""}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Show image ${i + 1}`}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
              <div className="sp-main-img flex-grow-1">
                <img src={GALLERY[activeImg]} alt="Asgaard sofa" />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="col-12 col-lg-6">
            <h1 className="sp-title">Asgaard sofa</h1>
            {/* <p className="sp-price">Rs. 250,000.00</p> */}

            <div className="d-flex align-items-center gap-3 mb-3">
              <Stars rating={4.5} />
              <span className="sp-divider-v" />
              <span className="sp-muted-sm">5 Customer Review</span>
            </div>

            <p className="sp-short-desc">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <dl className="sp-meta mb-3">
              <div>
                <dt>Sr No</dt>
                <dd>SS001</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>Sofas</dd>
              </div>
              <div>
                <dt>Tags</dt>
                <dd>Sofa, Chair, Home, Shop</dd>
              </div>
              <div>
                <dt>Share</dt>
                <dd className="d-flex gap-3 align-items-center">
                 
                  {Object.entries(SocialIcons).map(([name, item]) => (
                    <a
                      key={name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sp-social"
                      aria-label={name}
                    >
                      {item.icon}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
            {/* <div className="mb-3">
              <div className="sp-label">Size</div>
              <div className="d-flex gap-3">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`sp-size ${size === s ? "active" : ""}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="sp-label">Color</div>
              <div className="d-flex gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`sp-color ${color === c ? "active" : ""}`}
                    style={{ background: c }}
                    onClick={() => setColor(c)}
                    aria-label={`Color ${c}`}
                  />
                ))}
              </div>
            </div> */}

            <div
              className="d-flex flex-wrap gap-3 pb-5 sp-actions "
              style={{ marginTop: "60px" }}
            >
              {/* <div className="sp-qty">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">-</button>
                <span>{qty}</span>
                <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
              </div> */}
              <div className="d-flex gap-3 flex-wrap justify-content-center">
                <button
                  className="btn btn-primary-orange"
                  onClick={() => (window.location.href = "tel:+916367877532")}
                >
                  Order Now <i className="bi bi-arrow-right ms-2"></i>
                </button>

                <button
                  className="btn orange-btn-outline"
                  onClick={() =>
                    window.open("https://wa.me/916367877532", "_blank")
                  }
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Chat With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Related products ===== */}
                  <hr/>
      <CommonCard heading={"Related Product"} cardData={cardData}/>
    
    </div>
  );
}
