export default function Stats() {
  const stats = [
    { number: "50+", label: "Proyek Selesai" },
    { number: "30+", label: "Klien Puas" },
    { number: "3+", label: "Tahun Pengalaman" },
    { number: "99%", label: "Tingkat Kepuasan" },
  ];

  return (
    <section className="container" style={{ marginTop: "-40px", position: "relative", zIndex: 2 }}>
      <div className="stats-bar">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
