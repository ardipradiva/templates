"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section" id="kontak">
      <div className="container">
        <div className="section-label">Kontak</div>
        <h2 className="section-title">
          Mari <span className="gradient-text">Bekerja Sama</span>
        </h2>
        <p className="section-subtitle">
          Punya ide proyek? Ceritakan kebutuhan Anda dan kami akan memberikan solusi terbaik.
        </p>
        <div className="contact-grid">
          <div>
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>hello@partech.dev</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Lokasi</h4>
                  <p>Indonesia (Remote-Friendly)</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>Jam Kerja</h4>
                  <p>Senin - Sabtu, 09:00 - 18:00 WIB</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input id="name" name="name" placeholder="Nama Anda" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="email@anda.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">Layanan</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Pilih layanan</option>
                  <option value="website">Website Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="custom">Custom Application</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Estimasi Budget</label>
                <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                  <option value="">Pilih range budget</option>
                  <option value="1-5">Rp 1 - 5 Juta</option>
                  <option value="5-15">Rp 5 - 15 Juta</option>
                  <option value="15-50">Rp 15 - 50 Juta</option>
                  <option value="50+">Rp 50 Juta+</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Detail Proyek</label>
              <textarea id="message" name="message" placeholder="Ceritakan tentang proyek Anda..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              {sent ? "✓ Pesan Terkirim!" : "Kirim Pesan →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
