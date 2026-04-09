"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MapPin, Truck, Snowflake, Beef, Bird, Ham, CreditCard, type LucideIcon } from "lucide-react";

type Category = "Beef" | "Chicken" | "Lamb" | "Pork" | "Turkey";

const LambIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 11c0-1.5.5-3 2-4 1.5-1 3-1.5 5-1.5s3.5.5 5 1.5c1.5 1 2 2.5 2 4" />
    <path d="M4 11c0 3 2 5.5 5 6.5V20H7v2h10v-2h-2v-2.5c3-1 5-3.5 5-6.5" />
    <circle cx="9" cy="10" r="0.5" fill="currentColor" />
    <path d="M3 11c0-1 .5-2.5 1-3" />
    <path d="M21 11c0-1-.5-2.5-1-3" />
  </svg>
);

const TurkeyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 18c-3.3 0-6-2-6-5s2.7-5 6-5 6 2 6 5-2.7 5-6 5Z" />
    <path d="M12 8V5" />
    <path d="M10 5.5c0-.8.9-1.5 2-1.5s2 .7 2 1.5" />
    <path d="M9 18v2.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V18" />
    <path d="M13 18v2.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V18" />
  </svg>
);

const categories: { label: Category; icon: LucideIcon | typeof LambIcon | typeof TurkeyIcon }[] = [
  { label: "Beef", icon: Beef },
  { label: "Chicken", icon: Bird },
  { label: "Lamb", icon: LambIcon },
  { label: "Pork", icon: Ham },
  { label: "Turkey", icon: TurkeyIcon },
];

const categoryDescriptions: Record<Category, string | null> = {
  Beef: null,
  Chicken:
    'Humanely raised premium all-natural chicken — no hormones, antibiotics, soy or corn. All cuts are vacuum-sealed and labeled. <strong>Local pickup only.</strong>',
  Lamb: 'Humanely raised with no hormones, antibiotics, soy or corn. All cuts are vacuum-sealed and labeled. <strong>Local pickup only.</strong>',
  Pork: 'seasonal',
  Turkey: 'seasonal',
};

interface Product {
  name: string;
  subtitle: string;
  weight: string;
  price: string;
  deposit: string;
  description: string;
  freezerSpace: string;
  shipping: "shipping" | "pickup" | "both";
  popular?: boolean;
  included: string[];
  category: Category;
  image: string;
  paymentLink: string;
  pickupLink?: string;
  note?: string;
  pickup?: {
    price: string;
    weight: string;
    description: string;
    included: string[];
    note?: string;
  };
}

