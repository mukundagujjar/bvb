import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
    {
        id: 1,
        title: "Investment Services",
        cost: "Minimum Investment: ₹1,00,000",
        description: [
            "20% of your total investment is allocated as trading capital to generate profits.",
            "We guarantee a minimum of 8% profit per month on your total investment.",
            "We ensure that your account always maintains at least 80% of your original investment, regardless of market conditions.",
            "Our fee is just 5% of the profits generated, not your total investment.",
            "We recommend a 3-month lock-in period for optimal returns. In case of an early withdrawal, we will only return 80% of your investment.",
            "All investments are subject to market risk. We are not SEBI registered."
        ]
    },
    {
        id: 2,
        title: "Live Trading Sessions",
        cost: "₹5,000 per month",
        description: [
            "Join us on Google Meet to observe our trading process in real-time.",
            "Receive actionable trading options and recommendations during the session.",
            "Learn valuable trading strategies and market insights as you watch.",
            "Perfect for those who prefer to execute trades themselves with expert guidance."
        ]
    },    
    {
        id: 3,
        title: "Coaching Package",
        cost: "₹25,000 (one-time payment)",
        description: [
            "Get a comprehensive coaching package that covers everything from basic to advanced trading.",
            "Reference notes, educational materials, and resources to help you understand our trading strategies.",
            "Three months of FREE live trading sessions with expert guidance.",
            "Perfect for those who want to become a self-sufficient trader with expert guidance."
        ]
    }
]

const ServicesPage = () => {
    return (
        <div className="flex flex-col gap-8 md:text-lg items-center md:items-start">
            {
                services.map((service) => (
                    <div key={service.id} className="flex flex-col gap-4">
                        <h3 className="text-2xl md:text-4xl font-semibold">{service.title}</h3>
                        <p className="bg-tertiary w-fit px-4 py-1 font-medium text-background">{service.cost}</p>
                        <ul className="flex flex-col list-disc pl-5 gap-2">
                            {service.description.map((description, index) => (
                                <li key={index} className="font-light">{description}</li>
                            ))}
                        </ul>
                        
                        <Separator className="mt-4" />
                  
                    </div>
                ))
            }
            <Button className="md:px-12 md:py-8 px-8 py-4 md:text-2xl font-bold select-none cursor-pointer w-fit" asChild>
                <Link href="/contact">Contact us</Link>
            </Button>
        </div>
    );
}

export default ServicesPage