"use client";

import React from "react";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
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
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            className="group relative overflow-hidden rounded-3xl p-8 sm:p-10 border border-white/5 bg-white/5 lg:hover:bg-white/[0.07] transition-[background-color,border-color] duration-300 ease-out"
                        >
                            {/* Blur Effect - Completely disabled below Desktop to avoid flickers */}
                            <div className="hidden xl:block absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-[100px] group-hover:bg-gold-400/10 transition-colors duration-1000 pointer-events-none -translate-y-1/2 translate-x-1/2" />

                            {/* Editorial Number - Hidden on mobile to avoid rendering flickers */}
                            <span className="hidden sm:block absolute -top-4 -right-2 sm:-top-6 sm:-right-4 text-[60px] sm:text-[100px] font-serif font-bold text-white/[0.04] leading-none pointer-events-none select-none z-0 tracking-tighter">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            <div className="h-full flex flex-col justify-between relative z-10 gap-6 sm:gap-0">
                                <div className="flex justify-between items-start">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold lg:group-hover:bg-gold lg:group-hover:text-primary transition-[background-color,color] duration-500">
                                        <Icon size={28} className="sm:w-8 sm:h-8" strokeWidth={1} />
                                    </div>
                                    {/* Arrow icon only visual on desktop hover */}
                                    <ArrowUpRight className="text-white/20 lg:group-hover:text-gold transition-colors duration-500 hidden xl:block" />
                                </div>

                                <div>
                                    <h3 className="font-serif font-medium text-white mb-3 sm:mb-4 lg:group-hover:text-gold transition-colors duration-500 text-xl sm:text-2xl">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base lg:group-hover:text-white/80 transition-colors duration-500">
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
