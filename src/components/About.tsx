"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const highlights = [
  "Family owned and operated for years",
  "100% grass-fed and pasture-raised livestock",
  "No antibiotics, hormones, soy, corn, or GMO feed",
  "Sustainable and regenerative farming practices",
];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="h-48 lg:h-64 rounded-3xl bg-cover bg-center shadow-[0_8px_30px_rgba(92,64,51,0.12)]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=600&auto=format&fit=crop')`,
                  }}
                />
                <div
                  className="h-36 lg:h-44 rounded-3xl bg-cover bg-center shadow-[0_8px_30px_rgba(92,64,51,0.12)]"
                  style={{
                    backgroundImage: `url('/images/bfpic.webp')`,
                  }}
                />
              </div>
              <div className="pt-8 space-y-4">
                <div
                  className="h-36 lg:h-44 rounded-3xl bg-cover bg-center shadow-[0_8px_30px_rgba(92,64,51,0.12)]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?q=80&w=600&auto=format&fit=crop')`,
                  }}
                />
                <div
                  className="h-48 lg:h-64 rounded-3xl bg-cover bg-center shadow-[0_8px_30px_rgba(92,64,51,0.12)]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=600&auto=format&fit=crop')`,
                  }}
                />
              </div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 right-2 sm:-right-4 lg:-right-8 bg-barn-red text-white rounded-2xl p-4 sm:p-5 shadow-[0_12px_35px_rgba(139,46,46,0.3)]"
            >
              <span className="font-serif text-2xl font-bold block leading-tight">Family</span>
              <span className="text-sm text-white/80">Owned</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-barn-red text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 sm:mb-8 leading-tight">
              A Legacy of Quality,{" "}
              <span className="text-barn-red italic">Rooted in Care</span>
            </h2>
            <p className="text-warm-brown/70 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
              For years, Baker Farms has been raising livestock the way nature
              intended — on open pastures, under blue skies, and with an
              unwavering commitment to quality.
            </p>
            <p className="text-warm-brown/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
              We believe that the best meat comes from animals that live the best
              lives. That&apos;s why every cut we offer is pasture-raised, free
              from antibiotics and hormones, and dry-aged for peak flavor.
            </p>
            <p className="text-warm-brown/70 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              Our meats come from Baker Farms along with like-minded farm and
              ranch partners who share our values and standards — ensuring the
              same premium quality in every cut, every time.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-sage" />
                  </div>
                  <span className="text-charcoal font-medium text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#difference"
              className="inline-flex items-center gap-2 text-barn-red font-semibold hover:text-barn-red-dark transition-colors group"
            >
              Discover the Difference
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
