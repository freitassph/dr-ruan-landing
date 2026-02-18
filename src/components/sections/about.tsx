"use client";

import React from "react";
import NextImage from "next/image";
import { Section, SectionTitle } from "@/components/ui/section";
import { ABOUT_CONTENT } from "@/lib/constants";
import { GraduationCap, Award, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
    GraduationCap,
    Award,
    Globe,
    Shield,
};

export function AboutSection() {
    return (
        <Section id="sobre" className="relative overflow-hidden py-32 bg-surface-cream">
            {/* Editorial Layout Wrapper */}
            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative z-10">

                {/* Left: Sticky Image Area */}
                <div className="w-full max-w-md mx-auto lg:max-w-none lg:w-5/12 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="sticky top-0 lg:top-32"
                    >
                        {/* Image Frame */}
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl bg-slate-200">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-20" />

                            {/* Doctor's Photo - Optimized */}
                            <NextImage
                                src="/dr-ruan.jpg"
                                alt="Dr. Ruan Krubniki Ferraz - Neurocirurgião"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
                                quality={90}
                                loading="lazy"
                            />

                            {/* Floating Name Overlay */}
                            <div className="absolute bottom-8 left-8 z-30">
                                <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Neurocirurgião</p>
                                <h3 className="text-white font-serif text-2xl sm:text-3xl leading-tight">
                                    Dr. Ruan Krubniki Ferraz
                                </h3>
                            </div>
                        </div>


                        {/* Decorative Elements - Hidden on mobile to prevent overflow/wobble */}
                        <div className="hidden sm:block absolute -bottom-10 -right-10 w-40 h-40 border border-gold/30 rounded-full z-0" />
                        <div className="hidden sm:block absolute -top-10 -left-10 w-20 h-20 border border-primary/10 rounded-full z-0" />
                    </motion.div>
                </div>

                {/* Right: Editorial Content */}
                <div className="lg:w-7/12 flex flex-col justify-start mt-12 lg:-mt-3">
                    <SectionTitle highlight={ABOUT_CONTENT.sectionTitleHighlight} centered={false}>
                        {ABOUT_CONTENT.sectionTitle}
                    </SectionTitle>

                    <div className="space-y-6 sm:space-y-8">


                        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                            {ABOUT_CONTENT.bio.map((p: string, i: number) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        {/* Credentials - Horizontal Scroll / Grid */}
                        <div className="pt-8 sm:pt-10 border-t border-primary/5">
                            <h5 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-6">Formação & Credenciais</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-4">
                                {ABOUT_CONTENT.credentials.map((cred: { icon: string; value: string; label: string }, i: number) => {
                                    const Icon = iconMap[cred.icon] || Award;
                                    return (
                                        <div key={i} className="flex items-center gap-4 group p-2 rounded-xl hover:bg-white/50 transition-colors">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gold transition-colors duration-500 shrink-0">
                                                <Icon size={20} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <p className="text-primary font-serif text-base sm:text-lg leading-tight mb-1">{cred.value}</p>
                                                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">{cred.label}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
