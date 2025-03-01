import PageTitle from "@/components/app/PageTitle";

const InvestmentsPage = () => {
  return (
      <div className="flex flex-col h-full w-full gap-4 overflow-hidden">
          <PageTitle title="Investments" />
          <div className="flex flex-col p-4 overflow-auto bg-muted/50 rounded-lg h-full w-full">
              Investments
          </div>
      </div>
  );
}

export default InvestmentsPage