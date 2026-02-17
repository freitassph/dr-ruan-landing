"use client";

import React, { useLayoutEffect, useState, useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'


export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(true);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return <>{children}</>;
    }

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
            {children}
        </ReactLenis>
    )
}
