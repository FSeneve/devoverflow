import React from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

type Props = {
    children: React.ReactNode;
}

const AuthLayout = ({children}: Props ) => {
    return (
        <main
            className="flex min-h-screen items-center
            justify-center bg-auth-light dark:bg-auth-dark
            bg-center bg-cover bg-no-repeat px-4 py-10">
            <section className="light-border background-light800_dark200
            shadow-light100_dark100
            min-w-full rounded-[10px] border px-4 py-10
            shadow-lg sm:min-w-[520px] sm:px-8
            ">
                <div className="flex justify-between items-center gap-2">
                    <div>
                        <h1 className="h2-bold text-dark100_light900">
                            Join DevFlow
                        </h1>
                        <p className="paragraph-regular text-dark500_light400">
                            To get your questions answered
                        </p>
                        <Image
                            src="images/site-logo.svg"
                            alt="DevFlow Logo"
                            width={50} height={50}
                            className="object-contain"
                        />
                    </div>
                </div>
                {children}
                <SocialAuthForm />
            </section>
        </main>
    )
}

export default AuthLayout;