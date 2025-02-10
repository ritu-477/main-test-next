import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smerse",
  description: "FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE",
  openGraph: {
    title: "Smerse",
    description: "FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "Smerse Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smerse",
    description: "FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
