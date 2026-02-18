"use client";

import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { ReactLenis, LenisRef } from 'lenis/react'
import { usePathname } from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const lenisRef = useRef<LenisRef>(null)

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Desabilitar Lenis em mobile/tablet via stop() — sem re-mount da árvore
    useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis) return;

        const isMobile = window.innerWidth < 1024;
        if (isMobile) {
            lenis.stop(); // Para o smooth scroll sem desmontar
        } else {
            lenis.start();
        }

        const handleResize = () => {
            const mobile = window.innerWidth < 1024;
            if (mobile) lenis.stop();
            else lenis.start();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
        >
            {children}
        </ReactLenis>
    )
}
