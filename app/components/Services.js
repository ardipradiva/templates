export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      desc: "Pembuatan website modern & responsif — mulai dari landing page, company profile, hingga e-commerce yang memukau.",
      tags: ["React", "Next.js", "WordPress"],
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Aplikasi mobile cross-platform yang cepat dan intuitif untuk Android & iOS dengan performa native.",
      tags: ["Kotlin", "Flutter", "Firebase"],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Desain antarmuka yang elegan dan user-friendly, dirancang untuk meningkatkan konversi dan pengalaman pengguna.",
      tags: ["Figma", "Prototyping", "Design System"],
    },
    {
      icon: "⚙️",
      title: "Custom Web Application",
      desc: "Sistem informasi, dashboard, dan aplikasi web kustom yang disesuaikan dengan kebutuhan bisnis Anda.",
      tags: ["Laravel", "Node.js", "PostgreSQL"],
    },
    {
      icon: "🚀",
      title: "Deployment & Hosting",
      desc: "Setup deployment otomatis, optimasi performa, dan manajemen hosting dengan uptime terjamin.",
      tags: ["Vercel", "AWS", "Docker"],
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      desc: "Layanan pemeliharaan berkala, update keamanan, dan dukungan teknis untuk menjaga aplikasi tetap optimal.",
      tags: ["Monitoring", "Bug Fix", "Optimization"],
    },
  ];

  return (
    <section className="section" id="layanan">
      <div className="container">
        <div className="section-label">Layanan Kami</div>
        <h2 className="section-title">
          Solusi Lengkap Untuk <span className="gradient-text">Kebutuhan Digital</span>
        </h2>
        <p className="section-subtitle">
          Dari konsep hingga peluncuran, kami menyediakan layanan end-to-end untuk membangun
          kehadiran digital yang kuat.
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span className="service-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
