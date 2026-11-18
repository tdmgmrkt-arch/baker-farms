import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag, ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/content/posts/registry";

export const metadata: Metadata = {
  title: "Blog | Baker Farms — Local Grass-Fed Beef in Winchester, CA",
  description:
    "Guides, cooking tips, and local perspectives on pasture-raised meat from Baker Farms — a family-owned farm in Winchester, California serving the Temecula Valley and greater Southern California.",
  openGraph: {
    title: "Baker Farms Blog — Grass-Fed Beef Guides from Winchester, CA",
    description:
      "Local sourcing guides, freezer planning, cooking tips, and regenerative farming from a family-owned Winchester, CA farm.",
    type: "website",
  },
};

const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-charcoal pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <span className="text-golden-light text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-4 block">
            The Baker Farms Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
            Guides, stories, and cooking tips from a{" "}
            <span className="text-golden-light italic">Winchester, CA</span>{" "}
            family farm.
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl leading-relaxed">
            Practical writing for Southern California families who care where
            their meat comes from — local sourcing, freezer planning,
            regenerative practices, and honest cooking advice.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-white/50 text-xs">
            <MapPin className="w-3.5 h-3.5 text-golden-light" />
            <span>Serving the Temecula Valley and greater Southern California</span>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(92,64,51,0.08)] hover:shadow-[0_25px_60px_rgba(92,64,51,0.15)] transition-all duration-500"
          >
            <div className="lg:col-span-3 relative min-h-64 lg:min-h-96">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${featured.heroImage}')` }}
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-barn-red text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Featured
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-xs">
                <span className="inline-flex items-center gap-1.5 text-barn-red font-semibold uppercase tracking-wider">
                  <Tag className="w-3 h-3" />
                  {featured.category}
                </span>
                <span className="text-warm-brown/50">·</span>
                <span className="inline-flex items-center gap-1.5 text-warm-brown/60">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(featured.date)}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4 leading-tight group-hover:text-barn-red transition-colors">
                {featured.title}
              </h2>
              <p className="text-warm-brown/70 text-sm sm:text-base leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-barn-red font-semibold text-sm group-hover:gap-3 transition-all">
                Read the post
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid of remaining posts */}
      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex items-baseline justify-between mb-8 sm:mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              More from the farm
            </h2>
            <span className="text-warm-brown/50 text-sm">
              {rest.length} more {rest.length === 1 ? "post" : "posts"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_25px_rgba(92,64,51,0.06)] hover:shadow-[0_18px_45px_rgba(92,64,51,0.14)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${post.heroImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 text-barn-red text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      <Tag className="w-2.5 h-2.5" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-warm-brown/50 text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-3 leading-snug group-hover:text-barn-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-warm-brown/65 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-barn-red font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-cream pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
          <div className="bg-charcoal rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Reserve your share
            </h3>
            <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto mb-7">
              Beef shares, poultry, and specialty cuts from our family farm in
              Winchester — delivered across Southern California or picked up
              on-site.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/#products"
                className="bg-barn-red text-white font-semibold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider hover:bg-barn-red-dark transition-colors"
              >
                Browse Our Meats
              </Link>
              <Link
                href="/#order"
                className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Contact the Farm
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
