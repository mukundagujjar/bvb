"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, IndianRupee, ChartCandlestick, LayoutDashboard } from 'lucide-react'
import Image from "next/image"
import { useState, useEffect } from "react"

const steps = [
    {
        title: "Contact us",
        content: "We believe in being completely transparent with our clients. In our discussion, you can ask us any questions you may have and gain clarification about the process. You may contact us via our contact page or WhatsApp us directly at +91-7709203276.",
        icon: PhoneCall
    },
    {
        title: "You make the investment",
        content: "Based on your understanding of our process, you make the minimum investment of ₹1,00,000. We will provide you with a payment link and a contract to sign. Once the payment is made, we will start trading on your behalf.",
        icon: IndianRupee
    },
    {
        title: "Trading and returns",
        content: "We will trade in various markets on your behalf. For proper tracking, we will provide with a dashboard where you can see your returns. Please refer to our legal page for more information on how we handle your investment and personal data. We will charge a 20% commission on the profits made.",
        icon: ChartCandlestick
    },
    {
        title: "Regular updates",
        content: "We will provide you with regular updates on your portfolio and the performance of your investments. This will be visible to you on your dashboard. You can withdraw your investment after a lock-in period of 3 months.",
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
                <h2 className="text-4xl font-bold text-center">Steps to get started</h2>
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
                                            <CardTitle className="text-xl font-semibold text-center">{step.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted/80 text-center">{step.content}</p>
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