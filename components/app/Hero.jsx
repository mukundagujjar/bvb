import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const Hero = () => (
    <section className="flex flex-col w-full lg:w-[90%] lg:flex-row items-center justify-center gap-10 lg:gap-0 mx-auto">
        <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-left w-full gap-8">

            <h1 className="text-4xl/14 md:text-7xl/24 font-black">One payment,<br /><span className="bg-tertiary px-4 py-1 text-background">consistent</span> returns</h1>
            <p className="text-lg md:text-2xl font-extralight">Earn upto <span className="font-bold">8% - 10%<sup>*</sup></span> returns on your investments on a monthly basis
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-between">
                <Button className="md:px-12 md:py-8 px-8 py-4 md:text-2xl font-bold select-none cursor-pointer">Get Started</Button>
                <Button variant="outline" className="md:px-12 md:py-8 px-8 py-4 md:text-2xl font-bold select-none cursor-pointer">Already a member</Button>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full hidden lg:flex">

            <Image src="bvb-hero.svg" alt="hero" width={"450"} height={"450"} />

            {/* <div className="flex flex-col items-center justify-center w-full lg:relative">
                <Image src="/Shashank_Pic01.png" alt="hero" width={"450"} height={"450"} />
                <div className="flex flex-col items-center justify-center w-full lg:absolute lg:-bottom-36">
                    <h3 className="top-12 text-3xl font-black text-center bg-muted/40 px-4 py-2">Shashank Sangle</h3>
                    <p className="text-lg md:text-xl font-extralight text-center">Empowerment Coach • Based in Tokyo</p>
                    <Image src="/certified-coach.webp" alt="Jay Shetty Certified" width={"180"} height={"100"} className="mt-4" />
                </div>
            </div>
            <Separator className="lg:hidden mt-8 w-full" /> */}
        </div>
    </section>
);

export default Hero;