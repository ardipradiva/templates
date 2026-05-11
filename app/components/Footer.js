export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{ textDecoration: "none" }}>
              <img src="/partech-logo.png" alt="Partech" style={{ height: 36, width: 36, borderRadius: 10 }} />
              <span className="nav-logo-text">PARTECH</span>
            </a>
            <p>Pakar Technology — Tim profesional yang menghadirkan solusi digital berkualitas tinggi untuk bisnis Anda.</p>
          </div>
          <div className="footer-col">
            <h4>Layanan</h4>
            <ul>
              <li><a href="#layanan">Web Development</a></li>
              <li><a href="#layanan">Mobile App</a></li>
              <li><a href="#layanan">UI/UX Design</a></li>
              <li><a href="#layanan">Maintenance</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Perusahaan</h4>
            <ul>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#proses">Proses</a></li>
              <li><a href="#testimoni">Testimoni</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontak</h4>
            <ul>
              <li><a href="mailto:hello@partech.dev">hello@partech.dev</a></li>
              <li><a href="#">+62 812-3456-7890</a></li>
              <li><a href="#">Indonesia</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Partech. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Instagram">📷</a>
            <a href="#" className="footer-social" aria-label="LinkedIn">💼</a>
            <a href="#" className="footer-social" aria-label="GitHub">🐙</a>
            <a href="#" className="footer-social" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
