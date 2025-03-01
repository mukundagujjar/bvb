import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PrivacyPolicy from "@/components/app/PrivacyPolicy";
import TermsAndConditions from "@/components/app/TermsAndConditions";

const LegalPage = () => {
  return (       
      <div className="flex flex-col gap-8 md:text-lg">
              <Tabs defaultValue="privacy-policy">
                  <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="privacy-policy" className="text-xs sm:text-sm">Privacy Policy</TabsTrigger>
                      <TabsTrigger value="terms-and-conditions" className="text-xs sm:text-sm">Terms & Conditions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="privacy-policy"><PrivacyPolicy /></TabsContent>
                  <TabsContent value="terms-and-conditions"><TermsAndConditions /></TabsContent>
              </Tabs>
      </div>
  );
}

export default LegalPage