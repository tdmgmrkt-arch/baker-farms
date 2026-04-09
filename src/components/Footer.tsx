"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  ArrowRight,
  CreditCard,
  Lock,
  ChevronDown,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Meats", href: "/#products" },
  { label: "The Difference", href: "/#difference" },
  { label: "Contact", href: "/#order" },
];

const customerService = [
  { label: "Shipping Info", href: "/shipping" },
  { label: "Return Policy", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585416254981&mibextid=wwXIfr", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/baker.farms", label: "Instagram" },
];

function FooterAccordion({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile: clickable accordion header */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-full flex items-center justify-between py-1"
        aria-expanded={open}
      >
        <h4 className="font-serif font-bold text-white text-base">
          {title}
        </h4>
        <ChevronDown
          className={`w-4 h-4 text-white/40 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* Desktop: static heading */}
      <h4 className="hidden md:block font-serif font-bold text-white text-base mb-6">
        {title}
      </h4>

      {/* Mobile: animated expand/collapse */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden space-y-3 mt-3"
          >
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/60 text-sm hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Desktop: always visible */}
      <ul className="hidden md:block space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-white/60 text-sm hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="bg-slate-950 pt-14 sm:pt-24 lg:pt-28 pb-0"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Main Grid — 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 pb-14 sm:pb-20">
          {/* Col 1: Logo + Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <Image
                src="/bakerfarmslogo.webp"
                alt="Baker Farms Premium Meats"
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              Family owned and operated in Winchester, California. Premium
              pasture-raised meats from our farms to your table — delivered
              with care and integrity.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-golden/30 hover:bg-golden/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Navigation (accordion on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <FooterAccordion title="Navigation" links={navigation} />
          </motion.div>

          {/* Col 3: Customer Service (accordion on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <FooterAccordion title="Customer Service" links={customerService} />
          </motion.div>

          {/* Col 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="font-serif font-bold text-white text-base mb-6">
              Stay Connected
            </h4>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Get first access to seasonal offerings, exclusive farm updates,
              and members-only pricing.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex flex-col sm:flex-row gap-2"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/6 backdrop-blur-lg border border-white/12 rounded-xl px-4 py-3.5 sm:py-3 text-white text-sm focus:outline-none focus:border-golden/50 focus:bg-white/10 transition-all placeholder:text-white/30"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-barn-red text-white w-full sm:w-auto px-5 py-3.5 sm:py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-barn-red-dark hover:shadow-[0_8px_25px_rgba(139,46,46,0.3)] flex items-center justify-center gap-2 shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </form>
            <p className="text-white/25 text-xs mt-3">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 sm:py-10 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Left: Copyright */}
          <p className="text-white/40 text-xs">
            &copy; 2026 Baker Farms Premium Meats. All rights reserved.
          </p>

          {/* Center: Policy links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Right: Payment icons — centered on mobile */}
          <div className="flex items-center gap-3 text-white/30">
            <Lock className="w-3.5 h-3.5" />
            <span className="text-xs">Secure Checkout</span>
            <div className="flex items-center gap-2 ml-1">
              <CreditCard className="w-5 h-3.5" />
              <svg viewBox="0 0 38 24" className="w-7 h-4 fill-white/20">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Zm-17.1 19.2h-2.5L17 5.6h2.5l-1.6 13.6Zm-5.5 0L10 9l-.4 2.1-.7-3.5c0-.1-.5-.8-1.3-.8H3.2l-.1.3c1 .3 2.2.8 2.9 1.3l2.4 9.8h2.6l4-13.6h-2.6l-2.5 14.6v-.3Zm16.8 0h2.3l-2-13.6h-2c-.7 0-1.3.4-1.5 1l-4.3 12.6h2.6l.5-1.5h3.2l.2 1.5Zm-2.7-3.5 1.3-3.7.8 3.7h-2.1ZM26 9l.4-2c0-.1-.4-1-1.5-1.3-.7-.2-1.7-.4-2.9-.4l-.3 2c.8-.1 2.1 0 2.6.2.3.2.6.5.6.8L26 9Z" />
              </svg>
              <svg viewBox="0 0 38 24" className="w-7 h-4 fill-white/20">
                <circle cx="15" cy="12" r="7" fillOpacity="0.6" />
                <circle cx="23" cy="12" r="7" fillOpacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
