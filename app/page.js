import Navbar from "@/components/app/Navbar";
import Hero from "@/components/app/Hero";

export default function Home() {
  return (
    <div className="h-dvh w-full flex flex-col overflow-y-auto gap-8">
      <Navbar />
      <div className="flex flex-col p-8 justify-center md:text-lg">
        <Hero />
      </div>
    </div>
  );
}
