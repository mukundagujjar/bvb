import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questions = [
    {
        id: 1, title: "How much money will I have to invest?", content: "The minimum investment amount is ₹1,00,000. You can invest more if you wish to. We will charge a 20% commission on the profits made. The investment can be withdrawn after a lock-in period of 3 months.",
    },
    {
        id: 2, title: "What does 20% risk mean?", content: "When you invest a particular amount with us, we will majorly trade with 20% of that amount. This means that if you invest ₹1,00,000, we will trade with ₹20,000. This is to ensure that you do not lose all your money in case of a loss incurred during a volatile trading market. The remaining 80% will be used for relatively much safer investments and to regain profit in case of a loss on the riskier trades. But we'll always try and ensure to keep the minimum amount of your balance equal to or more than 80% of the initial investment.",
    },
    {
        id: 3, title: "Why do you get to keep 20% of the profits?", content: "We charge a 20% commission on the profits made to cover the costs of trading, maintaining the dashboard, and providing you with regular updates on your portfolio. This is to ensure that we can continue to provide you with the best service possible. Please remember that we only make money when you make money, since the 20% is part of the profits and not the entire investment. We do not charge any fees if you do not make a profit.",
    },
    {
        id: 4, title: "What if I want to withdraw my money before the lock-in period?", content: "The lock-in period ensures we can provide you with the best returns possible. If you wish to withdraw your investment before the lock-in period, you will be charged a 20% penalty on the total investment amount or on the current value of your investment, whichever is higher.",
    },
    {
        id: 5, title: "Do you guarantee monthly returns of at least 8%?", content: "Our traders are experienced and have a proven track record of delivering consistent returns. There are times we have provided people with a single day return of 150%. Our average returns have been around 30%. However, we cannot guarantee a fixed return every month. The returns are subject to market conditions and the performance of the trades made. We aim to provide you with the best returns possible, but please remember that all investments carry inherent risk.",
    },
    {
        id: 6, title: "How do I track my investments?", content: "We will provide you with a dashboard where you can track your investments and the performance of the trades made on your behalf. The dashboard will be updated regularly to provide you with the latest information on your portfolio.",
    },
    {
        id: 7, title: "Whom can I contact in case of a query/concern regarding my investment?", content: "You can contact us via our contact page or WhatsApp us directly at +91-7709203276.",
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