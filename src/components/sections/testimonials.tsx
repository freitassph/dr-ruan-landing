"use client";

import React from "react";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
    return (
        <Section id="depoimentos" className="bg-primary py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            <div className="absolute -left-20 top-40 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />

            <SectionTitle highlight="Nossos Pacientes" centered light>
                O que dizem
            </SectionTitle>
            <SectionSubtitle centered light>
                Histórias reais de quem confiou sua saúde e recuperação aos nossos cuidados.
                Acreditamos que a confiança é a base de todo tratamento.
            </SectionSubtitle>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                {TESTIMONIALS.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="h-full"
                    >
                        <Card className="h-full p-8 md:p-10 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 shadow-sm hover:shadow-lg transition-all duration-500 relative group flex flex-col justify-between backdrop-blur-sm">
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                                <Quote size={40} />
                            </div>

                            <div>
                                {/* Rating Stars (Symbolic) */}
                                <div className="flex gap-1 mb-6 text-gold text-xs">
                                    {[...Array(5)].map((_, stars) => (
                                        <span key={stars}>★</span>
                                    ))}
                                </div>

                                <p className="text-white/80 font-serif text-lg leading-relaxed italic mb-8 relative z-10">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-serif font-bold text-sm">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-white/50 uppercase tracking-wide mt-0.5">{testimonial.proc}</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-xs text-white/30 uppercase tracking-widest max-w-2xl mx-auto">
                    * Depoimentos reais anonimizados para preservar a identidade dos pacientes, em conformidade com as normas do CFM.
                </p>
            </div>
        </Section>
    );
}
