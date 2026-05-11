export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="bg-grid" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Pakar Technology — Available for Projects
          </div>
          <h1>
            Kami Bangun{" "}
            <span className="gradient-text">Solusi Digital</span>
            <br />
            Untuk Bisnis Anda
          </h1>
          <p>
            Partech adalah tim profesional yang menghadirkan website &amp; aplikasi
            berkualitas tinggi. Dari landing page hingga sistem enterprise —
            kami wujudkan visi digital Anda.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              Lihat Portfolio →
            </a>
            <a href="#kontak" className="btn btn-outline">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
