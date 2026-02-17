"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "whatsapp";
    size?: "sm" | "md" | "lg";
    href?: string;
    icon?: React.ElementType;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    href,
    icon: Icon,
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-wider transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary:
            "bg-gradient-to-r from-gold via-[#E6C65C] to-gold text-primary shadow-gold-glow hover:scale-[1.02] hover:brightness-110 active:scale-95",
        secondary:
            "bg-primary text-white hover:bg-primary-light active:scale-95",
        outline:
            "border border-gold text-gold bg-transparent hover:bg-gold hover:text-primary active:scale-95",
        whatsapp:
            "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl active:scale-95 border-none", // Classic WP
    };

    const sizes = {
        sm: "px-5 py-2.5 text-xs rounded-full",
        md: "px-8 py-3.5 text-sm rounded-full",
        lg: "px-10 py-4 text-base rounded-full",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    const content = (
        <>
            {Icon && <Icon className={cn("w-5 h-5", size === "sm" && "w-4 h-4")} />}
            <span>{children}</span>
        </>
    );

    if (href) {
        // Se for link externo (http) ou âncora (#) com comportamento específico, usa <a>
        // Nota: Next/Link também lida bem com ancoras internas se configurado, mas para links externos puros é melhor <a>
        const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

        if (isExternal) {
            return (
                <a
                    href={href}
                    className={classes}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {content}
                </a>
            );
        }

        return (
            <Link href={href} className={classes}>
                {content}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {content}
        </button>
    );
}
