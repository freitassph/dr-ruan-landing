"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Brain, MessageCircle } from "lucide-react";
import { NAV_LINKS, DOCTOR } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Use Next.js Link for optimization

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <header
            className={cn(
                "absolute lg:fixed top-0 left-0 right-0 z-[999] transition-colors duration-300 border-b border-transparent h-20 flex items-center",
                isScrolled
                    ? "lg:bg-primary/95 lg:backdrop-blur-md lg:border-white/5 lg:shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="w-full mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between gap-8">

                {/* Logo Area */}
                <Link href="/#inicio" className="flex items-center gap-3 group relative z-50 shrink-0" aria-label="Ir ao início">

                    <div className="hidden sm:flex flex-col justify-center">
                        <p className="text-sm md:text-base font-serif font-bold text-white tracking-wide leading-none whitespace-nowrap">
                            Dr. Ruan Krubniki
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium leading-none mt-0.5">
                            Neurocirurgia
                        </p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10" aria-label="Navegação principal">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-white hover:tracking-widest transition-all duration-300 relative group py-2"
                        >
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" href={DOCTOR.whatsapp} className="ml-4 shadow-gold-glow" icon={MessageCircle}>
                        Agendar Consulta
                    </Button>
                </nav>

                {/* Mobile Menu Toggle (Animated) */}
                <button
                    className="lg:hidden relative z-50 w-12 h-12 flex flex-col justify-center items-center group gap-1.5 focus:outline-none rounded-full hover:bg-white/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Abrir menu"
                >
                    <motion.span
                        animate={{ rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                        className="w-7 h-[2px] block origin-center transition-all duration-300 group-hover:w-8"
                    />
                    <motion.span
                        animate={{ opacity: 1, backgroundColor: "#ffffff" }}
                        className="w-5 h-[2px] block ml-auto transition-all duration-300 group-hover:w-7"
                    />
                    <motion.span
                        animate={{ rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                        className="w-7 h-[2px] block origin-center transition-all duration-300 group-hover:w-8"
                    />
                </button>
            </div>

            {/* Premium Fullscreen Mobile Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%", transition: { duration: 0.3 } }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[9999] bg-primary lg:hidden flex flex-col overflow-hidden h-[100dvh] overscroll-none"
                    >
                        {/* Header do Menu Mobile (Botão Fechar) */}
                        <div className="flex items-center justify-end p-6 h-20 border-b border-white/5">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 -mr-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10"
                                aria-label="Fechar menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* Conteúdo do Menu (com Scroll se necessário) */}
                        <nav className="flex-1 flex flex-col items-center justify-center gap-6 overflow-y-auto w-full px-6 py-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl sm:text-3xl font-serif text-white hover:text-gold transition-colors block py-2"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 w-full flex justify-center"
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    href={DOCTOR.whatsapp}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full max-w-xs text-center justify-center text-lg py-6"
                                >
                                    Agendar Agora
                                </Button>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-auto pt-8 text-center pb-8"
                            >
                                <p className="text-white/30 text-xs uppercase tracking-widest">
                                    {DOCTOR.clinic.city} &bull; {DOCTOR.clinic.state}
                                </p>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
