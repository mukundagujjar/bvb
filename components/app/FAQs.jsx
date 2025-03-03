import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questions = [
    {
        id: 1, title: "How much money will I have to invest?", content: "The minimum investment amount is ₹1,00,000. You can invest more if you wish to. We will charge a 5% commission on the profits generated for you - not on your total investment. The investment is subject to a recommended lock-in period of 3 months for optimal returns.",
    },
    {
        id: 2, title: "What does 20% risk mean?", content: "When you invest with us, 20% of your investment amount is allocated as risk capital used for active trading to generate profits. You should consider this 20% as risk capital that will be used in perpetuity for trading activities. The remaining 80% is kept secure. We guarantee that your account will always maintain at least 80% of your original investment regardless of market conditions. Any profits generated through our trading activities will be added on top of this secure 80%.",
    },
    {
        id: 3, title: "How do you make money?", content: "We charge a 5% commission only on the profits generated from your investment, not on your entire investment amount. This means we only make money when you make money. We do not charge any fees if no profits are generated. This aligned incentive structure ensures we are committed to growing your investment.",
    },
    {
        id: 4, title: "What if I want to withdraw my money before the lock-in period?", content: "We recommend a lock-in period of 3 months to ensure we can deliver optimal returns. If you withdraw before completing this period, you will only receive 80% of your original investment. The 20% allocated as risk capital will not be returned as it is committed to active trading strategies.",
    },
    {
        id: 5, title: "Do you guarantee monthly returns?", content: "We guarantee a minimum of 8% profit per month (calculated on your total initial investment). Our traders are experienced and have a proven track record of delivering consistent returns. There are instances where we have provided clients with single-day returns of up to 150%. While our average returns have been around 30%, please remember that all investments are subject to market risk. We are not SEBI registered, and you should invest your money wisely.",
    },
    {
        id: 6, title: "How do I track my investments?", content: "We provide you with a dashboard where you can track your investments and the performance of the trades made on your behalf. The dashboard is updated regularly to give you visibility into your portfolio's growth and current value.",
    },
    {
        id: 7, title: "What other services do you offer besides investment management?", content: "Besides managing investments on your behalf, we offer live trading sessions where you can join us via Google Meet and receive real-time trading calls. You can observe our trading process and learn firsthand. We also offer a comprehensive coaching package that includes three months of free live sessions, teaching you our strategies and methodologies.",
    },
    {
        id: 8, title: "Whom can I contact in case of a query/concern regarding my investment?", content: "You can contact us via our contact page or WhatsApp us directly at +91-7709203276.",
    }
]

const FAQs = () => {
    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex flex-col w-full px-4 lg:w-3/4 mx-auto gap-8">
                <h2 className="text-4xl font-bold text-center">FAQs</h2>
                {/* Desktop View */}
                <div className="flex flex-col w-full">
                    <Accordion type="multiple">
                        {questions.map((question) => (
                            <AccordionItem key={question.id} value={question.id}>
                                <AccordionTrigger className="text-lg md:text-xl font-bold">{question.title}</AccordionTrigger>
                                <AccordionContent className="md:text-lg">{question.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default FAQs