"use client";

import React from "react";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { DIFFERENTIALS } from "@/lib/constants";
import { Heart, Cpu, Users, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
    Heart,
    Cpu,
    Users,
    CalendarCheck,
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeInItem = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

export function DifferentialsSection() {
    return (
        <Section id="diferenciais">
            <SectionTitle highlight="nos escolher">
                Por que{" "}
            </SectionTitle>
            <SectionSubtitle>
                Nosso compromisso vai além da técnica cirúrgica. Combinamos excelência
                médica com cuidado genuíno para oferecer a melhor experiência.
            </SectionSubtitle>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {DIFFERENTIALS.map((diff) => {
                    const Icon = iconMap[diff.icon] || Heart;
                    return (
                        <motion.div key={diff.title} variants={fadeInItem}>
                            <Card className="h-full text-center group">
                                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-5 group-hover:border-gold/40 transition-colors">
                                    <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-serif font-bold text-primary mb-3">
                                    {diff.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {diff.description}
                                </p>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
}
