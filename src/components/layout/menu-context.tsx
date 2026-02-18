"use client";

import React, { createContext, useContext, useState } from "react";

interface MenuContextType {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
}

const MenuContext = createContext<MenuContextType>({
    isMobileMenuOpen: false,
    setIsMobileMenuOpen: () => { },
});

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <MenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    return useContext(MenuContext);
}
