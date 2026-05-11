export default function Process() {
  const steps = [
    { num: "01", title: "Diskusi & Analisis", desc: "Memahami kebutuhan bisnis, target audiens, dan tujuan proyek Anda secara mendalam." },
    { num: "02", title: "Desain & Prototype", desc: "Merancang wireframe dan mockup visual yang menarik sebelum mulai development." },
    { num: "03", title: "Development", desc: "Membangun aplikasi dengan teknologi modern, clean code, dan best practices." },
    { num: "04", title: "Launch & Support", desc: "Deployment ke production dengan testing menyeluruh dan dukungan pasca-launch." },
  ];

  return (
    <section className="section" id="proses">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Cara Kami Bekerja</div>
          <h2 className="section-title">
            Proses Yang <span className="gradient-text">Terstruktur</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Metodologi kerja kami dirancang untuk memastikan hasil terbaik dengan komunikasi yang transparan.
          </p>
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="process-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
