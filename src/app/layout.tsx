import "./globals.css";
import { Inter, Sora } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Jet",
  description: "Engineering Intelligent Digital, AI & Industrial Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className={inter.className}>
        
        <Header />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}