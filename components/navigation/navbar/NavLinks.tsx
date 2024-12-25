"use client";

import {sidebarLinks} from "@/constants";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {SheetClose} from "@/components/ui/sheet";


type NavLinksProps = {
    isMobileNav?: boolean;
}

const NavLinks = ({isMobileNav = false}: NavLinksProps) => {
    const pathname = usePathname();
    return (
        <>
            {
                sidebarLinks.map((item) => {
                    const isActive = pathname.includes(item.route) && item.route.length > 1 || pathname === item.route;
                    const userId = 1;
                    if(item.route === "/profile"){
                        if(userId){
                            item.route = `${item.route}/${userId}`;
                        }
                        return null;
                    }
                    const LinkComponents = (
                        <Link href={item.route} key={item.label} className={cn(isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900", "flex items-center justify-start gap-2 bg-transparent p-2")}>
                            <img
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                                className={cn({"invert-colors": !isActive})}
                            />
                            <p className={cn(isActive ? "base-bold" : "base-medium", !isMobileNav && "max-lg:hidden")}>{item.label}</p>
                        </Link>
                    )
                return isMobileNav ? (
                    <SheetClose asChild key={item.route}>
                        {LinkComponents}
                    </SheetClose>
                ) : <div key={item.route}>
                    {LinkComponents}
                </div>;
                })
            }
        </>
    )
}

export default NavLinks;