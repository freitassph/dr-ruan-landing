import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { MenuProvider } from "@/components/layout/menu-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

import type { Viewport } from "next";

export const viewport: Viewport = {
    themeColor: "#0D3D3D",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover", // Extend page behind notch/Dynamic Island
};

export const metadata: Metadata = {
    title: {
        default: "Dr. Ruan Krubniki Ferraz | Neurocirurgia de Excelência",
        template: "%s | Dr. Ruan Krubniki Ferraz"
    },
    description: "Neurocirurgião especialista com formação USP e experiência internacional. Tratamento avançado para cirurgia de coluna, tumores cerebrais e Parkinson em Gurupi-TO.",
    keywords: ["Neurocirurgião", "Gurupi", "Tocantins", "Cirurgia de Coluna", "Parkinson", "DBS", "Tumores Cerebrais", "Dr. Ruan Krubniki"],
    authors: [{ name: "Dr. Ruan Krubniki Ferraz" }],
    creator: "Agência AIOS",
    metadataBase: new URL('https://drruankrubnik.vercel.app'),
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://drruankrubnik.vercel.app",
        title: "Dr. Ruan Krubniki | Neurocirurgião",
        description: "Neurocirurgia avançada com formação USP e fellowship internacional. Cuidado humano e tecnologia de ponta.",
        siteName: "Dr. Ruan Krubniki",
        images: [{
            url: "/dr-ruan.jpg",
            width: 1200,
            height: 630,
            alt: "Dr. Ruan Krubniki"
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dr. Ruan Krubniki | Neurocirurgião",
        description: "Neurocirurgia de Excelência em Gurupi-TO.",
        images: ["/dr-ruan.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={cn(
                "min-h-screen bg-primary font-sans antialiased text-white selection:bg-gold selection:text-primary",
                inter.variable,
                playfair.variable
            )}>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `history.scrollRestoration = "manual"`,
                    }}
                />
                <MenuProvider>
                    <SmoothScroll>
                        {children}
                    </SmoothScroll>
                </MenuProvider>
                <CookieBanner />
            </body>
        </html>
    );
}
