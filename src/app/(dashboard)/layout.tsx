import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";

const DashboardLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 z-50 w-full">
                <Navbar />
            </div>
            <div className="hidden md:flex flex-col h-full w-56 fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="md:pl-56 pt-[80px] h-full">
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;