import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import Products from "@/components/Products";
import About from "@/components/About";
import Difference from "@/components/Difference";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesBar />
      <Products />
      <About />
      <Difference />
      <CTA />
      <Footer />
    </main>
  );
}
