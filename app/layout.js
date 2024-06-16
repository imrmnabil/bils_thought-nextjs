import { Roboto } from "next/font/google";
import { Manrope } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "./components/MainNavbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Bil's Thought",
  description: "My personal bloging Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
        <div className="flex justify-center">
          <div className="fixed z-50 w-full">
            <ResponsiveAppBar />
          </div>
          </div>
        </header>
        <div className="flex justify-center mt-20 md:mt-26">
          <div className="container">
            <div className="relative z-20">{children}</div>
          </div>
        </div>
        <footer className="pt-6">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
