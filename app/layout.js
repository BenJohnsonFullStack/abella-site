import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Health Coaching | Yoga | Energy Healing | Abella Health",
  description:
    "A boutique wellness company built with the future of health and wellness in mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
