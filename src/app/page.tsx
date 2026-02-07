import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-blue selection:text-brand-dark">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
