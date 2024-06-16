import { Roboto } from "next/font/google";
import { Manrope } from "next/font/google";


export default function RootLayout({ children }) {
  return (
        <div className="flex justify-center mt-20 md:mt-26">
          <div className="container">
            <div className="relative z-20">{children}</div>
          </div>
          </div>
  );
}