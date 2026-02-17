"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DOCTOR } from "@/lib/constants";
import { MapPin, Phone, Clock, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
    return (
        <section id="contato" className="relative py-20 sm:py-32 bg-primary overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
            <div className="absolute bottom-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gold/5 rounded-full blur-[100px] sm:blur-[150px] translate-y-1/2 translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left: Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left"
                >
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 sm:mb-8">
                        Pronto para <br />
                        <span className="text-gold italic">cuidar de você?</span>
                    </h2>
                    <p className="text-white/60 text-base sm:text-lg font-light max-w-md mx-auto lg:mx-0 mb-10 sm:mb-12 leading-relaxed">
                        Agende sua consulta e tenha acesso ao que há de mais avançado em neurocirurgia e cuidado humanizado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start justify-center lg:justify-start">
                        <Button
                            variant="primary"
                            size="lg"
                            href={DOCTOR.whatsapp}
                            className="w-full sm:w-auto py-6 sm:py-8 text-base sm:text-lg shadow-gold-glow"
                            icon={MessageCircle}
                        >
                            Agendar via WhatsApp
                        </Button>
                    </div>
                </motion.div>

                {/* Right: Contact Card (Floating) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-gold/20 transition-colors duration-500"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[60px] pointer-events-none" />

                    <h3 className="text-white font-serif text-2xl mb-8 relative z-10">Informações de Contato</h3>

                    <div className="space-y-8 relative z-10">
                        <div className="flex gap-5 sm:gap-6 group/item">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                <MapPin size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Endereço</p>
                                <p className="text-white text-base sm:text-lg font-medium leading-snug">{DOCTOR.clinic.address}</p>
                                <p className="text-white/50 text-sm mt-1">{DOCTOR.clinic.name}</p>
                            </div>
                        </div>

                        <div className="flex gap-5 sm:gap-6 group/item">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                <Clock size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Horário</p>
                                <p className="text-white text-base sm:text-lg font-medium leading-snug">{DOCTOR.clinic.hours}</p>
                                <p className="text-white/50 text-sm mt-1">Segunda a Sexta</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                        <a
                            href={DOCTOR.clinic.mapUrl}
                            target="_blank"
                            rel="noopener"
                            className="flex items-center justify-between text-white hover:text-gold transition-colors group/link w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5"
                        >
                            <span className="font-medium text-sm sm:text-base">Ver localização no Google Maps</span>
                            <ArrowRight className="group-hover/link:translate-x-1 transition-transform text-gold" size={18} />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
