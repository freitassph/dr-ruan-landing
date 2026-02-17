"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    className?: string;
    children: React.ReactNode;
    glass?: boolean;
    hover?: boolean;
}

export function Card({ className, children, glass = false, hover = true }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl p-6 md:p-8 transition-all duration-300",
                glass
                    ? "bg-white/10 backdrop-blur-xl border border-white/10"
                    : "bg-white border border-gold/10 shadow-sm",
                hover && "hover:-translate-y-1 hover:shadow-xl hover:border-gold/30",
                className
            )}
        >
            {children}
        </div>
    );
}
