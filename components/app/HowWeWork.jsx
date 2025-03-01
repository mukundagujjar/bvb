import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MessageCircle, MapPin, CheckCircle, ArrowDown } from 'lucide-react'
import Image from "next/image"

const steps = [
    {
        title: "Contact us",
        content: "We believe in being completely transparent with our clients. In our discussion, you can ask us any questions you may have and gain clarification about the process. You may contact us via our contact page or WhatsApp us directly at +91 9999999999.",
        icon: Clock
    },
    {
        title: "You make the investment",
        content: "Based on your understanding of our process, you make the minimum investment of ₹1,00,000. We will provide you with a payment link and a contract to sign. Once the payment is made, we will start trading on your behalf.",
        icon: CheckCircle
    },
    {
        title: "Trading and returns",
        content: "We will trade in various markets on your behalf and provide you with monthly returns of 8% - 10% on your investment. For proper tracking, we will provide with a dashboard where you can see your investment grow. Please refer to our legal page for more information on how we handle your data. We will charge a 20% commission on the profits made.",
        icon: MessageCircle
    },
    {
        title: "Regular updates",
        content: "We will provide you with regular updates on your portfolio and the performance of your investments. This will be visible to you on your dashboard. You can withdraw your investment after a lock-in period of 3 months.",
        icon: MapPin
    }
]

const HowWeWork = () => {
    return (
        <div id="#how-we-work" className="flex flex-col w-full justify-center">

            <div className="flex flex-col w-full px-4 lg:w-3/4 mx-auto gap-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Steps to get started</h2>

                    {/* Desktop View */}
                    <div className="flex flex-col w-full">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex w-full mb-8 gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className="w-full md:w-2/3">
                                    <Card className="relative bg-foreground text-background w-full cursor-pointer">
                                        {/* {index === 0 && (
                                            <div className="absolute w-fit -top-4 -right-2 -rotate-[20deg] bg-tertiary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full shadow-lg transform">
                                                Free!
                                            </div>
                                        )} */}
                                        <CardHeader className="p-2">
                                            <div className="w-12 h-12 rounded-full border border-zinc-400 flex items-center justify-center mx-auto mb-2 bg-muted">
                                                <step.icon className="w-6 h-6 text-foreground" />
                                            </div>
                                            <CardTitle className="text-xl font-semibold text-center">{step.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted/80 text-center">{step.content}</p>
                                        </CardContent>
                                    </Card>
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
        </div>
    )
}

export default HowWeWork