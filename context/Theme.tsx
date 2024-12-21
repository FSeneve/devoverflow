"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider = ({children, ...props} : ThemeProviderProps)=>{
    return (
        <NextThemesProvider {...props}>
            {children}
        </NextThemesProvider>
    );
}

export default ThemeProvider;