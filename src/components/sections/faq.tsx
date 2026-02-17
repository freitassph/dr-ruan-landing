"use client";

import React, { useState } from "react";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { FAQ_CONTENT } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
    return (
        <Section id="faq" className="bg-surface-cream py-24 sm:py-32">
            <SectionTitle highlight="Dúvidas" centered>
                Agendamento &
            </SectionTitle>
            <SectionSubtitle centered>
                Entenda como funciona o nosso atendimento e prepare-se para sua consulta.
                Estamos aqui para facilitar sua jornada de saúde.
            </SectionSubtitle>

            <div className="mt-16 max-w-3xl mx-auto px-6">
                <div className="space-y-4">
                    {FAQ_CONTENT.map((item, index) => (
                        <AccordionItem key={index} question={item.question} answer={item.answer} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="border-b border-gray-100 last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
                aria-expanded={isOpen}
            >
                <span className={`text-lg sm:text-xl font-serif font-medium transition-colors duration-300 ${isOpen ? "text-gold" : "text-primary group-hover:text-gold"}`}>
                    {question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? (
                        <Minus className="w-5 h-5 text-gold" />
                    ) : (
                        <Plus className="w-5 h-5 text-primary/40 group-hover:text-gold" />
                    )}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-base text-slate-600 leading-relaxed max-w-prose">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
