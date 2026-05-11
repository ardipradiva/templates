"use client";
import { useState } from "react";

const projects = [
  {
    category: "E-Commerce",
    title: "TokoModern — E-Commerce Platform",
    desc: "Platform e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin.",
    img: "/project-ecommerce.png",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    link: "#",
  },
  {
    category: "Dashboard",
    title: "DataInsight — Analytics Dashboard",
    desc: "Dashboard analitik real-time untuk monitoring KPI bisnis dengan visualisasi data interaktif.",
    img: "/project-dashboard.png",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    category: "Website",
    title: "L'Artiste Kitchen — Restaurant Site",
    desc: "Website restoran elegan dengan sistem reservasi online dan menu digital interaktif.",
    img: "/project-restaurant.png",
    tech: ["React", "CSS Modules", "Firebase"],
    link: "#",
  },
  {
    category: "Mobile App",
    title: "FinWallet — Mobile Banking App",
    desc: "Aplikasi mobile banking dengan fitur transfer, pembayaran, dan tracking pengeluaran.",
    img: "/project-mobile-app.png",
    tech: ["React Native", "Node.js", "JWT", "PostgreSQL"],
    link: "#",
  },
  {
    category: "Website",
    title: "CloudStack — SaaS Landing Page",
    desc: "Landing page modern untuk produk SaaS dengan animasi halus dan optimasi konversi tinggi.",
    img: "/project-landing.png",
    tech: ["Next.js", "Framer Motion", "Vercel"],
    link: "#",
  },
  {
    category: "Website",
    title: "Nusantara Corp — Company Profile",
    desc: "Website company profile profesional dengan desain premium dan performa optimal.",
    img: "/project-corporate.png",
    tech: ["Next.js", "Vanilla CSS", "Vercel"],
    link: "#",
  },
];

const categories = ["Semua", "Website", "E-Commerce", "Dashboard", "Mobile App"];

export default function Portfolio() {
  const [filter, setFilter] = useState("Semua");
  const filtered = filter === "Semua" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">
          Proyek <span className="gradient-text">Terbaru</span> Kami
        </h2>
        <p className="section-subtitle">
          Beberapa karya terbaik yang telah kami kerjakan untuk klien dari berbagai industri.
        </p>
        <div className="portfolio-filter">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn${filter === c ? " active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filtered.map((p, i) => (
            <a href={p.link} className="portfolio-card" key={i} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="portfolio-img-wrapper">
                <img src={p.img} alt={p.title} className="portfolio-img" />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-category">{p.category}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="portfolio-tech">
                {p.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
