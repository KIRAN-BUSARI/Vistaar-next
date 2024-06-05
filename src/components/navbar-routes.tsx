"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isAdmin = pathname?.startsWith("/admin");
    const isPlayer = pathname?.includes("/chapter")
    // const isUser = pathname?.includes("/user");
    return (
        <div className="flex gap-x-2 ml-auto">
            {isAdmin || isPlayer ? (
                <Link href={"/"}>
                    <Button size={"sm"} variant={"ghost"}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            ) : (
                <Link href={'/admin/courses'}>
                    <Button size={"sm"} variant={"ghost"}>
                        Admin Mode
                    </Button>
                </Link>
            )}
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}