import Sidebar from "@/components/app/Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-dvh w-full overflow-hidden">
            <Sidebar />

            <div className="flex flex-col h-dvh w-full overflow-hidden p-4">
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;