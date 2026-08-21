import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Armenian, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const notoArmenian = Noto_Sans_Armenian({
  variable: "--font-noto-armenian",
  subsets: ["armenian"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gevorg — Tours in Armenia",
  description: "Private tours across Armenia with driver and guide Gevorg.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} ${notoArmenian.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased [lang=ru]:font-[family-name:var(--font-montserrat)] [lang=hy]:font-[family-name:var(--font-noto-armenian)]">{children}</body>
    </html>
  );
}
