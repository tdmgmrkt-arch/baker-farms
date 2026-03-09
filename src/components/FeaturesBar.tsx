"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Sun, ShieldCheck, Flame } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Animal Pasture",
    desc: "Open-range grazing",
  },
  {
    icon: Heart,
    title: "Ethically Raised",
    desc: "Humane practices",
  },
  {
    icon: Leaf,
    title: "Raised on Grass",
    desc: "100% grass-fed",
  },
  {
    icon: ShieldCheck,
    title: "No GMOs",
    desc: "All natural feed",
  },
  {
    icon: Flame,
    title: "Campfire Ready",
    desc: "Perfect for grilling",
  },
];

export default function FeaturesBar() {
  return (
    <section className="relative z-10 -mt-16 lg:-mt-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-[0_8px_50px_rgba(92,64,51,0.1)] border border-golden/10 px-6 py-8 lg:px-10 lg:py-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-cream flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-barn-red group-hover:shadow-[0_8px_25px_rgba(139,46,46,0.2)]">
                  <feature.icon className="w-6 h-6 lg:w-7 lg:h-7 text-barn-red transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-sm font-semibold text-charcoal mb-0.5">
                  {feature.title}
                </h3>
                <p className="text-xs text-warm-brown/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
