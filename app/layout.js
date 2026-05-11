import "./globals.css";

export const metadata = {
  title: "Partech - Pakar Technology | Jasa Pembuatan Website & Aplikasi Premium",
  description:
    "Partech (Pakar Technology) adalah tim profesional yang menyediakan jasa pembuatan website, aplikasi mobile, dan solusi digital terbaik untuk mengembangkan bisnis Anda.",
  keywords: "jasa pembuatan website, web developer indonesia, aplikasi mobile, partech, pakar technology",
  openGraph: {
    title: "Partech - Pakar Technology",
    description: "Solusi digital premium untuk bisnis Anda",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
