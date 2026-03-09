"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MapPin, Truck, Snowflake, Beef, Bird, type LucideIcon } from "lucide-react";

type Category = "Beef" | "Chicken" | "Lamb";

const LambIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 11c0-1.5.5-3 2-4 1.5-1 3-1.5 5-1.5s3.5.5 5 1.5c1.5 1 2 2.5 2 4" />
    <path d="M4 11c0 3 2 5.5 5 6.5V20H7v2h10v-2h-2v-2.5c3-1 5-3.5 5-6.5" />
    <circle cx="9" cy="10" r="0.5" fill="currentColor" />
    <path d="M3 11c0-1 .5-2.5 1-3" />
    <path d="M21 11c0-1-.5-2.5-1-3" />
  </svg>
);

const categories: { label: Category; icon: LucideIcon | typeof LambIcon }[] = [
  { label: "Beef", icon: Beef },
  { label: "Chicken", icon: Bird },
  { label: "Lamb", icon: LambIcon },
];

const categoryDescriptions: Record<Category, string | null> = {
  Beef: null,
  Chicken:
    'Humanely raised premium all-natural chicken — no hormones, antibiotics, soy or corn. All cuts are vacuum-sealed and labeled. <strong>Local pickup only.</strong>',
  Lamb: 'Humanely raised with no hormones, antibiotics, soy or corn. All cuts are vacuum-sealed and labeled. <strong>Local pickup only.</strong>',
};

interface Product {
  name: string;
  subtitle: string;
  weight: string;
  price: string;
  deposit: string;
  description: string;
  freezerSpace: string;
  shipping: "shipping" | "pickup";
  popular?: boolean;
  included: string[];
  category: Category;
  image: string;
}

