"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Check } from "lucide-react";
import {
  FloatingInput,
  FloatingTextarea,
  FloatingSelect,
} from "./FloatingInput";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/8PXEY7myv9cbSDi286cX/webhook-trigger/e1a602fc-d6b5-4dcc-99ee-193decd94a10";

const interestOptions = [
  { value: "beef", label: "Beef Shares" },
  { value: "chicken", label: "Chicken" },
  { value: "lamb", label: "Lamb" },
  { value: "pork", label: "Pork (Seasonal)" },
  { value: "turkey", label: "Turkey (Seasonal)" },
  { value: "custom", label: "Custom Beef Boxes" },
  { value: "wholesale", label: "Wholesale" },
];

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "(951) 348-0235",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bakermeatco@gmail.com",
  },
  {
    icon: MapPin,
    label: "Farm Location",
    value: "Winchester, California",
  },
];

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      source: "Baker Farms Contact Form",
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      submittedAt: new Date().toISOString(),
    };
    setStatus("submitting");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Webhook failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="order" className="py-14 sm:py-20 lg:py-28 bg-cream-dark/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-barn-red text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Ready to Order?
          </h2>
          <p className="text-warm-brown/60 text-base max-w-lg mx-auto leading-relaxed">
            Experience the taste of truly premium, pasture-raised meats.
            We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Split card container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(92,64,51,0.14)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ── Left: Image + Contact ── */}
            <div className="relative min-h-72 lg:min-h-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/familyphoto.webp')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/20" />

              {/* Contact info — bottom anchored */}
              <div className="relative z-10 flex flex-col justify-end h-full p-5 sm:p-8 lg:p-10">
                <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 p-5 space-y-4">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-golden-light" />
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] uppercase tracking-wider leading-none mb-0.5 font-medium">
                          {item.label}
                        </p>
                        <p className="text-white font-semibold text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Form on burgundy ── */}
            <div className="bg-barn-red relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-black/10 rounded-full blur-3xl" />

              <div className="relative z-10 p-6 sm:p-8 lg:p-12 xl:p-14">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-1.5">
                  Send Us a Message
                </h3>
                <p className="text-white/45 text-sm mb-8">
                  Fill out the form and we&apos;ll be in touch soon.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingInput label="First Name" name="firstName" required />
                    <FloatingInput label="Last Name" name="lastName" required />
                  </div>
                  <FloatingInput label="Email Address" type="email" name="email" required />
                  <FloatingSelect
                    label="What are you interested in?"
                    options={interestOptions}
                    name="interest"
                  />
                  <FloatingTextarea
                    label="Tell us about your order..."
                    rows={4}
                    name="message"
                  />

                  <motion.button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    whileHover={status === "idle" ? { scale: 1.02 } : {}}
                    whileTap={status === "idle" ? { scale: 0.98 } : {}}
                    className="w-full flex items-center justify-center gap-2.5 bg-white text-barn-red px-8 py-4 rounded-full text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-cream hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)] mt-6 disabled:opacity-80 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      "Sending..."
                    ) : status === "success" ? (
                      <>
                        Message Sent <Check className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Send Inquiry <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  {status === "success" && (
                    <p className="text-white/80 text-xs text-center mt-3">
                      Thanks! We&apos;ll be in touch within 24 hours.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-white text-xs text-center mt-3 bg-black/30 rounded-lg py-2 px-3">
                      Something went wrong. Please email us at{" "}
                      <a href="mailto:bakermeatco@gmail.com" className="underline">
                        bakermeatco@gmail.com
                      </a>.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
