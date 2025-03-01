import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactPage = () => {
    return (
        <div className="flex flex-col gap-8 md:text-lg">
            <p>For now, all dealings regarding payments and enquiries are done manually by directly contacting <span className="font-bold underline underline-offset-4">Vasudev Kittur</span> (our lead trader).</p>
            <p>You may contact him via the below links:</p>
            <div className="flex flex-col md:flex-row gap-4">
                <Button className="bg-[#26d367] hover:bg-[#26d367]/80 px-8 py-4 md:px-12 md:py-8 md:text-2xl font-bold w-fit" asChild>
                    <Link href="https://wa.me/917709203276?text=I%20am%20interested%20in%20your%20investment%20services" target="_blank">WhatsApp</Link></Button>
                <Button className="px-8 py-4 md:px-12 md:py-8 md:text-2xl font-bold w-fit" asChild>
                    <Link href="tel:+917709203276">Call</Link>
                </Button>
            </div>
        </div>
    );
}

export default ContactPage;