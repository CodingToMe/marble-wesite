const productOptions = [
  { value: "marble-mandir", label: "Marble Mandir" },
  { value: "fountain", label: "Marble Fountain" },
  { value: "home-decor", label: "Home Decor" },
  { value: "tulsi-pot", label: "Tulsi Pot" },
  { value: "marble-slab", label: "Marble Slab" },
  { value: "kitchenware-dining", label: "Kitchenware & Dining" },
  { value: "candle-warmer-lamp", label: "Candle Warmer Lamp" },
];
const estimatedPrice = [
  { value: "1-2-lakh", label: "₹1 – ₹2 Lakh" },
  { value: "2-3-lakh", label: "₹2 – ₹3 Lakh" },
  { value: "3-5-lakh", label: "₹3 – ₹5 Lakh" },
  { value: "5-10-lakh", label: "₹5 – ₹10 Lakh" },
  { value: "10-15-lakh", label: "₹10 – ₹15 Lakh" },
  { value: "15-20-lakh", label: "₹15 – ₹20 Lakh" },
  { value: "20-25-lakh", label: "₹20 – ₹25 Lakh" },
  { value: "above-25-lakh", label: "Above ₹25 Lakh" },
];
/* ---------------- MANDIR ---------------- */
export const mandirProducts = [
  {
    id: "MND-001",
    category: "Mandir",
    slug: "marble-mandir",
    title: "Vietnam Marble Mandir",
    description:
      "Vietnam Marble Mandir – Elegant design with premium craftsmanship and beautiful finishing.",
    image: "images/mandir_images/mandir-card1.jpeg",
    images: [
      "images/mandir_images/mandir-card1.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-002",
    category: "Mandir",
    title: "Marble Mandir",
    slug: "marble-mandir",
    description:
      "Marble Mandir – A timeless temple design crafted with elegance and devotion.",
    image: "images/mandir_images/mandir-card2.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card2.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-003",
    category: "Mandir",
    title: "Hand Carved Mandir",
    slug: "marble-mandir",
    description:
      "Hand Carving – Intricate handmade patterns showcasing traditional artistic skills.",
    image: "images/mandir_images/mandir-card32.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card32.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-004",
    category: "Mandir",
    title: "Fine Detailing Mandir",
    slug: "marble-mandir",
    description:
      "Fine Detailing – Beautiful decorative elements that enhance every design.",
    image: "images/mandir_images/mandir-card4.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card4.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-005",
    category: "Mandir",
    title: "Premium Finish Mandir",
    slug: "marble-mandir",
    description:
      "Premium Finishing – Smooth surfaces with a refined and luxurious appearance.",
    image: "images/mandir_images/mandir-card12.jpg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card12.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-006",
    category: "Mandir",
    title: "Traditional Carving Mandir",
    slug: "marble-mandir",
    description:
      "Traditional Carving – Detailed craftsmanship inspired by timeless Indian artistry.",
    image: "images/mandir_images/mandir-card14.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card14.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-007",
    category: "Mandir",
    title: "Luxury Mandir",
    slug: "marble-mandir",
    description:
      "Luxury Mandir – Beautifully designed to create a peaceful sacred space.",
    image: "images/mandir_images/mandir-card16.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card16.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-008",
    category: "Mandir",
    title: "Vietnam Marble Temple",
    slug: "marble-mandir",
    description:
      "Vietnam Marble – Premium marble known for its elegant appearance and natural beauty.",
    image: "images/mandir_images/mandir-card17.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card17.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-009",
    category: "Mandir",
    title: "Custom Mandir",
    slug: "marble-mandir",
    description:
      "Custom Mandir – Personalized designs created to match your space and preferences.",
    image: "images/mandir_images/mandir-card18.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card18.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-010",
    category: "Mandir",
    title: "Marble Craftsmanship Mandir",
    slug: "marble-mandir",
    description:
      "Marble Craftsmanship – Expertly crafted designs with attention to every detail.",
    image: "images/mandir_images/mandir-card19.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card19.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-011",
    category: "Mandir",
    title: "Handmade Mandir",
    slug: "marble-mandir",
    description:
      "Handmade Mandir – Carefully crafted with traditional techniques and artistic precision.",
    image: "images/mandir_images/mandir-card20.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card20.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-012",
    category: "Mandir",
    title: "Elegant Finish Mandir",
    slug: "marble-mandir",
    description:
      "Elegant Finishing – Perfectly polished edges and refined detailing.",
    image: "images/mandir_images/mandir-card21.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card21.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
  {
    id: "MND-013",
    category: "Mandir",
    title: "Luxury Marble Temple",
    slug: "marble-mandir",
    description:
      "Luxury Marble Temple – A beautiful combination of carving, detailing, and premium finishing.",
    image: "images/mandir_images/mandir-card23.jpeg", // card wali main image (same)
    images: [
      "images/mandir_images/mandir-card23.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Mandir", "Marble", "Home"],
  },
];

/* ---------------- FOUNTAINS ---------------- */
export const fountainProducts = [
  {
    id: "FNT-001",
    category: "Fountain",
    title: "Marble Fountain",
    slug: "fountain",
    description:
      "Beautifully crafted with elegant designs and exceptional finishing.",
    image: "images/decorItems/fountains/marbleFountain7.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/marbleFountain7.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-002",
    category: "Fountain",
    title: "Luxury Garden Fountain",
    slug: "fountain",
    description:
      "Luxury Garden Fountain – Designed with intricate carvings to enhance your outdoor spaces.",
    image: "images/decorItems/fountains/marbleFountain8.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/marbleFountain8.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-003",
    category: "Fountain",
    title: "Elegant Marble Water Fountain",
    slug: "fountain",
    description:
      "Elegant Marble Water Fountain – A perfect combination of artistic craftsmanship and timeless beauty.",
    image: "images/decorItems/fountains/marbleFountain9.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/marbleFountain9.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-004",
    category: "Fountain",
    title: "Handcrafted Marble Fountain",
    slug: "fountain",
    description:
      "Handcrafted Marble Fountain – Featuring detailed patterns, premium quality and luxurious appeal.",
    image:
      "images/decorItems/fountains/Modern Outdoor Fountain Resin Outdoor Garden Fountains.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/Modern Outdoor Fountain Resin Outdoor Garden Fountains.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-005",
    category: "Fountain",
    title: "Versailles Garden Pond Fountain",
    slug: "fountain",
    description:
      "Premium Finishing – Smooth surfaces with a refined and luxurious appearance.",
    image: "images/decorItems/fountains/Versailles Garden Pond Fountain.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/Versailles Garden Pond Fountain.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-006",
    category: "Fountain",
    title: "Luxury LED Wall Fountain",
    slug: "fountain",
    description:
      "Wall Fountain -Traditional Carving – Detailed craftsmanship inspired by timeless Indian artistry.",
    image: "images/decorItems/fountains/Luxury LED Garden Water Fountain.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/Luxury LED Garden Water Fountain.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-007",
    category: "Fountain",
    title: "Classic Marble Fountain",
    slug: "fountain",
    description:
      "Classic Marble Fountain – Blending traditional artistry with elegant architectural designs.",
    image: "images/decorItems/fountains/marbleFountain4.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/marbleFountain4.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-008",
    category: "Fountain",
    title: "Luxury Indoor Fountain",
    slug: "fountain",
    description:
      "Luxury Indoor Fountain – Beautifully crafted to create a peaceful and refreshing atmosphere.",
    image: "images/decorItems/fountains/IndoorWarterFountain.jpeg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/IndoorWarterFountain.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-009",
    category: "Fountain",
    title: "Mini Lotus Water Fountain",
    slug: "fountain",
    description:
      "Premium Marble Fountain – Expertly crafted with artistic detailing and timeless elegance.",
    image: "images/decorItems/fountains/minilotusWaterFountain.jpeg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/minilotusWaterFountain.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-010",
    category: "Fountain",
    title: "Flower Pot Fountain",
    slug: "fountain",
    description:
      "Artistic Vietnam Mandir – Expertly carved with beautiful patterns and exceptional craftsmanship.",
    image: "images/decorItems/fountains/flowerPortfountain.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/flowerPortfountain.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-011",
    category: "Fountain",
    slug: "fountain",
    title: "Robbiana Wall Outdoor Fountain",
    description:
      "Classic Marble Fountain – Blending traditional artistry with elegant architectural designs.",
    image:
      "images/decorItems/fountains/Robbiana Wall Outdoor Water Fountain.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/Robbiana Wall Outdoor Water Fountain.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-012",
    category: "Fountain",
    title: "Sculptural Indoor Fountain",
    slug: "fountain",
    description:
      "Elegant Finishing – Perfectly polished edges and refined detailing.",
    image:
      "images/decorItems/fountains/Sculptural Indoor Fountain with Ambient Lighting.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/Sculptural Indoor Fountain with Ambient Lighting.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
  {
    id: "FNT-013",
    category: "Fountain",
    title: "Vietnam White Marble Fountain",
    slug: "fountain",
    description:
      "Vietnam White Marble Mandir – A symbol of purity, devotion and timeless craftsmanship.",
    image: "images/decorItems/fountains/marbleFountain6.jpg", // card wali main image (same)
    images: [
      "images/decorItems/fountains/marbleFountain6.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Fountain", "Marble", "Home"],
  },
];

/* ---------------- FLOWER POTS & VASES ---------------- */
export const flowerPotProducts = [
  {
    id: "FPV-001",
    category: "Flower Pots & Vases",
    title: "Aesthetic Outdoor Tulsi Planter",
    slug: "flower-pot-vases",
    description:
      "Aesthetic Outdoor Tulsi Planter – Traditional elegance with beautiful craftsmanship for your sacred outdoor spaces.",
    image: "images/decorItems/flowerPotsVases/aestheticOutdoorTulsiPlanter.jpg", // card wali main image (same)
    images: [
      "images/decorItems/flowerPotsVases/aestheticOutdoorTulsiPlanter.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Flower Pots & Vases", "Marble", "Home"],
  },
  {
    id: "FPV-002",
    category: "Flower Pots & Vases",
    title: "Luxury Black Marble Flower Pots",
    slug: "flower-pot-vases",
    description:
      "Luxury Black Marble Flower Pots – Elegant designs with premium craftsmanship, adding a sophisticated touch to your indoor and outdoor spaces.",
    image:
      "images/decorItems/flowerPotsVases/Luxury Black Marble Flower Pots.jpg", // card wali main image (same)
    images: [
      "images/decorItems/flowerPotsVases/Luxury Black Marble Flower Pots.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Flower Pots & Vases", "Marble", "Home"],
  },
  {
    id: "FPV-003",
    category: "Flower Pots & Vases",
    title: "Handcrafted Marble Tulsi Pot",
    slug: "flower-pot-vases",
    description:
      "Handcrafted Marble Tulsi Pot – Traditional Beauty, Elegant Sacred Design.",
    image: "images/decorItems/flowerPotsVases/Tulsi port.jpeg", // card wali main image (same)
    images: [
      "images/decorItems/flowerPotsVases/Tulsi port.jpeg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Flower Pots & Vases", "Marble", "Home"],
  },
  {
    id: "FPV-004",
    category: "Flower Pots & Vases",
    title: "Marble Tulsi Planter",
    slug: "flower-pot-vases",
    description: "Tulsi – Elegant Traditional Marble Tulsi Planter.",
    image: "images/decorItems/flowerPotsVases/tulsi1.jpg", // card wali main image (same)
    images: [
      "images/decorItems/flowerPotsVases/tulsi1.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Flower Pots & Vases", "Marble", "Home"],
  },
  {
    id: "FPV-005",
    category: "Flower Pots & Vases",
    title: "Premium Flower Pot",
    slug: "flower-pot-vases",
    description:
      "Premium Finishing – Smooth surfaces with a refined and luxurious appearance.",
    image: "images/decorItems/flowerPotsVases/flowerPotsVases.jpg", // card wali main image (same)
    images: [
      "images/decorItems/flowerPotsVases/flowerPotsVases.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Flower Pots & Vases", "Marble", "Home"],
  },
  {
    id: "FPV-006",
    category: "Flower Pots & Vases",
    title: "Marble Table Centerpiece",
    slug: "flower-pot-vases",
    description:
      "Luxury Marble Table Centerpiece – Elegant Craftsmanship for Sophisticated Table Decor.",
    image: "images/decorItems/flowerPotsVases/Table Centerpiece.jpg", // card wali main image (same)
    images: [
      "images/decorItems/flowerPotsVases/Table Centerpiece.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Flower Pots & Vases", "Marble", "Home"],
  },
  {
    id: "FPV-007",
    category: "Flower Pots & Vases",
    title: "Classic Marble Blumen Vase",
    slug: "flower-pot-vases",
    description:
      "Classic Marble Blumen vase – Blending traditional artistry with elegant architectural designs.",
    image: "images/decorItems/flowerPotsVases/Blumenvase.jpg", // card wali main image (same)
    images: [
      "images/decorItems/flowerPotsVases/Blumenvase.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Flower Pots & Vases", "Marble", "Home"],
  },
  {
    id: "FPV-008",
    category: "Flower Pots & Vases",
    title: "Premium Marble Flower Pot",
    slug: "flower-pot-vases",
    description:
      "Luxury Indoor premium Marble Flower pot – Beautifully crafted to create a peaceful and refreshing atmosphere.",
    image: "images/decorItems/flowerPotsVases/premium Marble Flower.jpg", // card wali main image (same)
    images: [
      "images/decorItems/flowerPotsVases/premium Marble Flower.jpg", // main view
      // "extra view 2 yahan",
      // "extra view 3 yahan",
      // "extra view 4 yahan",
    ],
    rating: 4.5,
    reviewCount: 5,
    tags: ["Flower Pots & Vases", "Marble", "Home"],
  },
];
export const homeOfficeDecor = [
  {
    id: "HOD-001",
    category: "Handcraft",
    title: "Premium Marble Bathroom Accessories",
    slug: "home-office-decore",
    description:
      "Beautifully crafted marble bathroom accessories with elegant designs and exceptional finishing.",
    image: "images/decorItems/bathroomAccessories.jpeg",
    images: ["images/decorItems/bathroomAccessories.jpeg"],
    tags: ["Bathroom Accessories", "Marble", "Home"],
  },
  {
    id: "HOD-002",
    category: "Handcraft",
    title: "Bespoke Sculptural Lighting",
    slug: "home-office-decore",

    description:
      "Hand-carved stone floor lamp featuring a spiraling flame design with warm internal illumination, creating a luxurious centerpiece.",
    image: "images/decorItems/bespokeSculpturalLighting.jpg",
    images: ["images/decorItems/bespokeSculpturalLighting.jpg"],
    tags: ["Sculptural Lighting", "Marble", "Luxury Decor"],
  },
  {
    id: "HOD-003",
    category: "Handcraft",
    title: "Black Fluted Stone Pedestal",
    slug: "home-office-decore",
    description:
      "Hand-carved black fluted stone pedestal designed for displaying luxury home decor and decorative art.",
    image: "images/decorItems/blackFlutedStonePedestal.jpg",
    images: ["images/decorItems/blackFlutedStonePedestal.jpg"],
    tags: ["Stone Pedestal", "Black Marble", "Home Decor"],
  },
  {
    id: "HOD-004",
    category: "Handcraft",
    title: "Luxury Black Marble Washbasin",
    slug: "home-office-decore",
    description:
      "Hand-carved black natural stone washbasin with a sleek matte finish and timeless elegance.",
    image: "images/decorItems/blackWashBesin.jpg",
    images: ["images/decorItems/blackWashBesin.jpg"],
    tags: ["Washbasin", "Black Marble", "Bathroom"],
  },
  {
    id: "HOD-005",
    category: "Handcraft",
    title: "Lotus Shaped Marble Vessel Basin",
    slug: "home-office-decore",
    description:
      "Artisan natural stone vessel basin, hand-carved into a beautiful blooming lotus shape.",
    image: "images/decorItems/lotusShapedVesselBasin.jpg",
    images: ["images/decorItems/lotusShapedVesselBasin.jpg"],
    tags: ["Lotus Basin", "Marble", "Bathroom Decor"],
  },
  {
    id: "HOD-006",
    category: "Handcraft",
    title: "Traditional Marble Garden Statues",
    slug: "home-office-decore",
    description:
      "Traditional marble carving with detailed craftsmanship inspired by timeless Indian artistry.",
    image: "images/decorItems/gardenStatues.jpg",
    images: ["images/decorItems/gardenStatues.jpg"],
    tags: ["Garden Statues", "Marble", "Outdoor Decor"],
  },
  {
    id: "HOD-007",
    category: "Handcraft",
    title: "Natural Marble Dining Table",
    slug: "home-office-decore",
    description:
      "Luxury natural marble dining table with a creative hand-sculpted stone base for elegant dining spaces.",
    image: "images/decorItems/naturalMarbleCreativeDiningTable.jpg",
    images: ["images/decorItems/naturalMarbleCreativeDiningTable.jpg"],
    tags: ["Dining Table", "Natural Marble", "Furniture"],
  },
  {
    id: "HOD-008",
    category: "Handcraft",
    title: "Indoor Solar Abstract Ornament",
    slug: "home-office-decore",
    description:
      "Luxury indoor solar abstract ornament, beautifully crafted to create a peaceful and refreshing atmosphere.",
    image: "images/decorItems/solarAbstractOrnament.jpg",
    images: ["images/decorItems/solarAbstractOrnament.jpg"],
    tags: ["Abstract Ornament", "Marble", "Home Decor"],
  },
  {
    id: "HOD-009",
    category: "Handcraft",
    title: "White Marble Lamp Post",
    slug: "home-office-decore",
    description:
      "Hand-carved white marble lamp post featuring elegant architectural curves and glowing ambient light.",
    image: "images/decorItems/whiteMarbleLampPostDesign.jpg",
    images: ["images/decorItems/whiteMarbleLampPostDesign.jpg"],
    tags: ["Lamp Post", "White Marble", "Lighting"],
  },
  {
    id: "HOD-010",
    category: "Handcraft",
    title: "Natural Marble Side Table",
    slug: "home-office-decore",
    description:
      "Hand-sculpted natural marble side table showcasing elegant veins and timeless architectural craftsmanship.",
    image: "images/decorItems/naturalMarbleSideTable.jpg",
    images: ["images/decorItems/naturalMarbleSideTable.jpg"],
    tags: ["Side Table", "Natural Marble", "Furniture"],
  },
  {
    id: "HOD-011",
    category: "Handcraft",
    title: "Luxury Marble Candle Warmer Lamp",
    slug: "home-office-decore",
    description:
      "Elegant natural stone candle warmer lamp that melts wax safely with soft, ambient heat.",
    image: "images/decorItems/candleWarmer-Lamp.jpeg",
    images: ["images/decorItems/candleWarmer-Lamp.jpeg"],
    tags: ["Candle Warmer", "Marble", "Lighting"],
  },
  {
    id: "HOD-012",
    category: "Handcraft",
    title: "Ivory Beige Matte Oval Basin",
    slug: "home-office-decore",
    description:
      "Smooth ivory beige artificial stone oval basin with a refined matte finish for modern bathrooms.",
    image: "images/decorItems/IvoryBeigeMatteArtificialStoneOval.jpg",
    images: ["images/decorItems/IvoryBeigeMatteArtificialStoneOval.jpg"],
    tags: ["Oval Basin", "Artificial Stone", "Bathroom"],
  },
  {
    id: "HOD-013",
    category: "Handcraft",
    title: "Handcrafted Marble Candle Holder",
    slug: "home-office-decore",
    description:
      "Hand-carved natural marble candle holder designed to create a serene and luxurious home atmosphere.",
    image: "images/decorItems/marble candles.jpg",
    images: ["images/decorItems/marble candles.jpg"],
    tags: ["Candle Holder", "Natural Marble", "Home Decor"],
  },
];
const MandirInnerOrderData = {
  id: "MT-001",
  category: "Marble Mandir",
  title: "Heritage Peacock & Tree of Life Hand-Carved Marble Home Temple",
  slug: "marble-mandir",
  description:
    "This hand-carved white marble temple features a central Tree of Life inlay flanked by gold-accented Om panels under glowing backlit arches. Crowned with a majestic dome and twin peacocks, it sits on an ornate storage base with floral carved drawers.",
  image: "images/mandir_images/mandir-card-bg20.png",
  images: ["images/mandir_images/mandir-card-bg20.png"],
  rating: 4.5,
  reviewCount: 5,
  tags: ["Marble Mandir", "White Marble", "Handcrafted", "Home Temple"],
};

export { productOptions, estimatedPrice, MandirInnerOrderData };
