import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bozena-smolkova-research.babkabibka120.chatgpt.site"),
  title: "Cancer Epigenetics Research Group",
  description: "A research group exploring cancer epigenetics, DNA methylation, chromatin regulation and translational biomarkers.",
  openGraph: {
    title: "Cancer Epigenetics Research Group",
    description: "Cancer epigenetics · Precision oncology",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Cancer Epigenetics Research Group — Cancer Epigenetics and Precision Oncology" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable} ${serif.variable}`}>{children}</body></html>;
}
