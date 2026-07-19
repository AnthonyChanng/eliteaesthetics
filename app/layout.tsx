import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maré Coastal Spa | Vero Beach, Florida",
  description: "Thoughtful spa treatments and coastal calm in Vero Beach, Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
