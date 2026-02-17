"use client";

import React from "react";
import { Brain, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { DOCTOR, NAV_LINKS } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-primary-dark text-white/60 pt-16 pb-10 lg:pb-20"
            style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" }}
        >
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div>
                                <p className="text-base font-serif font-bold text-white">
                                    Dr. Ruan Krubniki Ferraz
                                </p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gold/80">
                                    Neurocirurgia
                                </p>
                                <p className="text-[10px] uppercase tracking-[0.1em] text-white/40 mt-1">
                                    {DOCTOR.crm} • {DOCTOR.rqe}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mt-4">
                            Neurocirurgião especialista com formação pela USP e experiência
                            internacional. Comprometido com excelência e humanização.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-serif font-semibold text-lg mb-4">
                            Navegação
                        </h3>
                        <nav className="flex flex-col gap-2" aria-label="Links do rodapé">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm hover:text-gold transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-serif font-semibold text-lg mb-4">
                            Contato
                        </h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href={DOCTOR.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
                                aria-label="Instagram do Dr. Ruan"
                            >
                                <Instagram className="w-4 h-4 text-gold" strokeWidth={1.5} />
                                @ruankferraz
                            </a>
                            <a
                                href={`tel:${DOCTOR.phone}`}
                                className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
                            >
                                <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
                                (63) 3190-0865
                            </a>
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
                                <span>{DOCTOR.clinic.name} — {DOCTOR.clinic.address}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-center md:text-left flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
                        <p>© {currentYear} {DOCTOR.name}. Todos os direitos reservados.</p>
                        <a href="/politica-de-privacidade" className="hidden sm:inline border-r border-white/20 h-3" aria-hidden="true" />
                        <a href="/politica-de-privacidade" className="hover:text-gold transition-colors underline decoration-white/30 underline-offset-4">
                            Política de Privacidade
                        </a>
                    </div>
                    <p className="text-xs text-center md:text-right">
                        Este site tem caráter informativo e não substitui uma consulta médica.
                    </p>
                </div>

                {/* Developer Credits */}
                <div className="mt-6 flex flex-col items-center justify-center gap-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
                        DESIGNED FOR EXCELLENCE
                    </p>
                    <a
                        href="https://instagram.com/freitas.lab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-gold hover:tracking-[0.3em] transition-all duration-300"
                    >
                        @FREITAS.LAB
                    </a>
                </div>
            </div>
        </footer>
    );
}
