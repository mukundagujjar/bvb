import Link from "next/link"

const TermsAndConditions = () => {
    return (
        <div>
            <blockquote className="mt-6 border-l-2 pl-6 italic">Last updated: March 01, 2025</blockquote><br />

            Please read these Terms and Conditions carefully before using the Service operated by Bulls v/s Bears.<br /><br />

            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.<br /><br />

            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.<br /><br />

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">Interpretation and Definitions</h2><br />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Interpretation</h3><br />
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.<br /><br />

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Definitions</h3><br />
            For the purposes of these Terms and Conditions:
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Agency means Bulls v/s Bears, also referred to as "BvB", "BvB365", "We", "Us" or "Our" in this Agreement.</li>
                <li>Account means a unique account created for You to access our Service or parts of our Service.</li>
                <li>Service refers to the investment management services provided by Bulls v/s Bears.</li>
                <li>Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and Bulls v/s Bears regarding the use of the Service.</li>
                <li>Website refers to Bulls v/s Bears, accessible from our official website.</li>
                <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                <li>Investment refers to the funds provided by You to Bulls v/s Bears for the purpose of trading and investment activities.</li>
            </ul>

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">Agency Information</h2><br />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Management and Responsibility</h3><br />
            Bulls v/s Bears is managed solely by an individual named Vasudev Kittur, also known as Anurodh Kittur. Any responsibility pertaining to the workings of this agency depends on him. We are not SEBI certified and are not affiliated with any other organization.<br /><br />

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">Investment Terms</h2><br />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Investment Risk Disclosure</h3><br />
            Investments are subject to market risk. You should be financially responsible and should invest amounts based on your own discretion and research. While we will definitely try and provide consistent and good returns, it cannot be guaranteed. Past performance is not indicative of future results.<br /><br />

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Investment Lock-in Period</h3><br />
            The amount invested will be subject to lock-in period of 3 months from the date of investment, except under circumstances described in the Account Termination section below. After this 3-month period, you may retrieve your investment value as per your requirement. The current value of your investment will be determined based on the performance of the investments made on your behalf. If however, any need arises to withdraw the amount invested before the 3-month period, you will be subject to a 20% penalty on the total invested amount or the current value of your investment, whichever is higher.<br /><br />

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Risk Allocation</h3><br />
            Of the amount invested, 20% of the amount should be considered as risk capital, as it may be used for high volatility trading including but not limited to Indian futures and options, Forex, and other similar instruments. We can assure you that since only 20% of the original amount will be at risk initially, the minimum value of your investment will always be close to 80% of the initially invested amount, subject to normal market conditions.<br /><br />

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Payment Methods</h3><br />
            Payments will be made directly to Vasudev Kittur/Anurodh Kittur. In the future, we may implement direct payment methods through our website, at which time these Terms will be updated accordingly.<br /><br />

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">Accounts</h2><br />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Account Eligibility</h3><br />
            We maintain the right to reject any investment applications or terminate your account from our platform at our sole discretion. We may require verification of identity and other information before accepting investments.<br /><br />

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Account Termination</h3><br />
            If your account is terminated by us, the balance mapped to your account will be paid back to you within a reasonable time frame, usually within 30 business days, depending on market conditions and liquidity of investments.<br /><br />

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">Limitation of Liability</h2><br />
            To the maximum extent permitted by applicable law, in no event shall Bulls v/s Bears, its managers, agents, or affiliates be liable for any indirect, punitive, incidental, special, consequential damages, or any damages whatsoever including, without limitation, damages for loss of use, data, or profits, arising out of or in any way connected with the use or performance of the Service.<br /><br />

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">Governing Law</h2><br />
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.<br /><br />

            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.<br /><br />

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">Changes to Terms</h2><br />
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.<br /><br />

            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.<br /><br />

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">Contact Us</h2><br />
            If you have any questions about these Terms, please contact us:<br />
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>By visiting our contact page: <Link href="/contact" className="cursor-pointer underline underline-offset-4">/contact</Link></li>
            </ul>
        </div>
    )
}

export default TermsAndConditions