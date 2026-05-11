import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-grid" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Testimonials />
        <section className="cta-section">
          <div className="container" style={{ textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Ready?</div>
            <h2 className="section-title">
              Siap Memulai Proyek <span className="gradient-text">Impian</span> Anda?
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: 500, margin: "0 auto 40px" }}>
              Konsultasi gratis untuk mendiskusikan kebutuhan digital bisnis Anda. Tanpa komitmen.
            </p>
            <a href="#kontak" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
              Konsultasi Gratis →
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
