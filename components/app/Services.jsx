"use client"
import Link from "next/link"
import { ArrowRight, BarChart3, BookOpen, LineChart, IndianRupee } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
const Services = () => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)

    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex flex-col w-full px-4 lg:w-3/4 mx-auto gap-8 items-center justify-center">
                <h2 className="text-4xl font-bold text-center">Services we offer</h2>

                < div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
                    {/* Options Trading Card */}
                    < Card className={`flex flex-col h-full select-none cursor-pointer outline outline-purple-500 outline-2 outline-offset-4`}>
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                                <LineChart className="h-6 w-6 text-primary" />
                                <CardTitle className="text-2xl">Trading Education</CardTitle>
                            </div>
                            <CardDescription className="text-base">
                                Learn profitable trading strategies directly from our expert traders
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="space-y-4">
                                <div className={`rounded-lg p-4 bg-purple-500/50`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <BarChart3 className="h-5 w-5 text-primary" />
                                        <h3 className="font-semibold text-lg">Live Trading</h3>
                                    </div>
                                    <p className="text-sm md:text-md text-muted-foreground">
                                        Join our live Google Meet sessions where you can watch our trading process in real-time and receive actionable trading opportunities.
                                    </p>
                                    <Separator className={"my-2"} />
                                    <p className="text-md md:text-lg mt-2 font-bold text-primary">
                                        <IndianRupee className="h-4 w-4 inline-block" /> 5,000/month
                                    </p>
                                </div>
                                <div className={`rounded-lg p-4 bg-purple-500/50`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <BookOpen className="h-5 w-5 text-primary" />
                                        <h3 className="font-semibold text-lg">Coaching</h3>
                                    </div>
                                    <p className="text-sm md:text-md text-muted-foreground">
                                        Complete trading education with 3 months of FREE live sessions included. Learn our proven strategies that consistently deliver exceptional returns.
                                    </p>
                                    <Separator className={"my-2"} />
                                    <p className="text-md md:text-lg mt-2 font-bold text-primary">
                                        <IndianRupee className="h-4 w-4 inline-block" /> 25,000 (one-time)
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card >

                    {/* Investments Card */}
                    < Card className={`flex flex-col h-full select-none cursor-pointer outline outline-blue-500 outline-2 outline-offset-4`}>
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                                <IndianRupee className="h-6 w-6 text-primary" />
                                <CardTitle className="text-2xl">Investment Management</CardTitle>
                            </div>
                            <CardDescription className="text-base">
                                Let our experts grow your wealth with our guaranteed minimum 8% monthly returns
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-sm md:text-md text-muted-foreground mb-4">
                                We allocate 20% of your investment for active trading while keeping 80% secure. Our investment approach guarantees you'll always maintain at least 80% of your initial capital while earning a minimum of 8% profit monthly on your total investment.
                            </p>
                            <ul className="gap-y-2 mb-4 text-sm md:text-md">
                                <li className="flex items-start gap-2">
                                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                        <ArrowRight className="h-3 w-3 text-primary" />
                                    </div>
                                    <span>Guaranteed minimum 8% monthly returns on total investment</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                        <ArrowRight className="h-3 w-3 text-primary" />
                                    </div>
                                    <span>We only take 5% of profits generated - not your principal</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                        <ArrowRight className="h-3 w-3 text-primary" />
                                    </div>
                                    <span>80% of your investment always kept secure</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <div className={`p-3 rounded-lg w-full bg-blue-500/50`}>
                                <p className="text-md md:text-lg font-bold text-center">
                                    Minimum Investment:{" "}
                                    <span className="text-md md:text-lg">
                                        <IndianRupee className="h-4 w-4 inline-block" /> 1,00,000
                                    </span>
                                </p>
                            </div>
                        </CardFooter>
                    </Card >
                </div >

                <Button asChild className='px-8 py-4 md:px-12 md:py-8 md:text-2xl font-bold w-fit mt-8'><Link href="/services">Learn More</Link></Button>
            </div>
        </div>
    )
}

export default Services