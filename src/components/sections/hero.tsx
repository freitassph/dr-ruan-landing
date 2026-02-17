"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DOCTOR, HERO_CONTENT } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, GraduationCap, Globe } from "lucide-react";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Parallax transforms — ONLY for desktop
    const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, isMobile ? 1 : 0]);

    return (
        <section
            id="inicio"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
        >
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#0D3D3D_0%,_#051818_100%)]" />

                {/* Animated Orbs — Reduced on mobile */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] rounded-full bg-gold/5 blur-[60px] lg:blur-[80px] will-change-transform"
                />
                <motion.div
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] rounded-full bg-primary-light/10 blur-[40px] lg:blur-[60px] will-change-transform"
                />

                {/* Subtle Dot Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none">
                    <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#D4AF37" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#dot-grid)" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto pt-24 pb-32 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left: Typography — NO parallax on mobile */}
                <motion.div
                    style={isMobile ? {} : { y: y1 }}
                    className="lg:col-span-8 flex flex-col justify-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-gold-400" />
                        <span className="text-gold-400 font-sans text-sm tracking-[0.2em] uppercase">
                            Neurocirurgia Avançada
                        </span>
                    </motion.div>

                    {/* Headline - Fluid Typography */}
                    <div className="overflow-hidden py-8 -my-8 pr-4 pl-1">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="font-serif font-medium leading-[1.1] text-white tracking-tight
                                       text-4xl xs:text-5xl sm:text-[3.75rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem]"
                        >
                            {HERO_CONTENT.headline} <br />
                            <span className="text-gold italic font-normal pb-6 pr-4 inline-block -mb-6 tracking-tight drop-shadow-sm">
                                {HERO_CONTENT.headlineHighlight}
                            </span>
                        </motion.h1>
                    </div>

                    {/* Sub */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-white/70 max-w-xl md:max-w-2xl font-light leading-relaxed border-l-2 border-gold/30 pl-4 sm:pl-6"
                    >
                        Especialista pela <strong className="text-white font-medium">USP-RP</strong> e com fellowship na <strong className="text-white font-medium">Itália</strong>, Dr. Ruan combina a técnica mais avançada da neurocirurgia com um olhar atento e humano para cada paciente.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            href={DOCTOR.whatsapp}
                            className="h-14 sm:h-16 px-8 sm:px-10 text-base rounded-full shadow-gold-glow hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.6)] active:scale-95 transition-all duration-300 w-full sm:w-auto justify-center"
                            icon={MessageCircle}
                        >
                            Agendar Consulta
                        </Button>

                        <a
                            href="#sobre"
                            className="group h-14 sm:h-16 px-6 sm:px-8 flex items-center justify-center sm:justify-start gap-3 text-white transition-all hover:text-gold active:scale-95 duration-300 w-full sm:w-auto rounded-full border border-transparent hover:border-white/5 bg-white/0 hover:bg-white/5"
                        >
                            <span className="text-base font-medium tracking-wide">Conheça o Dr. Ruan</span>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </a>
                    </motion.div>

                    {/* Mobile Authority Badges */}
                    <div className="mt-12 flex flex-col sm:flex-row gap-6 lg:hidden border-t border-white/10 pt-8 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0 shadow-lg">
                                <GraduationCap size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-white font-serif text-lg leading-none mb-1">USP-RP</p>
                                <p className="text-white/40 text-xs font-light tracking-wide uppercase">Neurocirurgia</p>
                            </div>
                        </motion.div>

                        <div className="hidden sm:block w-[1px] h-12 bg-white/10" />

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0 shadow-lg shadow-gold/5">
                                <Globe size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-gold font-serif text-lg leading-none mb-1">Fellowship</p>
                                <p className="text-white/40 text-xs font-light tracking-wide uppercase">Nápoles, Itália</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right: Floating Glass Cards — Desktop only */}
                <motion.div
                    style={isMobile ? {} : { y: y2 }}
                    className="lg:col-span-4 relative h-[600px] hidden lg:block"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="absolute top-20 right-0 z-20"
                    >
                        <div className="w-64 backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-2xl">
                            <div className="h-10 w-10 bg-gold/20 rounded-full flex items-center justify-center mb-4 text-gold">
                                <GraduationCap size={20} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-white font-serif text-2xl">USP-RP</h3>
                            <p className="text-white/50 text-sm mt-1">Formação de Excelência</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                        className="absolute bottom-40 -left-10 z-30"
                    >
                        <div className="w-72 backdrop-blur-md bg-gold/10 border border-gold/20 p-6 rounded-2xl shadow-2xl">
                            <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center mb-4 text-gold">
                                <Globe size={20} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-gold font-serif text-2xl">Internacional</h3>
                            <p className="text-white/60 text-sm mt-1">Fellowship em Nápoles</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator — Desktop only */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
        </section>
    );
}
