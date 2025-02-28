import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const Hero = () => (
    <section className="flex flex-col-reverse w-full lg:w-[80%] mx-auto lg:flex-row items-center justify-center p-8 lg:p-0 gap-10 lg:gap-0">
        <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-left w-full gap-8">

            <p className="text-xl md:text-2xl font-extralight">Turn your trials into triumphs</p>
            <h1 className="text-6xl/24 md:text-7xl/24 font-black">Forge your <br /><span className="bg-tertiary px-4 py-1 text-background">growth</span> story</h1>
            <div className="flex flex-col sm:flex-row gap-8 my-6 w-full justify-center lg:justify-start">
                <Button className="px-12 py-8 text-lg md:text-2xl font-bold select-none cursor-pointer">Get Started</Button>
                <Button variant="outline" className="px-12 py-8 text-lg md:text-2xl font-bold w-full select-none cursor-pointer">Already a member <MoveRight /></Button>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">

            <div className="flex flex-col items-center justify-center w-full lg:relative">
                <Image src="/Shashank_Pic01.png" alt="hero" width={"450"} height={"450"} />
                <div className="flex flex-col items-center justify-center w-full lg:absolute lg:-bottom-36">
                    <h3 className="top-12 text-3xl font-black text-center bg-muted/40 px-4 py-2">Shashank Sangle</h3>
                    <p className="text-lg md:text-xl font-extralight text-center">Empowerment Coach • Based in Tokyo</p>
                    <Image src="/certified-coach.webp" alt="Jay Shetty Certified" width={"180"} height={"100"} className="mt-4" />
                </div>
            </div>
            <Separator className="lg:hidden mt-8 w-full" />
        </div>
    </section>
);

export default Hero;