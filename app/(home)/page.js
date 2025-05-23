import Testimonials from "@/components/app/Testimonials";
import Hero from "@/components/app/Hero";
import GetStarted from "@/components/app/GetStarted";
import { Separator } from "@/components/ui/separator";
import FAQs from "@/components/app/FAQs";
import Services from "@/components/app/Services";
export default function Home() {
  return (
      <div className="flex flex-col justify-center gap-8 md:gap-12">
        <Hero />
        <Separator/>
        <Services/>
        <Separator/>
        <GetStarted/>
        <Separator />
        <Testimonials/>
        <Separator />
        <FAQs/>
      </div>
  );
}
