"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-top sm:bg-center bg-no-repeat scale-105 will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop')`,
            y: bgY,
          }}
        />
        {/* Strong gradient for typography legibility — centered on mobile, left-biased on desktop */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent sm:bg-linear-to-r sm:from-black/70 sm:via-black/40 sm:to-transparent" />
        {/* Bottom-to-top vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-transparent to-charcoal/20" />
        {/* Warm golden tint */}
        <div className="absolute inset-0 bg-linear-to-br from-amber-900/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 w-full pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-5 sm:mb-8"
          >
            <div className="h-px w-12 bg-golden" />
            <span className="text-golden-light text-sm font-semibold uppercase tracking-[0.25em]">
              Family Owned &amp; Operated
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-[2.25rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Grass-Fed{" "}
            <span className="text-golden-light italic">&amp; Finished</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-[0.938rem] sm:text-base lg:text-lg leading-relaxed max-w-lg mb-7 sm:mb-10 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
          >
            Each animal is humanely processed. Delivered fresh from our
            farms to your table with care and integrity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#products"
                className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-barn-red text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-[0.938rem] sm:text-base font-semibold tracking-wide transition-all duration-300 hover:bg-barn-red-dark hover:shadow-[0_12px_40px_rgba(139,46,46,0.4)] active:translate-y-0 w-full sm:w-auto"
              >
                Shop Premium Meats
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#about"
                className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 border-2 border-white/30 text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-[0.938rem] sm:text-base font-semibold tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/50 w-full sm:w-auto"
              >
                <Play className="w-4 h-4" />
                Learn Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Stat */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6"
      >
        <div className="w-px h-16 bg-white/20" />
        <div className="flex flex-col items-center gap-1">
          <span className="font-serif text-3xl font-bold text-golden-light">
            100%
          </span>
          <span className="text-white/50 text-xs uppercase tracking-wider">
            Grass-Fed
          </span>
        </div>
        <div className="w-px h-8 bg-white/20" />
        <div className="flex flex-col items-center gap-1">
          <span className="font-serif text-3xl font-bold text-golden-light">
            Family
          </span>
          <span className="text-white/50 text-xs uppercase tracking-wider">
            Owned
          </span>
        </div>
        <div className="w-px h-16 bg-white/20" />
      </motion.div>
    </section>
  );
}
