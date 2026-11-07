import type { Metadata } from "next";
import { Oswald, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "21 Laps Entertainment — Book-to-Screen Adaptations for Film & Television",
  description:
    "21 Laps Entertainment develops and produces book-to-screen adaptations for film and television. From bestselling novels to acclaimed series, we bring stories from the page to the screen.",
  keywords: [
    "21 Laps Entertainment",
    "book to screen",
    "film adaptation",
    "television adaptation",
    "production company",
    "Story of Your Life",
    "Arrival",
    "Shadow and Bone",
    "All the Light We Cannot See",
  ],
  authors: [{ name: "21 Laps Entertainment" }],
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "21 Laps Entertainment — Book-to-Screen Adaptations",
    description:
      "Developing and producing book-to-screen adaptations for film and television.",
    siteName: "21 Laps Entertainment",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "21 Laps Entertainment — Book-to-Screen Adaptations",
    description:
      "Developing and producing book-to-screen adaptations for film and television.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${openSans.variable} ${playfair.variable} font-body antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
