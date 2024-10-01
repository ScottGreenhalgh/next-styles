import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mushroom Tracker",
  description: "Learning more about different mushrooms | Mushroom Tracker",
  openGraph: {
    title: "Mushroom Tracker",
    description: "Learning more about different mushrooms | Mushroom Tracker",
    type: "website",
    url: "https://next-styles-9wp3y9iht-scotts-projects-9febea56.vercel.app/",
    //image: "https://next-comments-postgres.vercel.app/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
