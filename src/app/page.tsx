import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { DifferentialsSection } from "@/components/sections/differentials";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <DifferentialsSection />
                <ContactSection />
                <FAQSection />
            </main>
            <Footer />
            <WhatsAppFAB />
        </>
    );
}
