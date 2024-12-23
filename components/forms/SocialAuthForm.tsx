"use client";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {toast} from "@/hooks/use-toast";
import {signIn} from "next-auth/react";
import ROUTES from "@/constants/route";


const SocialAuthForm = () => {

    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 m-h-12 flex-1 rounded-2 px-4 py-3.5";

    const handleSignIn = async (provider: "github" | "google")=>{
        try {
                await signIn(provider, {
                    callbackUrl: ROUTES.HOME,
                    redirect: false,
                });
        }catch (e){
            console.log(e);

            toast({
                title: "Sign In Failed",
                description: e instanceof Error ? e.message : "An error occurred",
                variant: "destructive"
            })
        }
    }


    return (
        <div className="mt-5 flex flex-wrap gap-2.5">
            <Button className={buttonClass} onClick={() => handleSignIn("github")}>
                <Image
                    src="icons/github.svg"
                    width={20} height={20} alt="Github"
                    className="invert-colors mr-2.5 object-contain"
                />
                <span>Login with github</span>
            </Button>

            <Button className={buttonClass} onClick={() => handleSignIn("google")}>
                <Image
                    src="icons/google.svg"
                    width={20} height={20} alt="Google Logo"
                    className="mr-2.5 object-contain"
                />
                <span>Login with google</span>
            </Button>

        </div>
    );
}

export default SocialAuthForm;