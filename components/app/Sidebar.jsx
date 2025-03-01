"use client"

import { useState } from 'react';
import SidebarItem from "@/components/app/SidebarItem";
import { Settings, Menu, X, ShipWheel, ChartLine, Shell } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { SignOut } from '@/lib/auth-utils';
import { Separator } from '@/components/ui/separator';
import { useRouter } from "next/navigation";
import Image from 'next/image';

const routes = [
    {
        name: "Investments",
        href: "/investments",
        icon: <ShipWheel className="h-4 w-4" />
    },
    {
        name: "Growth Tracker",
        href: "/growth-tracker",
        icon: <ChartLine className="h-4 w-4" />
    },
    // {
    //     name: "Circle of Control",
    //     href: "/circle-of-control",
    //     icon: <Shell className="h-4 w-4" />
    // },
    {
        name: "Settings",
        href: "/settings",
        icon: <Settings className="h-4 w-4" />
    }
];

const Sidebar = () => {

    const router = useRouter();

    const handleLogout = async (event) => {
        // event.preventDefault();

        // Call the SignOut action
        // await SignOut();

        // Redirect to home page
        router.push("/");
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
        <>
            {/* Mobile Hamburger Menu */}
            <div className={`lg:hidden fixed top-4 left-4 z-10 ${isSidebarOpen ? 'hidden' : ''}`}>
                <Button variant="outline" size="icon" onClick={toggleSidebar}>
                    <Menu className="h-4 w-4" />
                </Button>
            </div>

            {/* Sidebar */}
            <div className={`
                fixed lg:relative
                h-full 
                lg:w-1/5 w-60
                bg-background
                transition-transform duration-300 ease-in-out
                lg:translate-x-0
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                flex flex-col p-4 gap-5
                border-r
                z-40
            `}>
                {/* Close Button (Mobile Only) */}
                <div className="lg:hidden absolute top-2 right-2">
                    <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                <div className="w-full hidden lg:flex items-center justify-center rounded-lg bg-muted py-1">
                    <Image src="bvb-navbar.svg" alt="logo" width={"200"} height={"200"} />
                </div>

                {/* Routes */}
                <div className="w-full flex flex-col items-center justify-center gap-4 overflow-y-auto mt-10 lg:mt-0">
                    {routes.map((route, index) => (
                        <SidebarItem
                            key={index}
                            href={route.href}
                            name={route.name}
                            icon={route.icon}
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    ))}
                </div>

                <div className="w-full mt-auto">
                    <form action={handleLogout}>
                        <Button variant="outline" className="w-full cursor-pointer">
                            Logout
                        </Button>
                    </form>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 lg:hidden z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </>
    )
}

export default Sidebar