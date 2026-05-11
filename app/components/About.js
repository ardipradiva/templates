export default function About() {
  return (
    <section className="section" id="tentang">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/team-photo.png" alt="Tim Partech" />
          </div>
          <div className="about-text">
            <div className="section-label">Tentang Kami</div>
            <h3>
              Tim Yang <span className="gradient-text">Berdedikasi</span> Untuk Kesuksesan Digital Anda
            </h3>
            <p>
              Partech (Pakar Technology) adalah tim developer dan designer yang
              passionate dalam menciptakan solusi digital berkualitas tinggi.
              Kami percaya bahwa setiap bisnis layak memiliki kehadiran digital
              yang memukau dan fungsional.
            </p>
            <p>
              Dengan pengalaman mengerjakan berbagai proyek dari skala kecil
              hingga enterprise, kami siap menjadi mitra teknologi terpercaya
              untuk mendorong pertumbuhan bisnis Anda.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">⚡</div>
                <div>
                  <h4>Pengerjaan Cepat</h4>
                  <p>Timeline yang jelas dan delivery tepat waktu untuk setiap proyek.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">🎯</div>
                <div>
                  <h4>Berorientasi Hasil</h4>
                  <p>Fokus pada konversi dan ROI, bukan hanya tampilan cantik.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">🤝</div>
                <div>
                  <h4>Support Berkelanjutan</h4>
                  <p>Dukungan teknis setelah launch untuk memastikan kelancaran.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
