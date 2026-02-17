"use client";

import React from "react";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { Brain, Activity, Baby, Zap, Microscope, Bone, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
    Vertebrae: Bone,
    Brain,
    Activity,
    Baby,
    Zap,
    Microscope,
};

export function ServicesSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <Section id="especialidades" dark className="bg-primary-dark py-24 sm:py-32 lg:py-40">
            <SectionTitle highlight="Especialidades" light centered>
                Áreas de{" "}
            </SectionTitle>
            <SectionSubtitle light>
                Expertise completa em neurocirurgia moderna, do diagnóstico ao
                acompanhamento pós-operatório, com técnicas de ponta e abordagem humanizada.
            </SectionSubtitle>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 auto-rows-auto sm:auto-rows-[320px] max-w-6xl mx-auto">
                {SERVICES.map((service, i) => {
                    const Icon = iconMap[service.icon] || Brain;

                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: shouldReduceMotion ? 0 : i * 0.1,
                                duration: shouldReduceMotion ? 0 : 0.8,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="group relative overflow-hidden rounded-3xl p-10 border border-white/5 bg-white/5 hover:bg-white/[0.07] transition-all duration-700 ease-[0.22,1,0.36,1] cursor-default"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-[100px] group-hover:bg-gold-400/10 transition-colors duration-1000 pointer-events-none -translate-y-1/2 translate-x-1/2 will-change-transform" />

                            {/* Editorial Number */}
                            <span className="absolute -top-6 -right-4 text-[100px] font-serif font-bold text-white/[0.04] leading-none pointer-events-none select-none z-0 tracking-tighter">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            <div className="h-full flex flex-col justify-between relative z-10">
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:scale-105 group-hover:bg-gold group-hover:text-primary transition-all duration-500 ease-[0.22,1,0.36,1]">
                                        <Icon size={32} strokeWidth={1} />
                                    </div>
                                    <ArrowUpRight className="text-white/20 group-hover:text-gold transition-colors duration-500" />
                                </div>

                                <div>
                                    <h3 className="font-serif font-medium text-white mb-4 group-hover:text-gold transition-colors duration-500 text-2xl">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 font-light leading-relaxed text-base transition-colors duration-500 group-hover:text-white/80">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}
