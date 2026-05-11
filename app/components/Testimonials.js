export default function Testimonials() {
  const testimonials = [
    {
      stars: "★★★★★",
      text: "Partech benar-benar luar biasa! Website e-commerce kami meningkatkan penjualan online hingga 200%. Sangat profesional dan responsif.",
      name: "Ahmad Rizki",
      role: "CEO, TokoModern",
      initial: "A",
    },
    {
      stars: "★★★★★",
      text: "Tim yang sangat kompeten. Dashboard analytics yang mereka buat sangat membantu kami mengambil keputusan bisnis berbasis data.",
      name: "Sarah Putri",
      role: "COO, DataInsight Corp",
      initial: "S",
    },
    {
      stars: "★★★★★",
      text: "Desain website restoran kami mendapat banyak pujian dari pelanggan. Reservasi online meningkat 150% sejak launch!",
      name: "Budi Santoso",
      role: "Owner, L'Artiste Kitchen",
      initial: "B",
    },
  ];

  return (
    <section className="section" id="testimoni">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Testimoni</div>
          <h2 className="section-title">
            Apa Kata <span className="gradient-text">Klien Kami</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari mereka yang telah bekerja sama dengan Partech.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">{t.stars}</div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initial}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
