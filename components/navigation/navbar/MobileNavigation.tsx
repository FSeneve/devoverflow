import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/route";
import {Button} from "@/components/ui/button";
import NavLinks from "@/components/navigation/navbar/NavLinks";


const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image src="/icons/hamburger.svg"
                       alt="menu"
                       width={36}
                       height={36}
                       className="invert-colors sm:hidden"
                />
            </SheetTrigger>
            <SheetContent side="left" className="background-light900_dark200 border-none">
                <SheetTitle className="hidden">Navigation</SheetTitle>
                <Link href="/" className="flex items-center gap-1">
                    <Image src="/images/site-logo.svg" width={23} height={23} alt="Devflow Logo"/>
                    <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
                        Dev
                        <span className="text-primary-500">
                        Flow
                    </span>
                    </p>
                </Link>
                <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
                    <SheetClose asChild>
                        <section className="flex flex-col gap-3 h-full pt-6">
                            <NavLinks isMobileNav = {true} />
                        </section>
                    </SheetClose>
                    <div className="flex flex-col gap-3">
                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_IN}>
                                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3.5 shadow-none">
                                    <span className="primary-text-gradient">Sign In</span>
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_UP}>
                                <Button className="small-medium btn-tertiary light-border-2 border text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3.5 shadow-none">
                                    <span>Sign Up</span>
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>

    )
}

export default MobileNavigation;