const products: Product[] = [
  // ── Beef ──
  {
    name: "The Beef Box",
    subtitle: "1/8 Beef",
    weight: "~40 lbs",
    price: "$825",
    deposit: "Full payment at checkout",
    description:
      "Perfect for first time buyers or people who want monthly pasture raised beef without the big freezer commitment.",
    freezerSpace: "1-2 cubic feet",
    shipping: "shipping",
    included: [
      "2 packages Cube Steak or Carne Asada",
      "1 Ribeye Steaks (2 per package)",
      "1 Sirloin Steaks (2 per package)",
      "1 New York Strip Steaks (2 per package)",
      "1 Filet Steaks (2 per package)",
      "2 Chuck Roasts",
      "1 package Short Ribs",
      "2 packages Beef for Stew",
      "15–20 lbs Ground Beef (1 lb packages)",
    ],
    category: "Beef",
    image: "/images/steak2.webp",
    paymentLink: "https://buy.stripe.com/8x214nbXA6uL8SwboufEk08",
    pickupLink: "https://buy.stripe.com/00wcN5bXAdXdecQ0JQfEk0e",
  },
  {
    name: "1/4 Beef",
    subtitle: "Quarter Share",
    weight: "~80 lbs",
    price: "$1,499",
    deposit: "Full payment at checkout",
    description:
      "Great for couples and smaller families who want a great variety of beef to last several months.",
    freezerSpace: "2-4 cubic feet",
    shipping: "shipping",
    popular: true,
    included: [
      "3 packages Cube Steak or Carne Asada",
      "Sirloin Steaks (2 packages, 2 per package)",
      "Ribeye Steaks (2 packages, 2 per package)",
      "New York Strip Steaks (2 packages, 2 per package)",
      "Filet Steaks (2 per package)",
      "3 Chuck Roasts",
      "Sirloin Tip Roast",
      "2 packages Beef for Stew (1 lb each)",
      "35–45 lbs Ground Beef (1 lb packages)",
    ],
    category: "Beef",
    image: "/images/steaks1.webp",
    paymentLink: "https://buy.stripe.com/4gM00j6DgaL19WAgIOfEk0a",
    pickupLink: "https://buy.stripe.com/fZu8wP7Hk06n9WA2RYfEk0f",
  },
  {
    name: "1/2 Beef",
    subtitle: "Half Share",
    weight: "~160 lbs",
    price: "$2,999",
    deposit: "Full payment at checkout",
    description:
      "Ideal for medium to large families. Boneless cuts including steaks, roasts, and ground beef — shipped to your door.",
    freezerSpace: "7-10 cubic feet",
    shipping: "both",
    included: [
      "6 packages Cube Steak or 5 packages Carne Asada",
      "Sirloin Steaks (5 packages, 2 per package)",
      "Ribeye Steaks (5 packages, 2 per package)",
      "New York Strip Steaks (5 packages, 2 per package)",
      "Filet Steaks (3 packages, 2 per package)",
      "1 Rump Roast",
      "6 Chuck Roasts",
      "2 Sirloin Tip Roasts",
      "5 packages Beef for Stew (1 lb each)",
      "60–80 lbs Ground Beef (1 lb packages)",
    ],
    category: "Beef",
    image: "/images/meats.webp",
    paymentLink: "https://buy.stripe.com/4gM00j6DgaL19WAgIOfEk0a",
    pickupLink: "https://buy.stripe.com/eVq14n4v8g5l0m064afEk0i",
    pickup: {
      price: "$3,399",
      weight: "180–220 lbs",
      description:
        "Ideal for medium to large families. Includes all boneless cuts plus bones and organs — picked up fresh at the farm.",
      included: [
        "All primary cuts as steaks",
        "All roasts included",
        "All ground beef",
        "Organs included",
        "Bones cut into small sections for soup and stock",
      ],
      note: "Inquire about custom cuts for pickup.",
    },
  },
  {
    name: "Whole Beef",
    subtitle: "Full Share",
    weight: "360–400 lbs",
    price: "$5,999",
    deposit: "Full payment at checkout",
    description:
      "Best value for group splits or long-term freezer stocking. Splitting allows you to get even more meat for the money.",
    freezerSpace: "14-20 cubic feet",
    shipping: "pickup",
    included: [
      "All primary cuts as steaks",
      "All roasts included",
      "All ground beef",
      "Organs included",
      "Bones cut into small sections for soup and stock",
    ],
    category: "Beef",
    image: "/images/steaks4.webp",
    paymentLink: "https://buy.stripe.com/5kQeVd1iW1argkY9gmfEk0b",
    note: "Inquire about custom cuts for pickup.",
  },
  // ── Chicken ──
  {
    name: "The Bird Box",
    subtitle: "Premium Chicken",
    weight: "~40 lbs",
    price: "$199",
    deposit: "Full payment at checkout",
    description:
      "Perfect for people who want monthly chicken without the big freezer commitment. Humanely raised premium all-natural chicken with no hormones, antibiotics, soy or corn.",
    freezerSpace: "1-2 cubic feet",
    shipping: "pickup",
    included: [
      "20 lbs Boneless Skinless Chicken Thighs",
      "20 lbs Boneless Skinless Chicken Breasts",
    ],
    category: "Chicken",
    image: "/images/chicken.webp",
    paymentLink: "https://buy.stripe.com/00wcN5bXAdXdecQ0JQfEk0e",
  },
  // ── Lamb ──
  {
    name: "Ground Lamb",
    subtitle: "Premium Ground",
    weight: "~20 lbs",
    price: "$199",
    deposit: "Full payment at checkout",
    description:
      "Premium pasture-raised ground lamb, perfect for burgers, meatballs, kebabs, and more. Vacuum-sealed in convenient packages.",
    freezerSpace: "~1 cubic foot",
    shipping: "pickup",
    included: [
      "Approx. 20 lbs Ground Lamb",
      "Vacuum-sealed & labeled",
    ],
    category: "Lamb",
    image: "/images/lamb2.webp",
    paymentLink: "https://buy.stripe.com/aFacN56DgaL1ecQ8cifEk0h",
  },
];

