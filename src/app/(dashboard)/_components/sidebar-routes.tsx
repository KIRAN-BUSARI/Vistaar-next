"use client";

import { BarChart, Compass, Layout, List } from "lucide-react"
import { SidebarItem } from "./sidebar-item";
import { usePathname, useRouter } from "next/navigation";

const userRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    }
]

const adminRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/admin/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/admin/analytics",
    }
]

export const SidebarRoutes = () => {
    const pathname = usePathname();
    const isAdminPage = pathname?.includes("/admin")
    const routes = isAdminPage ? adminRoutes : userRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}