import Navbar from "@/components/app/Navbar";
import Hero from "@/components/app/Hero";
// import HowItWorks from "@/components/app/HowWeWork";
import { Separator } from "@/components/ui/separator";
export default function Home() {
  return (
    <div className="h-dvh w-full flex flex-col overflow-y-auto">
      <Navbar />
      <div className="flex flex-col justify-center md:text-lg p-8 gap-8 md:gap-20">
        <Hero />
        {/* <Separator/>
        <HowItWorks/> */}
      </div>
    </div>
  );
}
