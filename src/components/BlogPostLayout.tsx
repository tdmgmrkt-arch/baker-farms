"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Tag, ArrowLeft, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BlogPostLayout({
  title,
  excerpt,
  category,
  date,
  readingTime,
  heroImage,
  children,
}: {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  heroImage: string;
  children: React.ReactNode;
}) {
  const formattedDate = new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-charcoal pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-barn-red/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                <Tag className="w-3 h-3" />
                {category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/60 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-white/60 text-xs">{readingTime}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">
              {excerpt}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-white/50 text-xs">
              <MapPin className="w-3.5 h-3.5 text-golden-light" />
              <span>Baker Farms · Winchester, California</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <article className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="prose-blog"
          >
            {children}
          </motion.div>

          {/* CTA card at end of every post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 rounded-3xl bg-barn-red p-8 sm:p-10 text-center shadow-[0_20px_50px_rgba(139,46,46,0.25)]"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Taste the Baker Farms Difference
            </h3>
            <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto mb-6">
              Family-owned, pasture-raised, delivered across Southern California
              or picked up right here in Winchester. Reserve your share today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#products"
                className="bg-white text-barn-red font-semibold px-7 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-cream transition-colors"
              >
                Shop Our Meats
              </Link>
              <Link
                href="/#order"
                className="border border-white/30 text-white font-semibold px-7 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Contact the Farm
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