const products: Product[] = [
  // ── Beef ──
  {
    name: "Baker Beef Box",
    subtitle: "1/8 Beef",
    weight: "~40 lbs",
    price: "$825",
    deposit: "50% deposit to reserve",
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
  },
  {
    name: "1/4 Beef",
    subtitle: "Quarter Share",
    weight: "~80 lbs",
    price: "$1,450",
    deposit: "50% deposit to reserve",
    description:
      "Great for couples and smaller families who want a great variety of beef to last several months.",
    freezerSpace: "2-4 cubic feet",
    shipping: "shipping",
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
  },
  {
    name: "1/2 Beef",
    subtitle: "Half Share",
    weight: "~160 lbs",
    price: "$2,750",
    deposit: "50% deposit to reserve",
    description:
      "Ideal for medium to large sized families who do a lot of cooking and want bulk savings.",
    freezerSpace: "5-7 cubic feet",
    shipping: "shipping",
    popular: true,
    included: [
      "6 packages Cube Steak or 5 packages Carne Asada",
      "Sirloin Steaks (5 packages, 2 per package)",
      "Ribeye Steaks (5 packages, 2 per package)",
      "New York Strip Steaks (5 packages, 2 per package)",
      "Filet Steaks (3 packages, 2 per package)",
      "Rump Roast",
      "6 Chuck Roasts",
      "2 Sirloin Tip Roasts",
      "5 packages Beef for Stew (1 lb each)",
      "60–80 lbs Ground Beef (1 lb packages)",
    ],
    category: "Beef",
    image: "/images/meats.webp",
  },
  {
    name: "Whole Beef",
    subtitle: "Full Share",
    weight: "~360 lbs",
    price: "$5,000",
    deposit: "50% deposit to reserve",
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
  },
  // ── Chicken ──
  {
    name: "Baker Bird Box",
    subtitle: "Premium Chicken",
    weight: "~40 lbs",
    price: "$189",
    deposit: "50% deposit to reserve",
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
  },
  // ── Lamb ──
  {
    name: "1/2 Lamb",
    subtitle: "Half Share",
    weight: "~25 lbs",
    price: "$375",
    deposit: "50% deposit to reserve",
    description:
      "Perfect for couples and small families with a variety of premium cuts.",
    freezerSpace: "~1 cubic foot",
    shipping: "pickup",
    included: [
      "Ground Lamb",
      "Leg of Lamb",
      "Lamb Chops",
      "Loin Chops",
      "Lamb Rack",
      "Roasts",
      "Shank & More",
    ],
    category: "Lamb",
    image: "/images/lamb1.webp",
  },
  {
    name: "Whole Lamb",
    subtitle: "Full Share",
    weight: "~50 lbs",
    price: "$700",
    deposit: "50% deposit to reserve",
    description:
      "Ideal for bigger families or meal preppers who want premium meat on hand.",
    freezerSpace: "~2 cubic feet",
    shipping: "pickup",
    included: [
      "Ground Lamb",
      "Leg of Lamb",
      "Lamb Chops",
      "Loin Chops",
      "Lamb Rack",
      "Roasts",
      "Shanks & More",
    ],
    category: "Lamb",
    image: "/images/lamb2.webp",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>("Beef");
  const filteredProducts = products.filter(
    (p) => p.category === activeCategory
  );
  const description = categoryDescriptions[activeCategory];

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
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-[0_4px_20px_rgba(92,64,51,0.08)] border border-golden/10">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => {
                  setActiveCategory(cat.label);

                }}
                className={`px-5 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
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
          {description && (
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

        {/* Product Cards Grid */}
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
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`group relative flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                  product.popular
                    ? "border-2 border-barn-red shadow-[0_12px_40px_rgba(139,46,46,0.15)] hover:shadow-[0_20px_50px_rgba(139,46,46,0.2)]"
                    : "border border-golden/10 shadow-[0_4px_25px_rgba(92,64,51,0.06)] hover:shadow-[0_12px_40px_rgba(92,64,51,0.12)] hover:border-golden/20"
                }`}
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-barn-red text-white text-xs font-bold px-5 py-1.5 rounded-b-xl shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 sm:h-36 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="px-5 pt-4 pb-5 sm:pb-5 flex flex-col flex-1">
                  {/* Name */}
                  <h3 className="font-serif text-lg font-bold text-charcoal text-center">
                    {product.name}
                  </h3>
                  <p className="text-warm-brown/45 text-xs text-center mt-0.5 mb-3">
                    {product.subtitle} &bull; {product.weight}
                  </p>

                  {/* Price + Deposit Block */}
                  <div className="text-center mb-3">
                    <span className="font-serif text-3xl font-bold text-barn-red leading-none">
                      {product.price}
                    </span>
                    <p className="text-warm-brown/50 text-xs mt-1">
                      {product.deposit}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-warm-brown/55 text-xs text-center leading-relaxed mb-4 min-h-16">
                    {product.description}
                  </p>

                  {/* Freezer Space + Shipping */}
                  <div className="space-y-2 mb-4">
                    <div className="bg-cream rounded-lg px-3 py-2 text-center border border-golden/10">
                      <div className="flex items-center justify-center gap-1.5 mb-0.5">
                        <Snowflake className="w-3 h-3 text-barn-red/50" />
                        <span className="text-warm-brown/45 text-[10px] uppercase tracking-wider font-medium">
                          Freezer Space Needed
                        </span>
                      </div>
                      <p className="text-charcoal font-bold text-xs">
                        {product.freezerSpace}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-1.5">
                      {product.shipping === "shipping" ? (
                        <>
                          <Truck className="w-3 h-3 text-golden" />
                          <span className="text-golden text-[11px] font-medium">
                            Shipping Available
                          </span>
                        </>
                      ) : (
                        <>
                          <MapPin className="w-3 h-3 text-warm-brown/40" />
                          <span className="text-warm-brown/40 text-[11px] font-medium">
                            Local Pickup Only
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-golden/10 mb-4" />

                  {/* What's Included */}
                  <div className="mb-4 flex-1">
                    <h4 className="text-charcoal font-bold text-[10px] uppercase tracking-wider mb-2">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-1.5">
                      {product.included.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <Check className="w-3.5 h-3.5 text-barn-red mt-0.5 shrink-0" />
                          <span className="text-warm-brown/70 text-xs leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                      product.popular
                        ? "bg-barn-red text-white hover:bg-barn-red-dark hover:shadow-[0_8px_25px_rgba(139,46,46,0.35)]"
                        : "bg-charcoal text-white hover:bg-barn-red hover:shadow-[0_6px_20px_rgba(139,46,46,0.25)]"
                    }`}
                  >
                    Reserve Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 space-y-1.5"
        >
          <p className="text-warm-brown/60 text-sm">
            <strong className="text-charcoal">
              50% deposit required to reserve.
            </strong>{" "}
            Final weight and pricing confirmed at processing.
          </p>
          <p className="text-warm-brown/40 text-xs">
            The Baker Beef Box, 1/4 and 1/2 shares can be shipped. Whole share
            is local pickup only in Winchester, CA.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
