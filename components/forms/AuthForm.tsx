"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {DefaultValues, FieldValues, Path, SubmitHandler, useForm} from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import ROUTES from "@/constants/route";

interface AuthFormProps<T extends FieldValues> {
    schema: z.ZodType<T>,
    defaultValues: T,
    onSubmit: (data: T) => Promise<{success: boolean}>,
    formType: "SIGN_UP" | "SIGN_IN"
}

const AuthForm = <T extends FieldValues>({
    schema, defaultValues, onSubmit, formType }: AuthFormProps<T>) => {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>
    });

    const handleSubmit: SubmitHandler<T> = async (data: z.infer<typeof schema>) => {
        //TODO: Authenticate user
    }

    const buttonText = formType === "SIGN_UP" ? "Sign Up" : "Sign In";

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-7 space-y-6">
                {
                    Object.keys(defaultValues).map(field => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full gap-2">
                                    <FormLabel className="paragraph-medium text-dark400_light700">
                                        {field.name == 'email' ? "Email Address" : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                                    </FormLabel>
                                    <FormControl>
                                        <Input type={field.name == "password" ? "password" : "text"} {...field}
                                            className="
                                            paragraph-regular
                                            background-light900_dark300 light-border-2
                                            text-dark300_light700 no-focus min-h-12
                                            rounded-1.5 border
                                            "
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))
                }
                <Button
                    disabled={form.formState.isSubmitting}
                    className="w-full primary-gradient paragraph-medium min-h-12 px-4 py-3 rounded-2 font-inter !text-light-900"
                >
                    {form.formState.isSubmitting ? buttonText == "Sign In" ? "Signing In..." : "Signing Up..." : buttonText}
                </Button>
                {
                    formType === "SIGN_IN" ? (<p>
                        Don't have an account? {" "} <Link href={ROUTES.SIGN_UP} className="paragraph-semibold primary-text-gradient">Sign Up</Link>
                    </p>) : (<p>
                        Already have an account? {" "} <Link href={ROUTES.SIGN_IN} className="paragraph-semibold primary-text-gradient">Sign In</Link>
                    </p>)
                }
            </form>
        </Form>
    )
}

export default AuthForm;


