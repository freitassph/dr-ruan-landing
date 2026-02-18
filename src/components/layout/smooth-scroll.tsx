"use client";

import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { ReactLenis, LenisRef } from 'lenis/react'
import { usePathname } from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(true); // Assume mobile first para segurança (sem FOUC de scroll)
    const lenisRef = useRef<LenisRef>(null)

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        // Detecção robusta de mobile
        const checkMobile = () => {
            const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 1024;
            setIsMobile(isTouch || isSmallScreen);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // SE FOR MOBILE: Retorna children puros. 
    // Zero JS de scroll, zero listeners, zero travamento.
    if (isMobile) {
        return <>{children}</>;
    }

    // Apenas Desktop ganha o Luxo do Smooth Scroll
    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={{
                lerp: 0.1,
                duration: 1.2,
                smoothWheel: true,
                touchMultiplier: 2,
            }}
        >
            {children}
        </ReactLenis>
    )
}
