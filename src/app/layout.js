import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";

const poppin = Poppins({ subsets: ["latin"] , weight:["400",  "600", "500"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
