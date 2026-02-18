"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { DOCTOR } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "@/components/layout/menu-context";

export function WhatsAppFAB() {
    const { isMobileMenuOpen } = useMenu();

    return (
        <AnimatePresence>
            {!isMobileMenuOpen && (
                <motion.a
                    key="fab"
                    href={DOCTOR.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar consulta pelo WhatsApp"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="fixed bottom-6 right-6 z-[998] w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-gold via-[#E6C65C] to-gold text-primary shadow-gold-glow flex items-center justify-center"
                    style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
                >
                    <MessageCircle className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                </motion.a>
            )}
        </AnimatePresence>
    );
}
