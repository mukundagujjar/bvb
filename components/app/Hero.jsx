import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => (
    <section className="flex flex-col w-full lg:w-[90%] lg:flex-row items-center justify-center gap-10 lg:gap-0 mx-auto">
        <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-left w-full gap-8">

            <h1 className="text-4xl/14 md:text-6xl/24 font-black">Invest once,<br /><span className="bg-tertiary px-4 py-1 text-background">profit</span> always</h1>
            <p className="text-lg md:text-2xl font-extralight">Earn upto <span className="font-bold">8% - 10%<span className="text-sm align-super">*</span></span> returns on your investments on a monthly basis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-between">
                <Button className="md:px-12 md:py-8 px-8 py-4 md:text-2xl font-bold select-none cursor-pointer " asChild>
                    <Link href="/contact">Contact us</Link>
                    </Button>
                <Button variant="outline" asChild className="md:px-12 md:py-8 px-8 py-4 md:text-2xl font-bold select-none cursor-pointer"><Link href="/services">Learn more</Link></Button>
            </div>
            <p className="text-sm opacity-30">* - All returns are subject to market conditions. Please read our legal agreement carefully before any financial dealings and invest wisely.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full hidden lg:flex">
            <Image src="bvb-hero.svg" alt="hero" width={"450"} height={"450"} />
        </div>
    </section>
);

export default Hero;