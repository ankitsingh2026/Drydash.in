'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Container from '@/components/common/container';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';

const PrivacyPolicyPage = () => {
    const [activeSection, setActiveSection] = useState<string>("");

    const sections = useMemo(() => [
        { id: "info-collect", title: "1. Information We Collect" },
        { id: "info-use", title: "2. How We Use Your Information" },
        { id: "payments-security", title: "3. Payments & Security" },
        { id: "location-info", title: "4. Location Information" },
        // { id: "third-party", title: "5. Third-Party Services" },
        { id: "rights", title: "5. Your Rights" },
        { id: "contact-us", title: "6. Contact Us" }
    ], []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <main className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-fixed min-h-screen text-white pt-24 pb-32">
            <Container>
                {/* ── HEADER ── */}
                <InView
                    viewOptions={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                >
                    <div className="flex flex-col md:items-center md:justify-center justify-start text-left md:text-center mb-16 gap-4">
                        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-black tracking-tight font-didot">
                            Privacy Policy
                        </h1>
                        <p className="text-sm md:text-md text-[#8a928e] font-medium">
                            Effective March 2026
                        </p>
                    </div>
                </InView>

                {/* ── MAIN CONTENT GRID ── */}
                <div className="relative grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] 2xl:grid-cols-[380px_1fr] gap-12 lg:gap-20">

                    {/* ── LEFT SIDE: QUICK NAVIGATION (Sticky) ── */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-40 space-y-10">
                            <div className="space-y-4">
                                <h4 className="text-[10px] 2xl:text-xs font-black uppercase tracking-[0.2em] text-[#8a928e]">Navigation</h4>
                                <nav className="flex flex-col gap-1 border-l border-white/5">
                                    {sections.map((section) => {
                                        const isActive = activeSection === section.id;
                                        return (
                                            <a
                                                key={section.id}
                                                href={`#${section.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className={`group flex items-center py-3 px-6 text-[13px] 2xl:text-[14px] font-medium transition-all duration-300 border-l-2 -ml-px ${isActive
                                                    ? "text-[#03D391] border-[#03D391] bg-[#03D391]/5"
                                                    : "text-[#8a928e] border-transparent hover:text-white/60 hover:bg-white/5"
                                                    }`}
                                            >
                                                {section.title}
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>

                            <div className="pt-10 border-t border-white/5">
                                <p className="text-[11px] text-[#8a928e] leading-relaxed">
                                    Need help with your data? <br />
                                    <a href="mailto:support@drydash.in" className="text-white hover:text-[#03D391] transition-colors">support@drydash.in</a>
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* ── RIGHT SIDE: POLICY CONTENT ── */}
                    <article className="space-y-20 lg:space-y-24 max-w-[850px]">

                        {/* Intro */}
                        <section className="space-y-6">
                            <p className="text-base md:text-lg text-[#8a928e] leading-relaxed italic">
                                At DryDash, we value your privacy. This policy explains how we collect, use, and protect your information when you use our laundry, shoe spa, and dry cleaning services.
                            </p>
                        </section>

                        {/* 1. Information We Collect */}
                        <section id="info-collect" className="scroll-mt-40 space-y-6 group">
                            <div className="space-y-2">
                                <span className="text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-[#03D391] opacity-60">Section 01</span>
                                <h2 className="text-2xl md:text-3xl font-bold group-hover:text-[#03D391] transition-colors">Information We Collect</h2>
                            </div>
                            <p className="text-md md:text-[17px] text-[#8a928e] leading-relaxed">
                                We may collect your name, phone number, address, precise and approximate location data (with your permission), and payment details to provide pickup, cleaning, and delivery services.
                            </p>
                        </section>

                        {/* 2. How We Use */}
                        <section id="info-use" className="scroll-mt-40 space-y-6 group">
                            <div className="space-y-2">
                                <span className="text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-[#03D391] opacity-60">Section 02</span>
                                <h2 className="text-2xl md:text-3xl font-bold group-hover:text-[#03D391] transition-colors">How We Use Your Information</h2>
                            </div>
                            <p className="text-md md:text-[17px] text-[#8a928e] leading-relaxed">
                                Your data is used to process orders, provide real-time tracking, send notifications, and improve our services. We do not sell your personal information.
                            </p>
                        </section>

                        {/* 3. Payments */}
                        <section id="payments-security" className="scroll-mt-40 space-y-6 group border-t border-white/5 pt-16 lg:pt-20">
                            <div className="space-y-2">
                                <span className="text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-[#03D391] opacity-60">Section 03</span>
                                <h2 className="text-2xl md:text-3xl font-bold group-hover:text-[#03D391] transition-colors">Payments & Security</h2>
                            </div>
                            <p className="text-md md:text-[17px] text-[#8a928e] leading-relaxed">
                                All payments are processed securely via trusted payment gateways. We implement industry-standard measures to protect your data.
                            </p>
                        </section>

                        {/* 4. Location Information (Main Detail) */}
                        <section id="location-info" className="scroll-mt-40 space-y-10 group">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <span className="text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-[#03D391] opacity-60">Section 04</span>
                                    <h2 className="text-3xl md:text-4xl font-bold group-hover:text-[#03D391] transition-colors tracking-tight">Location Information</h2>
                                </div>
                                <p className="text-md md:text-[18px] text-white/90 leading-relaxed font-medium">
                                    Our app collects and processes your device location data (precise and/or approximate location) with your permission to provide core services such as pickup, delivery, and order tracking.
                                </p>
                            </div>

                            <div className="space-y-6 bg-white/5 p-8 lg:p-10 rounded-3xl border border-white/5">
                                <h4 className="text-[14px] font-bold text-[#03D391] uppercase tracking-wide">Location data is used to:</h4>
                                <ul className="space-y-5">
                                    {[
                                        "Identify your pickup and delivery address",
                                        "Assign nearby service partners",
                                        "Provide real-time tracking and delivery updates"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-[#8a928e]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#03D391] mt-2.5 shrink-0" />
                                            <span className="text-[15px] md:text-base leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6 text-[#8a928e] leading-relaxed">
                                <p>
                                    We do not collect location data in the background or when the app is not in use. Location access is only used when required while using the app.
                                </p>
                                <p>
                                    Your location data is not sold to third parties. It may be shared only with trusted service partners strictly for the purpose of completing your service request.
                                </p>
                                <p className="pt-4 border-t border-white/5">
                                    You can enable or disable location access at any time through your device settings.
                                </p>
                            </div>
                        </section>

                        {/* 5. Third Party */}
                        {/* <section id="third-party" className="scroll-mt-40 space-y-6 group border-t border-white/5 pt-16 lg:pt-20">
                            <div className="space-y-2">
                                <span className="text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-[#03D391] opacity-60">Section 05</span>
                                <h2 className="text-2xl md:text-3xl font-bold group-hover:text-[#03D391] transition-colors">Third-Party Services</h2>
                            </div>
                            <p className="text-md md:text-[17px] text-[#8a928e] leading-relaxed">
                                We may use third-party services for payments, analytics, and notifications. These providers follow strict data protection standards.
                            </p>
                        </section> */}

                        {/* 6. Your Rights */}
                        <section id="rights" className="scroll-mt-40 space-y-6 group">
                            <div className="space-y-2">
                                <span className="text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-[#03D391] opacity-60">Section 05</span>
                                <h2 className="text-2xl md:text-3xl font-bold group-hover:text-[#03D391] transition-colors">Your Rights</h2>
                            </div>
                            <p className="text-md md:text-[17px] text-[#8a928e] leading-relaxed">
                                You can request access, correction, or deletion of your personal data anytime by contacting our support team.
                            </p>
                        </section>

                        {/* 7. Contact Us */}
                        <section id="contact-us" className="scroll-mt-40 space-y-8 bg-[#111111] p-10 lg:p-14 rounded-[32px] border border-white/5 text-center">
                            <div className="space-y-2">
                                <span className="text-[10px] 2xl:text-xs font-black uppercase tracking-widest text-[#03D391] opacity-60">Section 06</span>
                                <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
                            </div>
                            <p className="text-md text-[#8a928e] max-w-sm mx-auto leading-relaxed">
                                If you have any questions, reach out at:
                            </p>
                            <a
                                href="mailto:support@drydash.in"
                                className="inline-block text-xl md:text-2xl font-black text-white hover:text-[#03D391] transition-all underline underline-offset-8 decoration-[#03D391]/20 hover:decoration-[#03D391]"
                            >
                                support@drydash.in
                            </a>
                        </section>

                    </article>
                </div>
            </Container>
        </main>
    );
};

export default PrivacyPolicyPage;