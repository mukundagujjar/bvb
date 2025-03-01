import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="flex flex-col gap-8 md:text-lg">
            <p>
                Bulls v/s Bears (BvB) is a specialized investment management agency led by Vasudev Kittur, who brings over 4 years of hands-on experience trading in the Indian stock market. Our approach combines strategic analysis with disciplined execution, allowing us to navigate market volatility while pursuing consistent returns for our clients. We pride ourselves on transparency and adaptability, keeping our clients' financial goals at the center of every investment decision.
            </p>

            <p>
                Under Vasudev's leadership, BvB has established a strong track record of performance, delivering more than 50% returns to clients on over 60% of occasions. We achieve this through a balanced approach to risk management, utilizing both conservative and dynamic strategies across various market segments including equities, futures, and options. While we maintain that all investments carry inherent risk, our proven methodology aims to consistently outperform market averages for our valued investors.
            </p>


            <Button asChild className='px-8 py-4 md:px-12 md:py-8 md:text-2xl font-bold w-fit'><Link href="/contact">Contact Us</Link></Button>

        </div>
    );
}

export default AboutPage;