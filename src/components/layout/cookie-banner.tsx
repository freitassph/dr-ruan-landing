"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            // Show after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-8 sm:right-8 z-[1000] sm:max-w-sm p-5 bg-white border border-primary/10 shadow-2xl rounded-xl"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface-cream flex items-center justify-center shrink-0 text-gold mt-1 sm:mt-0">
                            <Cookie className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-serif text-primary font-bold mb-1 text-sm">Uso de Cookies</h4>
                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa <a href="/politica-de-privacidade" className="text-primary font-semibold hover:underline underline-offset-2 transition-colors">Política de Privacidade</a>.
                            </p>
                            <div className="flex gap-2 sm:gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 sm:flex-none px-4 py-2.5 bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-primary-dark transition-colors"
                                >
                                    Aceitar
                                </button>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="flex-1 sm:flex-none px-4 py-2.5 text-primary/60 text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors border border-transparent hover:border-primary/10 rounded-lg"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