function ProductCard({ product, i }: { product: Product; i: number }) {
  const hasToggle = !!product.pickupLink;
  const [method, setMethod] = useState<"delivery" | "pickup">("delivery");

  // Resolve displayed data based on selected method
  const isPickup = method === "pickup" && product.pickup;
  const displayPrice = isPickup ? product.pickup!.price : product.price;
  const displayWeight = isPickup ? product.pickup!.weight : product.weight;
  const displayNote = isPickup ? product.pickup!.note : product.note;
  const activeLink = method === "pickup" && product.pickupLink ? product.pickupLink : product.paymentLink;
  const isPlaceholder = activeLink === "#";

  return (
    <motion.div
      key={product.name}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      className={`group relative flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-0.5 ${
        product.popular
          ? "border-2 border-[#D4A520] shadow-[0_12px_40px_rgba(212,165,32,0.15)] hover:shadow-[0_20px_50px_rgba(212,165,32,0.25)]"
          : "border border-golden/10 shadow-[0_4px_25px_rgba(92,64,51,0.06)] hover:shadow-[0_16px_45px_rgba(92,64,51,0.14)] hover:border-golden/20"
      }`}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${product.image}')` }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 to-transparent" />
        {product.popular && (
          <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
            <span className="bg-[#D4A520] text-white text-xs font-bold uppercase tracking-wide px-6 py-2 rounded-b-lg shadow-[0_8px_24px_rgba(0,0,0,0.35)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              ★ Most Popular
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-5 sm:pb-5 flex flex-col flex-1">
        {/* Name */}
        <h3 className="font-serif text-lg font-bold text-charcoal text-center">
          {product.name}
        </h3>
        <p className="text-warm-brown/45 text-xs text-center mt-0.5 mb-3">
          {product.subtitle} &bull; {displayWeight}
        </p>

        {/* Price */}
        <div className="text-center mb-3">
          <span className="font-serif text-3xl font-bold text-barn-red leading-none inline-block">
            {displayPrice}
          </span>
          <p className="text-warm-brown/50 text-xs mt-1">
            {product.deposit}
          </p>
        </div>

        {/* Dynamic content — delivery always in flow (taller), pickup overlays */}
        {product.pickup ? (
          <div className="relative flex-1 mb-4">
            {/* Delivery variant — ALWAYS in flow to define container height */}
            <div className={`${method === "delivery" ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-150`}
              aria-hidden={method !== "delivery"}
            >
              <p className="text-warm-brown/55 text-xs text-center leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="space-y-2 mb-4">
                <div className="bg-cream rounded-lg px-3 py-2 text-center border border-golden/10">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <Snowflake className="w-3 h-3 text-barn-red/50" />
                    <span className="text-warm-brown/45 text-[10px] uppercase tracking-wider font-medium">Freezer Space Needed</span>
                  </div>
                  <p className="text-charcoal font-bold text-xs">{product.freezerSpace}</p>
                </div>
              </div>
              <div className="h-px bg-golden/10 mb-4" />
              <h4 className="text-charcoal font-bold text-[10px] uppercase tracking-wider mb-2">What&apos;s Included:</h4>
              <ul className="space-y-1.5">
                {product.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-barn-red mt-0.5 shrink-0" />
                    <span className="text-warm-brown/70 text-xs leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Pickup variant — ALWAYS absolute so it never affects height */}
            <div className={`absolute inset-0 ${method === "pickup" ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-150`}
              aria-hidden={method !== "pickup"}
            >
              <p className="text-warm-brown/55 text-xs text-center leading-relaxed mb-4">
                {product.pickup.description}
              </p>
              <div className="space-y-2 mb-4">
                <div className="bg-cream rounded-lg px-3 py-2 text-center border border-golden/10">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <Snowflake className="w-3 h-3 text-barn-red/50" />
                    <span className="text-warm-brown/45 text-[10px] uppercase tracking-wider font-medium">Freezer Space Needed</span>
                  </div>
                  <p className="text-charcoal font-bold text-xs">{product.freezerSpace}</p>
                </div>
              </div>
              <div className="h-px bg-golden/10 mb-4" />
              <h4 className="text-charcoal font-bold text-[10px] uppercase tracking-wider mb-2">What&apos;s Included:</h4>
              <ul className="space-y-1.5">
                {product.pickup.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-barn-red mt-0.5 shrink-0" />
                    <span className="text-warm-brown/70 text-xs leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <>
            <p className="text-warm-brown/55 text-xs text-center leading-relaxed mb-4">
              {product.description}
            </p>
            <div className="space-y-2 mb-4">
              <div className="bg-cream rounded-lg px-3 py-2 text-center border border-golden/10">
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <Snowflake className="w-3 h-3 text-barn-red/50" />
                  <span className="text-warm-brown/45 text-[10px] uppercase tracking-wider font-medium">Freezer Space Needed</span>
                </div>
                <p className="text-charcoal font-bold text-xs">{product.freezerSpace}</p>
              </div>
            </div>
            <div className="h-px bg-golden/10 mb-4" />
            <div className="mb-4 flex-1">
              <h4 className="text-charcoal font-bold text-[10px] uppercase tracking-wider mb-2">What&apos;s Included:</h4>
              <ul className="space-y-1.5">
                {product.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-barn-red mt-0.5 shrink-0" />
                    <span className="text-warm-brown/70 text-xs leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Note — fixed height slot */}
        <div className="h-5 mb-2 flex items-center justify-center">
          {displayNote && (
            <p className="text-barn-red text-[11px] font-semibold text-center italic">
              {displayNote}
            </p>
          )}
        </div>

        {/* CTA — pinned to bottom */}
        {hasToggle ? (
          <div className="flex flex-col gap-1">
            <div className="relative flex rounded-lg border border-golden/12 bg-cream-dark/25 p-0.75">
              <div
                className={`absolute top-0.75 bottom-0.75 w-[calc(50%-3px)] rounded-md transition-all duration-150 ease-out ${
                  method === "pickup" ? "left-0.75" : "left-[calc(50%)]"
                } bg-[#FFFDF8] shadow-[0_1px_4px_rgba(200,151,62,0.10),inset_0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-golden/18`}
              />
              <button
                onClick={() => setMethod("pickup")}
                className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-[11px] tracking-wide cursor-pointer transition-all duration-150 ${
                  method === "pickup"
                    ? "text-charcoal font-semibold"
                    : "text-warm-brown/45 font-medium hover:text-warm-brown/65 hover:bg-white/50"
                }`}
              >
                <MapPin className={`w-3 h-3 shrink-0 transition-all duration-150 ${method === "pickup" ? "text-golden" : "text-warm-brown/30"}`} />
                Pickup
              </button>
              <button
                onClick={() => setMethod("delivery")}
                className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-[11px] tracking-wide cursor-pointer transition-all duration-150 ${
                  method === "delivery"
                    ? "text-charcoal font-semibold"
                    : "text-warm-brown/45 font-medium hover:text-warm-brown/65 hover:bg-white/50"
                }`}
              >
                <Truck className={`w-3 h-3 shrink-0 transition-all duration-150 ${method === "delivery" ? "text-golden" : "text-warm-brown/30"}`} />
                Delivery
              </button>
            </div>
            <motion.a
              href={activeLink}
              target={isPlaceholder ? undefined : "_blank"}
              rel={isPlaceholder ? undefined : "noopener noreferrer"}
              whileHover={{ scale: 1.015, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-150 text-center block ${
                product.popular
                  ? "bg-[#D4A520] text-white hover:shadow-[0_8px_25px_rgba(212,165,32,0.4)]"
                  : "bg-charcoal text-white hover:bg-barn-red hover:shadow-[0_8px_25px_rgba(139,46,46,0.3)]"
              }`}
            >
              Order Now
            </motion.a>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#FFFDF8] border border-golden/18 shadow-[0_1px_4px_rgba(200,151,62,0.10),inset_0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-golden/18">
              <MapPin className="w-3 h-3 text-golden shrink-0" />
              <span className="text-charcoal text-[11px] font-semibold tracking-wide">
                Local Pickup Only
              </span>
            </div>
            <motion.a
              href={product.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.015, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-150 text-center block ${
                product.popular
                  ? "bg-[#D4A520] text-white hover:shadow-[0_8px_25px_rgba(212,165,32,0.4)]"
                  : "bg-charcoal text-white hover:bg-barn-red hover:shadow-[0_8px_25px_rgba(139,46,46,0.3)]"
              }`}
            >
              Order Now
            </motion.a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>("Beef");
  const filteredProducts = products.filter(
    (p) => p.category === activeCategory
  );
  const description = categoryDescriptions[activeCategory];
  const isSeasonal = description === "seasonal";

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-barn-red text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Shop Our Meats
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
            Premium Pasture-Raised Meats
          </h2>
          <p className="text-warm-brown/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Fill your freezer with the finest grass-fed and finished meats from
            Baker Farms in Winchester, CA. Every cut is vacuum-sealed, labeled,
            and ready to enjoy.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex flex-wrap justify-center bg-white rounded-full p-1.5 shadow-[0_4px_20px_rgba(92,64,51,0.08)] border border-golden/10">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => {
                  setActiveCategory(cat.label);
                }}
                className={`px-4 py-2 sm:px-7 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  activeCategory === cat.label
                    ? "bg-barn-red text-white shadow-[0_6px_20px_rgba(139,46,46,0.3)]"
                    : "text-warm-brown hover:text-charcoal hover:bg-cream-dark/50"
                }`}
              >
                <cat.icon className={`w-4 h-4 ${activeCategory === cat.label ? "text-white" : "text-barn-red/60"}`} />
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category Description (Chicken & Lamb) */}
        <AnimatePresence mode="wait">
          {description && !isSeasonal && (
            <motion.p
              key={activeCategory + "-desc"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center text-warm-brown/70 text-base max-w-2xl mx-auto mb-12 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </AnimatePresence>

        {/* Seasonal Message (Pork & Turkey) */}
        <AnimatePresence mode="wait">
          {isSeasonal && (
            <motion.div
              key={activeCategory + "-seasonal"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-lg mx-auto text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-barn-red/10 flex items-center justify-center mx-auto mb-6">
                {activeCategory === "Pork" ? (
                  <Ham className="w-9 h-9 text-barn-red" />
                ) : (
                  <TurkeyIcon className="w-9 h-9 text-barn-red" />
                )}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                Seasonal {activeCategory}
              </h3>
              <p className="text-warm-brown/70 text-base sm:text-lg leading-relaxed mb-6">
                Ask us about our seasonal, locally and pasture-raised{" "}
                <span className="text-barn-red font-semibold">{activeCategory}</span>.
                Raised with the same standards — no hormones, antibiotics, soy, or corn.
              </p>
              <a
                href="/#order"
                className="inline-flex items-center gap-2 bg-barn-red text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:bg-barn-red-dark hover:shadow-[0_8px_25px_rgba(139,46,46,0.35)]"
              >
                Contact Us to Inquire
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Beef Section Note */}
        <AnimatePresence mode="wait">
          {activeCategory === "Beef" && (
            <motion.p
              key="beef-custom-note"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center text-barn-red font-semibold text-sm mb-8"
            >
              Ask about our Custom Beef Boxes — tailored to your family&apos;s needs.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Product Cards Grid */}
        {!isSeasonal && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`grid gap-5 ${
                filteredProducts.length === 1
                  ? "grid-cols-1 max-w-sm mx-auto"
                  : filteredProducts.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
                  : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
              }`}
            >
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.name} product={product} i={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Disclaimer */}
        {!isSeasonal && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10 space-y-1.5"
          >
            <div className="mx-auto space-y-2.5">
              <div className="bg-white border border-golden/20 rounded-xl px-5 py-3.5 shadow-[0_2px_12px_rgba(92,64,51,0.06)] text-center">
                <p className="text-warm-brown/70 text-sm leading-relaxed">
                  <CreditCard className="w-4 h-4 text-golden inline-block align-text-bottom mr-1.5" />
                  <strong className="text-charcoal">Full payment required at checkout.</strong>{" "}
                  All pricing reflects estimated final yield.
                </p>
              </div>
              <div className="bg-white border border-golden/20 rounded-xl px-5 py-3.5 shadow-[0_2px_12px_rgba(92,64,51,0.06)] text-center">
                <p className="text-warm-brown/70 text-sm leading-relaxed">
                  <Truck className="w-4 h-4 text-golden inline-block align-text-bottom mr-1.5" />
                  The Beef Box, 1/4, and 1/2 shares can be picked up locally or shipped{" "}
                  <strong className="text-charcoal">(shipping calculated at checkout)</strong>.
                  Whole Beef is local pickup only in Winchester, CA.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
