"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PolicyLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Page Title Banner */}
      <div className="bg-charcoal pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              {title}
            </h1>
            <p className="text-white/50 text-sm sm:text-base max-w-xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose-policy"
          >
            {children}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
