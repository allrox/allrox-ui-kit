import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "AllRox: The UI Kit Project",
  description: "Visual and code standards for AllRox's projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <meta name="author" description="@AllRox" />
      <meta name="keywords" description="AllRox, UI, UX, UI Kit, React, Next JS, Tailwind CSS" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
