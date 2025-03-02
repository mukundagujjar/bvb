import { Bricolage_Grotesque } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react"

const bricolageGrotesque = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"],
});

const LoginLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={`${bricolageGrotesque.className}`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}

export default LoginLayout;