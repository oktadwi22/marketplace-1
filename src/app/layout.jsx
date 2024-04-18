import { Plus_Jakarta_Sans } from "next/font/google";
import "../common/style/globals.css";
import { LenisProvider } from "@/common/component/element/LenisProvider";
import Navbar from "@/common/component/navbar/Navbar";
import Footer from "@/common/component/element/Footer";

const plusj = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SourceBlock",
  description: "Sourceblock emerges as a dual-component technology suite that merges the robust capabilities of AI-driven pricing optimization with the security and transparency of a blockchain-based marketplace.",
  icons: '/Aset/blocksource.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={plusj.className}>
        <LenisProvider>
          <div className="w-full flex justify-center items-center">
            <Navbar />
          </div>
          {children}

          <div className="w-full flex justify-center items-center">
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
