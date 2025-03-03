"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, IndianRupee, ChartCandlestick, LayoutDashboard } from 'lucide-react'
import Image from "next/image"
import { useState, useEffect } from "react"

const steps = [
    {
        title: "Contact us",
        content: "We believe in complete transparency with our clients. During our initial discussion, you can ask any questions about our investment approach, risk management strategy, and guaranteed monthly returns. You may contact us via our contact page or WhatsApp us directly at +91-7709203276.",
        icon: PhoneCall
    },
    {
        title: "Make your investment",
        content: "After understanding our process, you can make a minimum investment of ₹1,00,000. We'll provide you with a payment link and contract. Once payment is received, we'll allocate 80% of your investment to secure holdings and use 20% as active trading capital to generate your guaranteed minimum 8% monthly returns.",
        icon: IndianRupee
    },
    {
        title: "Trading and returns",
        content: "We'll actively trade with your 20% risk capital while keeping 80% of your investment secure. You'll have access to a dashboard showing your returns and portfolio performance. We charge just 5% of profits generated - we only earn when you earn. You're guaranteed a minimum 8% monthly return on your total investment.",
        icon: ChartCandlestick
    },
    {
        title: "Regular updates and growth",
        content: "We provide regular updates on your portfolio performance through your personalized dashboard. We recommend maintaining your investment for at least 3 months to experience optimal returns. After this period, you can withdraw your funds anytime, including your secure 80% and all accumulated profits.",
        icon: LayoutDashboard
    }
]

// Darker gradient combinations with higher opacity
// const gradientClasses = [
//     'bg-gradient-to-br from-purple-700/40 to-blue-600/30',
//     'bg-gradient-to-br from-blue-700/40 to-teal-600/30',
//     'bg-gradient-to-br from-emerald-700/40 to-cyan-600/30',
//     'bg-gradient-to-br from-rose-700/40 to-orange-600/30'
// ];
// Brighter, more vibrant gradient combinations
const gradientClasses = [
    'bg-gradient-to-br from-violet-500/60 to-blue-400/50',
    'bg-gradient-to-br from-blue-500/60 to-cyan-400/50',
    'bg-gradient-to-br from-emerald-500/60 to-green-400/50',
    'bg-gradient-to-br from-pink-500/60 to-rose-400/50'
];

const GetStarted = () => {
    const [gradients, setGradients] = useState([]);

    useEffect(() => {
        setGradients(steps.map((_, index) => gradientClasses[index % gradientClasses.length]));
    }, []);

    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex flex-col w-full px-4 lg:w-3/4 mx-auto gap-8">
                <h2 className="text-4xl font-bold text-center">Steps to invest with us</h2>
                {/* Desktop View */}
                <div className="flex flex-col w-full gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex w-full gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className="w-full md:w-2/3 relative">
                                {/* Create a separate div for the blurred gradient background */}
                                <div className={`absolute inset-0 ${gradients[index] || ''} blur-lg rounded-lg`}></div>

                                {/* Card with slight padding to show the blurred background */}
                                <div className="relative">
                                    <Card className="relative bg-foreground text-background w-full cursor-pointer">
                                        <CardHeader className="p-2">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 bg-background outline-2 outline-offset-2">
                                                <step.icon className="w-6 h-6 text-foreground" />
                                            </div>
                                            <CardTitle className="text-lg md:text-xl font-semibold text-center">{step.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm md:text-md text-muted/80 text-center">{step.content}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <div className={`relative hidden w-1/3 md:flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-end`}>
                                {index < steps.length - 1 && (
                                    <Image src={index % 2 === 0 ? "/right-arrow.svg" : "/left-arrow.svg"} alt="arrow-down" width={180} height={12} className="absolute -bottom-20 z-10" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GetStarted