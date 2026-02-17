"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, MessageCircle } from "lucide-react";
import { NAV_LINKS, DOCTOR } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
                "absolute lg:fixed top-0 left-0 right-0 z-[999] transition-all duration-300 border-b border-transparent flex items-end",
                isScrolled
                    ? "lg:bg-primary/95 lg:backdrop-blur-md lg:border-white/5 lg:shadow-lg"
                    : "bg-transparent"
            )}
            style={{
                paddingTop: "env(safe-area-inset-top)",
                minHeight: "calc(5rem + env(safe-area-inset-top))",
            }}
        >
            <div className="w-full mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between gap-8 h-20">

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

                {/* Mobile Menu Toggle (3 Linhas Animadas) */}
                <button
                    className="lg:hidden relative z-50 w-12 h-12 flex flex-col justify-center items-center group gap-1.5 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Abrir menu"
                >
                    <span className="w-7 h-[2px] bg-white block origin-center transition-all duration-300 group-hover:w-8" />
                    <span className="w-5 h-[2px] bg-white/70 block ml-auto transition-all duration-300 group-hover:w-7" />
                    <span className="w-7 h-[2px] bg-white block origin-center transition-all duration-300 group-hover:w-8" />
                </button>
            </div>

            {/* ═══════════════════════════════════════════
                 MENU MOBILE — Fullscreen Premium Overlay
                ═══════════════════════════════════════════ */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] lg:hidden"
                        style={{ height: "100dvh" }}
                    >
                        {/* Fundo sólido + gradiente premium */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-dark" />

                        {/* Decoração sutil — radial glow dourado */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(198,161,48,0.08)_0%,_transparent_60%)] pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(198,161,48,0.05)_0%,_transparent_50%)] pointer-events-none" />

                        {/* Linha dourada decorativa no topo */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                        {/* Conteúdo do Menu — Posição relativa */}
                        <div className="relative z-10 flex flex-col h-full">

                            {/* Barra Superior — Botão Fechar */}
                            <div
                                className="flex items-end justify-end px-6 md:px-12"
                                style={{
                                    paddingTop: "env(safe-area-inset-top)",
                                    minHeight: "calc(5rem + env(safe-area-inset-top))",
                                }}
                            >
                                <div className="h-20 flex items-center">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-12 h-12 flex items-center justify-center text-white/60 hover:text-gold transition-colors duration-300 rounded-full hover:bg-white/5"
                                        aria-label="Fechar menu"
                                    >
                                        <X size={28} strokeWidth={1.5} />
                                    </button>
                                </div>
                            </div>

                            {/* Links de Navegação — Centralizado verticalmente */}
                            <nav className="flex-1 flex flex-col items-center justify-center gap-1 px-8">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                                        className="w-full"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-center py-4 text-2xl sm:text-3xl font-serif text-white/90 hover:text-gold active:text-gold transition-colors duration-200 tracking-wide"
                                        >
                                            {link.label}
                                        </Link>
                                        {/* Separador sutil entre itens */}
                                        {i < NAV_LINKS.length - 1 && (
                                            <div className="w-12 h-[0.5px] bg-white/10 mx-auto" />
                                        )}
                                    </motion.div>
                                ))}

                                {/* CTA Principal */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                    className="mt-8 w-full max-w-xs"
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
                                transition={{ delay: 0.5 }}
                                className="py-8 text-center"
                                style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}
                            >
                                <p className="text-white/25 text-[10px] uppercase tracking-[0.3em] font-medium">
                                    {DOCTOR.clinic.city} • {DOCTOR.clinic.state}
                                </p>
                                <div className="w-8 h-[0.5px] bg-gold/20 mx-auto mt-3" />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
