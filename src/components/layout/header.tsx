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
                "fixed top-0 left-0 right-0 z-[999] transition-colors duration-300 border-b border-transparent h-20 flex items-center",
                isScrolled
                    ? "bg-primary/95 backdrop-blur-md border-white/5 shadow-lg"
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
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#D4AF37" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                        className="w-7 h-[2px] block origin-center transition-all duration-300"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#ffffff" }}
                        className="w-5 h-[2px] block ml-auto transition-all duration-300 group-hover:w-7"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: "#D4AF37" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                        className="w-7 h-[2px] block origin-center transition-all duration-300"
                    />
                </button>
            </div>

            {/* Premium Fullscreen Mobile Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0.2 } }}
                        className="fixed top-0 left-0 w-full h-dvh z-[9999] bg-slate-950 lg:hidden flex flex-col justify-center items-center overflow-y-auto py-20"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
                            aria-label="Fechar menu"
                        >
                            <X size={32} />
                        </button>

                        {/* Background Decor */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)] pointer-events-none" />

                        <nav className="flex flex-col items-center gap-8 relative z-50 w-full px-6">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl sm:text-4xl font-serif text-white hover:text-gold transition-colors block text-center"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8"
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    href={DOCTOR.whatsapp}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-12 text-lg w-full sm:w-auto"
                                >
                                    Agendar Agora
                                </Button>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-12 text-center"
                            >
                                <p className="text-white/40 text-xs uppercase tracking-widest">
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
