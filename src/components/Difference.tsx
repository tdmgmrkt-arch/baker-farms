"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    image: "/images/premiumqualitycuts.webp",
    title: "Premium Quality Cuts",
    desc: "Every cut is hand-selected and dry-aged for 21+ days to ensure exceptional tenderness and flavor that rivals the finest steakhouses.",
  },
  {
    image: "/images/rotationallygrazedpastures.webp",
    title: "Rotational Grazing",
    desc: "Our cattle graze on nutrient-rich, rotationally managed pastures. This regenerative method enriches the soil and produces healthier animals.",
  },
  {
    image: "/images/farmtodoordelivery.webp",
    title: "Farm-to-Door Delivery",
    desc: "Flash-frozen at peak freshness and shipped directly to your door in eco-friendly insulated packaging with dry ice.",
  },
  {
    image: "/images/qualityyoucantrust.webp",
    title: "Quality You Can Trust",
    desc: "USDA inspected, third-party verified, and backed by our 100% satisfaction guarantee. No antibiotics, hormones, or GMOs — ever.",
  },
];

export default function Difference() {
  return (
    <section
      id="difference"
      className="relative overflow-hidden"
    >
      {/* Wood texture background with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url('/images/whychooseusbackground.webp')` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-950/70" />
      {/* Decorative color washes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-barn-red/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-14 sm:py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-golden text-sm font-semibold uppercase tracking-[0.2em] mb-4 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            The Baker Farms Difference
          </h2>
          <div className="w-16 h-1 bg-barn-red mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-12">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-default"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto rounded-full overflow-hidden mb-4 sm:mb-8 ring-1 ring-cream/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>
              <h3 className="font-serif text-base sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {item.title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
