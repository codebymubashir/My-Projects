/* =========================================================
   TROVE — Product Data
   Plain JS array of objects (arrays, objects, no fetch/API calls)
   ========================================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Ridge Leather Jacket",
    category: "fashion",
    price: 189,
    oldPrice: 229,
    rating: 5,
    icon: "👗",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=900&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80"
    ],
    desc: "A cropped leather jacket cut from soft full-grain hide, finished with brass hardware. Built to be the one layer you reach for every single week."
  },
  {
    id: 2,
    name: "Meadow Wrap Dress",
    category: "fashion",
    price: 96,
    oldPrice: null,
    rating: 4,
    icon: "👗",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80",
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80"
    ],
    desc: "A floaty midi wrap dress in breathable cotton-linen, with a self-tie waist that shapes to you. Pairs equally well with boots or sandals."
  },
  {
    id: 3,
    name: "Aster Suede Sneakers",
    category: "fashion",
    price: 132,
    oldPrice: 150,
    rating: 5,
    icon: "👟",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=80",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=900&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&q=80"
    ],
    desc: "Retro-run sneakers in brushed suede with a gum sole. Cushioned insole for all-day wear without giving up the vintage silhouette."
  },
  {
    id: 4,
    name: "Denali Denim Jeans",
    category: "fashion",
    price: 78,
    oldPrice: null,
    rating: 4,
    icon: "👖",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=900&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=80"
    ],
    desc: "A wide-leg jean in rigid, non-stretch denim that softens beautifully with wear. High rise, ankle length, finished raw hem."
  },
  {
    id: 5,
    name: "Umbra Sunglasses",
    category: "fashion",
    price: 64,
    oldPrice: null,
    rating: 4,
    icon: "🕶️",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80",
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=900&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=900&q=80"
    ],
    desc: "Acetate frames with polarized lenses that cut glare without dulling colour. Comes with a soft pouch and micro-fibre cloth."
  },
  {
    id: 6,
    name: "Harbor Wool Blazer",
    category: "fashion",
    price: 165,
    oldPrice: 195,
    rating: 5,
    icon: "🧥",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=900&q=80",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=900&q=80"
    ],
    desc: "An unstructured wool-blend blazer that moves like a cardigan but holds its shape like tailoring. One button, notch lapel."
  },

  {
    id: 7,
    name: "Rolling Timber Trainset",
    category: "toys",
    price: 45,
    oldPrice: null,
    rating: 5,
    icon: "🧸",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=900&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80"
    ],
    desc: "A 40-piece wooden trainset with bridges, tunnels, and interlocking track. Sanded smooth and finished with plant-based paint."
  },
  {
    id: 8,
    name: "Cuddle Bear — Oat",
    category: "toys",
    price: 28,
    oldPrice: null,
    rating: 5,
    icon: "🧸",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80",
      "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=900&q=80"
    ],
    desc: "A weighted plush bear in brushed oat-coloured fleece, machine washable and stitched for years of hugging."
  },
  {
    id: 9,
    name: "Stacking Rings Puzzle",
    category: "toys",
    price: 19,
    oldPrice: 24,
    rating: 4,
    icon: "🧩",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80",
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=900&q=80",
      "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=900&q=80"
    ],
    desc: "A colour-graded stacking puzzle in beechwood, designed to build early hand-eye coordination and colour recognition."
  },
  {
    id: 10,
    name: "Rally Die-cast Car Set",
    category: "toys",
    price: 34,
    oldPrice: null,
    rating: 4,
    icon: "🚗",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=900&q=80",
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&q=80",
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=900&q=80"
    ],
    desc: "Five die-cast rally cars with rolling wheels and printed livery detail, packed in a reusable tin case."
  },
  {
    id: 11,
    name: "Beacon Building Blocks",
    category: "toys",
    price: 52,
    oldPrice: null,
    rating: 5,
    icon: "🧱",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80",
      "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=900&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80"
    ],
    desc: "120 interlocking blocks in eight shapes, compatible with most major building-block systems. Stored in a canvas tote."
  },
  {
    id: 12,
    name: "Tinker Robot Kit",
    category: "toys",
    price: 58,
    oldPrice: 68,
    rating: 4,
    icon: "🤖",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&q=80",
      "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=900&q=80",
      "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=900&q=80"
    ],
    desc: "A screwdriver-and-bolts robot kit that snaps together without batteries or apps. Builds problem-solving through play."
  },

  {
    id: 13,
    name: "Solstice Leather Watch",
    category: "accessories",
    price: 145,
    oldPrice: null,
    rating: 5,
    icon: "⌚",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=900&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=900&q=80",
      "https://images.unsplash.com/photo-1495856458515-0637185db551?w=900&q=80"
    ],
    desc: "A minimal 38mm watch with a sapphire-coated face and vegetable-tanned leather strap. Water resistant to 30m."
  },
  {
    id: 14,
    name: "Everyday Tote — Clay",
    category: "accessories",
    price: 88,
    oldPrice: 110,
    rating: 5,
    icon: "👜",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900&q=80",
      "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=900&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80"
    ],
    desc: "A structured canvas tote with a leather base and interior pocket, built to carry a laptop, notebook, and the rest of your day."
  },
  {
    id: 15,
    name: "Chain-link Bracelet Set",
    category: "accessories",
    price: 42,
    oldPrice: null,
    rating: 4,
    icon: "💍",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80"
    ],
    desc: "Three stackable bracelets in brushed gold-tone brass, tarnish-resistant and adjustable to fit most wrists."
  },
  {
    id: 16,
    name: "Paisley Silk Scarf",
    category: "accessories",
    price: 36,
    oldPrice: null,
    rating: 4,
    icon: "🧣",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&q=80",
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=900&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=900&q=80"
    ],
    desc: "A 90cm square scarf in printed mulberry silk with hand-rolled edges. Works as a neck scarf, headband, or bag charm."
  },
  {
    id: 17,
    name: "Field Sunglasses Case",
    category: "accessories",
    price: 22,
    oldPrice: null,
    rating: 4,
    icon: "🕶️",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=900&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=80",
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=900&q=80"
    ],
    desc: "A hard-shell case wrapped in textured vegan leather with a soft felt interior, sized for most sunglasses."
  },
  {
    id: 18,
    name: "Commuter Crossbody Bag",
    category: "accessories",
    price: 74,
    oldPrice: 89,
    rating: 5,
    icon: "👜",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=900&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900&q=80"
    ],
    desc: "A compact crossbody with three zip compartments and an adjustable strap, sized for phone, cards, and keys only."
  }
];

/* Helper lookups used across pages */
function getProductById(id) {
  return PRODUCTS.find(function (p) { return p.id === Number(id); });
}

function getRelatedProducts(product, count) {
  return PRODUCTS.filter(function (p) {
    return p.category === product.category && p.id !== product.id;
  }).slice(0, count);
}

function starString(rating) {
  var full = "★".repeat(rating);
  var empty = "☆".repeat(5 - rating);
  return full + empty;
}

function categoryLabel(cat) {
  var labels = { fashion: "Fashion", toys: "Toys", accessories: "Accessories" };
  return labels[cat] || cat;
}
