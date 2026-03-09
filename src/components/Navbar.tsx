"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Meats", href: "/#products" },
  { label: "The Difference", href: "/#difference" },
  { label: "Contact", href: "/#order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-cream/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(92,64,51,0.08)] border-golden/10"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="#" className="group transition-transform duration-300 hover:scale-105">
              <Image
                src="/bakerfarmslogo.webp"
                alt="Baker Farms Premium Meats"
                width={160}
                height={80}
                className="h-12 sm:h-14 lg:h-18 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-barn-red group ${
                    scrolled ? "text-charcoal" : "text-white/90"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-barn-red transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/#products"
                className="relative inline-flex items-center gap-2 bg-barn-red text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:bg-barn-red-dark hover:shadow-[0_8px_30px_rgba(139,46,46,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? "text-charcoal hover:bg-charcoal/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[85vw] max-w-80 bg-cream shadow-2xl"
            >
              <div className="flex flex-col pt-24 sm:pt-28 px-6 sm:px-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-lg font-medium text-charcoal hover:text-barn-red transition-colors border-b border-golden/10"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    href="/#products"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 bg-barn-red text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-barn-red-dark transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Order Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
