"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, MessageCircle } from "lucide-react";
import { NAV_LINKS, DOCTOR } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useMenu } from "@/components/layout/menu-context";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMenu();

    useEffect(() => {
        // Threshold de 100px — evita "flicker" ao rolar levemente
        const handleScroll = () => setIsScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[999] flex flex-col justify-end"
            style={{
                height: "calc(5rem + env(safe-area-inset-top))",
            }}
        >
            {/*
              CAMADA DE FUNDO — absolute inset-0 cobre TODA a área do header
              incluindo atrás do notch. Transição suave com duration-500.
            */}
            <div
                className={cn(
                    "absolute inset-0 z-0 transition-all duration-500 ease-in-out",
                    isScrolled
                        ? "opacity-100 bg-primary/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.05)] border-b border-white/5"
                        : "opacity-0"
                )}
            />

            {/* CONTEÚDO */}
            <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4 h-20 shrink-0">

                {/* Logo */}
                <Link
                    href="/#inicio"
                    className="flex items-center gap-3 group relative z-50 shrink-0"
                    aria-label="Ir ao início"
                >
                    <div className="flex flex-col justify-center">
                        <p className="text-sm md:text-base font-serif font-bold text-white tracking-wide leading-none whitespace-nowrap drop-shadow-sm">
                            Dr. Ruan Krubniki
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gold/90 font-medium leading-none mt-[3px]">
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
                            className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 relative group py-2"
                        >
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                    <Button
                        variant="primary"
                        size="sm"
                        href={DOCTOR.whatsapp}
                        className="ml-4 shadow-gold-glow"
                        icon={MessageCircle}
                    >
                        Agendar Consulta
                    </Button>
                </nav>

                {/* Mobile Hamburger — Aumentado para 56px touch target */}
                <button
                    className="lg:hidden relative z-50 w-14 h-14 flex flex-col justify-center items-center gap-[6px] focus:outline-none cursor-pointer active:scale-95 transition-transform"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Abrir menu"
                >
                    <span className="w-6 h-[1.5px] bg-white block transition-all duration-300 pointer-events-none" />
                    <span className="w-4 h-[1.5px] bg-white/70 block ml-auto transition-all duration-300 pointer-events-none" />
                    <span className="w-6 h-[1.5px] bg-white block transition-all duration-300 pointer-events-none" />
                </button>
            </div>

            {/* ══════════════════════════════════════════════
                 MENU MOBILE — Fullscreen (cobre TODA a tela)
                ══════════════════════════════════════════════ */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="fixed top-0 left-0 right-0 bottom-0 z-[9999] lg:hidden overflow-hidden"
                    >
                        {/* FUNDO: cobre 100% da tela */}
                        <div className="absolute inset-0 bg-primary-dark" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,_rgba(198,161,48,0.07)_0%,_transparent_100%)] pointer-events-none" />
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                        {/* CONTEÚDO: safe-area padding */}
                        <div
                            className="relative z-10 flex flex-col h-full"
                            style={{
                                paddingTop: "env(safe-area-inset-top)",
                                paddingBottom: "env(safe-area-inset-bottom)",
                                paddingLeft: "env(safe-area-inset-left)",
                                paddingRight: "env(safe-area-inset-right)",
                            }}
                        >
                            {/* Botão Fechar — Aumentado para 56px touch target */}
                            <div className="flex items-center justify-end px-4 sm:px-6 h-20 shrink-0">
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-14 h-14 flex items-center justify-center text-white/50 hover:text-gold transition-all duration-200 rounded-full active:scale-95 cursor-pointer"
                                    aria-label="Fechar menu"
                                >
                                    <X size={28} strokeWidth={1.5} className="pointer-events-none" />
                                </button>
                            </div>

                            {/* Links */}
                            <nav className="flex-1 flex flex-col items-center justify-center gap-0 px-8">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.04 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                                        className="w-full"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-center py-4 text-2xl sm:text-3xl font-serif text-white/80 hover:text-white active:text-gold transition-colors duration-150 tracking-wide"
                                        >
                                            {link.label}
                                        </Link>
                                        {i < NAV_LINKS.length - 1 && (
                                            <div className="w-8 h-px bg-white/8 mx-auto" />
                                        )}
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.35 }}
                                    className="mt-10 w-full max-w-xs"
                                >
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        href={DOCTOR.whatsapp}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full justify-center text-base py-5 rounded-full shadow-gold-glow"
                                        icon={MessageCircle}
                                    >
                                        Agendar Consulta
                                    </Button>
                                </motion.div>
                            </nav>

                            {/* Rodapé do Menu */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                                className="py-6 text-center shrink-0"
                            >
                                <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-medium">
                                    {DOCTOR.clinic.city} • {DOCTOR.clinic.state}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
