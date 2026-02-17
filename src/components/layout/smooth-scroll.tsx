"use client";

import React, { useLayoutEffect, useState, useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isDesktop, setIsDesktop] = useState(false);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const checkDesktop = () => {
            // Only enable Lenis on large screens (desktop)
            // Do NOT use 'ontouchstart' check — MacBooks have it too
            setIsDesktop(window.innerWidth >= 1024);
        };
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    // Mobile & Tablet: Native scroll (best UX)
    // Desktop: Lenis smooth scroll (elegant)
    if (!isDesktop) {
        return <>{children}</>;
    }

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
            {children}
        </ReactLenis>
    )
}
