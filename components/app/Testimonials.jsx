import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Testimonials = () => {
    return (
        <div className="flex flex-col w-full justify-center gap-8 items-center">
            <div className="flex flex-col w-full px-4 lg:w-3/4 mx-auto gap-8">
                <h2 className="text-4xl font-bold text-center">Testimonials</h2>


                <div className="px-5 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <figure key={num} className="mb-4 break-inside-avoid w-full">
                            <Image
                                src={`/testimonials/t${num}.jpg`}
                                alt={`Testimonial ${num}`}
                                width={500}
                                height={500}
                                className="w-full h-auto rounded-lg"
                            />
                        </figure>
                    ))}
                </div>

            </div>
            <Button className="md:px-12 md:py-8 px-8 py-4 md:text-2xl font-bold select-none cursor-pointer " asChild>
                <Link href="/contact">Contact us</Link>
            </Button>
        </div>
    );
};

export default Testimonials;