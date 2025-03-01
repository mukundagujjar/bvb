import { Bricolage_Grotesque } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/app/Sidebar";
import { Analytics } from "@vercel/analytics/react"

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const DashboardLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={`${bricolageGrotesque.className} dark`}>
                <div className="flex h-dvh w-full overflow-hidden">
                    <Sidebar />
                    <div className="flex flex-col h-dvh w-full overflow-hidden p-4">
                        {children}
                    </div>
                </div>
                <Analytics />
            </body>
        </html>
    );
}

export default DashboardLayout;