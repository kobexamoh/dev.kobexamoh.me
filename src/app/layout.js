// Component imports
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// Font imports
import { Oxygen } from "next/font/google";
import "./globals.css";

// Font configuration
const oxygen = Oxygen({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

// TODO: update metadata to personal site
export const metadata = {
  title: "Kobe Amoh | frontend developer and ux/ui designer",
  description: "Kobe Amoh is a frontend developer and marketing UI/UX designer for brands and startups.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oxygen.className} h-full antialiased`} // Next.js does it differently...ignoring the h-full and antialiased part, think of the .className part as saying "hey, add the class name that next/font generated for the oxygen font to the html element so that the font can be made available to the entire app""
    >
      <body className="min-h-full flex flex-col">
        {/* Navigation: TODO: run prettier or something on it so it reformats nicely*/}
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
