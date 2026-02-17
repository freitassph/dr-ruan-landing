"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    // Mouse position state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the cursor
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);

        // Add listeners to all clickable elements
        const elements = document.querySelectorAll("a, button, [role='button']");
        elements.forEach(el => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            elements.forEach(el => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gold pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 2.5 : 1,
                }}
            />
            {/* Outer Ring (lagging slightly behind) */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/50 pointer-events-none z-[9998] transition-opacity duration-300",
                    isHovering ? "opacity-0" : "opacity-100"
                )}
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: -8,
                    translateY: -8,
                }}
                transition={{ type: "spring", mass: 0.5 }} // Slight lag
            />
        </>
    );
}
