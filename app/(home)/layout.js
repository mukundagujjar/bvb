import { Bricolage_Grotesque } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/app/Navbar";
import { Analytics } from "@vercel/analytics/react"

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bulls v/s Bears",
  description: "Track your investments with Bulls v/s Bears",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.className} dark`}>
        <Navbar />
        <div className="w-full flex flex-col gap-8 p-8 mt-[13%] lg:mt-[6%]">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
