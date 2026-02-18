"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    dark?: boolean;
}

// Animação suave para desktop — sem y transform para evitar reflow
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export function Section({ id, className, children, dark = false }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={sectionVariants}
            className={cn(
                "relative py-20 px-6 md:px-12 overflow-hidden",
                dark ? "bg-primary text-white" : "bg-surface-cream text-primary",
                className
            )}
        >
            <div className="mx-auto max-w-7xl">{children}</div>
        </motion.section>
    );
}

export function SectionTitle({
    children,
    highlight,
    centered = true,
    light = false,
}: {
    children: React.ReactNode;
    highlight?: string;
    centered?: boolean;
    light?: boolean;
}) {
    return (
        <h2
            className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6",
                centered && "text-center",
                light ? "text-white" : "text-primary"
            )}
        >
            {children}{" "}
            {highlight && <span className="text-gold">{highlight}</span>}
        </h2>
    );
}

export function SectionSubtitle({
    children,
    centered = true,
    light = false,
}: {
    children: React.ReactNode;
    centered?: boolean;
    light?: boolean;
}) {
    return (
        <p
            className={cn(
                "text-lg md:text-xl max-w-3xl mb-12 leading-relaxed",
                centered && "text-center mx-auto",
                light ? "text-white/70" : "text-slate-500"
            )}
        >
            {children}
        </p>
    );
}
