import Navbar from "@/components/app/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PrivacyPolicy from "@/components/app/PrivacyPolicy";
import TermsAndConditions from "@/components/app/TermsAndConditions";

const LegalPage = () => {
  return (
      <div className="h-dvh w-full flex flex-col overflow-y-auto gap-8">
          <Navbar />
          <div className="flex flex-col p-8 justify-center items-center">
              <Tabs defaultValue="privacy-policy" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="privacy-policy" className="text-xs sm:text-sm">Privacy Policy</TabsTrigger>
                      <TabsTrigger value="terms-and-conditions" className="text-xs sm:text-sm">Terms & Conditions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="privacy-policy"><PrivacyPolicy /></TabsContent>
                  <TabsContent value="terms-and-conditions"><TermsAndConditions /></TabsContent>
              </Tabs>
          </div>
      </div>
  );
}

export default LegalPage