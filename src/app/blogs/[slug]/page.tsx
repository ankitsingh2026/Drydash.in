'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Container from '@/components/common/container';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import { CalendarBlankIcon, ShareNetworkIcon, CaretLeftIcon } from '@phosphor-icons/react';

// export async function generateStaticParams() {
//   return [
//     { slug: "why-choose-drydash" },
//     { slug: "laundry-tips" },
//     { slug: "fabric-care-guide" }
//   ];
// }

const BlogSlugPage = () => {
    const params = useParams();
    const slug = params?.slug as string;
    const [activeSection, setActiveSection] = useState<string>("");

    const sections = useMemo(() => [
        { id: "what-matters", title: "What really matters?" },
        { id: "what-makes-different", title: "So, what makes Drydash different?" },
        { id: "experience-side", title: "The experience side (where most services fail)" },
        { id: "smart-approach", title: "Smart and modern approach" },
        { id: "final-thought", title: "Final thought" }
    ], []);

    const activeIndex = useMemo(() =>
        sections.findIndex(s => s.id === activeSection),
        [activeSection, sections]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -75% 0px',
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
        <main className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-fixed min-h-screen text-white pt-24 pb-20 relative overflow-x-hidden">

            {/* ── REFINED SCROLL-SPY SIDEBAR (Responsive 2xl) ── */}
            <aside className="hidden lg:block fixed top-32 right-8 xl:right-16 2xl:right-24 w-[280px] 2xl:w-[320px] z-20">
                <div className="flex flex-col gap-8">
                    <h4 className="text-[14px] 2xl:text-[16px] font-bold text-white tracking-wide">On this page</h4>

                    <div className="relative flex gap-6">
                        {/* Vertical Progress Line */}
                        <div className="relative w-[1.5px] bg-white/10 shrink-0 h-full min-h-[300px]">
                            {/* Sliding Active Indicator */}
                            {activeIndex !== -1 && (
                                <motion.div
                                    className="absolute left-0 w-full bg-white z-10"
                                    initial={false}
                                    animate={{
                                        top: `${(activeIndex / sections.length) * 100}%`,
                                        height: `${100 / sections.length}%`
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-6 py-0">
                            {sections.map((section) => {
                                const isActive = activeSection === section.id;
                                return (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={`block text-[13px] 2xl:text-[14px] transition-all duration-500 transform ${isActive
                                            ? "text-white font-semibold translate-x-1"
                                            : "text-[#8a928e] font-medium hover:text-white/60"
                                            }`}
                                    >
                                        <div className="py-0.5">{section.title}</div>
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </aside>

            <Container className="relative">
                {/* ── CENTERED CONTENT COLUMN (Responsive 2xl Width) ── */}
                <div className="w-full max-w-[800px] 2xl:max-w-[950px] mx-auto px-4 md:px-0">

                    {/* ── BACK NAVIGATION ── */}
                    <div className="mb-12">
                        <Link
                            href="/blogs"
                            className="group inline-flex items-center gap-2 text-[#8a928e] hover:text-[#03D391] transition-colors text-sm 2xl:text-base font-medium"
                        >
                            <CaretLeftIcon size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Blogs
                        </Link>
                    </div>

                    {/* ── ARTICLE CONTENT ── */}
                    <article className="space-y-16 md:space-y-20 2xl:space-y-24">

                        {/* ── HERO SECTION ── */}
                        <header className="space-y-8">
                            <h1 className="text-3xl md:text-3xl 2xl:text-5xl font-black leading-tight tracking-tight">
                                Why Choose Drydash Over Other Cleaners?
                            </h1>

                            <div className="space-y-6">
                                <p className="text-sm md:text-md 2xl:text-xl text-white/90 font-medium leading-relaxed md:w-[70%] w-full">
                                    Choosing a laundry or dry cleaning service isn’t just about getting clothes cleaned. It’s about trust, convenience, and consistency.
                                </p>
                                <p className="text-sm md:text-md 2xl:text-xl text-[#8a928e] md:w-[70%] w-full">
                                    Let’s break it down simply.
                                </p>
                            </div>

                            {/* Metadata & Actions */}
                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between py-8 border-y border-white/5 md:w-[80%] w-full">
                                <div className="flex items-center gap-4 text-[#8a928e] text-xs md:text-sm font-medium">
                                    <div className="flex items-center gap-2">
                                        <CalendarBlankIcon size={20} className="text-[#03D391]" />
                                        <span>March 3, 2026</span>
                                    </div>
                                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                    <span>6 min read</span>
                                </div>
                                <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2.5 rounded-full text-xs font-semibold transition-all active:scale-95">
                                    <ShareNetworkIcon size={18} />
                                    Share Post
                                </button>
                            </div>
                        </header>

                        {/* ── CONTENT SECTIONS ── */}

                        {/* Section 1: What Matters */}
                        <InView viewOptions={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                            <section id="what-matters" className="space-y-8 scroll-mt-32">
                                <h2 className="text-2xl 2xl:text-3xl font-bold">What really matters when choosing a cleaner?</h2>
                                <p className="text-md 2xl:text-lg text-[#8a928e] leading-relaxed">
                                    Before comparing brands, it helps to understand what people actually care about:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Will my clothes come back in good condition?",
                                        "Can I rely on them every time?",
                                        "Is the process easy and convenient?",
                                        "Is it worth the price?"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#03D391] mt-2.5 shrink-0"></div>
                                            <span className="text-sm md:text-base 2xl:text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-md md:text-lg text-[#03D391] font-medium italic border-l-2 border-[#03D391]/30 pl-6 py-1 md:w-[80%] w-full">
                                    Drydash is built around answering these exact questions — clearly and consistently.
                                </p>
                            </section>
                        </InView>

                        {/* Section 2: What makes Drydash Different */}
                        <InView viewOptions={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                            <section id="what-makes-different" className="space-y-12 pt-8 border-t border-white/5 scroll-mt-32">
                                <div className="space-y-4">
                                    <h2 className="text-3xl 2xl:text-4xl font-black">So, what makes Drydash different?</h2>
                                </div>

                                <div className="space-y-16 2xl:space-y-20">
                                    {/* 1. Quality */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl 2xl:text-2xl font-bold flex gap-4">
                                            <span className="text-[#03D391]">1.</span> Quality you can actually notice
                                        </h3>
                                        <p className="text-[#8a928e] leading-relaxed 2xl:text-lg">
                                            Drydash focuses on precision cleaning, not just basic washing. Every garment is:
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4 pl-0 md:w-[80%] w-full">
                                            {["Inspected before cleaning", "Treated based on fabric type", "Finished with attention to detail"].map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-white/70 bg-white/5 p-4 rounded-xl border border-white/5">
                                                    <div className="w-1 h-1 bg-[#03D391] rounded-full shrink-0"></div>
                                                    <span className="text-[13px] 2xl:text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-sm text-[#8a928e]">
                                            This means your clothes don’t just look clean — they feel well cared for.
                                        </p>
                                    </div>

                                    {/* 2. More than just laundry */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl 2xl:text-2xl font-bold flex gap-4">
                                            <span className="text-[#03D391]">2.</span> More than just laundry
                                        </h3>
                                        <p className="text-[#8a928e] leading-relaxed 2xl:text-lg">
                                            Most services stop at washing and ironing. Drydash goes further. You get access to:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:w-[80%] w-full">
                                            {["Alterations and repairs", "Shoe cleaning", "Premium fabric care"].map((item, idx) => (
                                                <div key={idx} className="bg-[#111111]/80 backdrop-blur-sm border border-white/5 px-4 py-4 rounded-xl text-[12px] 2xl:text-[13px] font-bold text-white/90 text-center hover:border-[#03D391]/30 transition-colors ">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm text-[#8a928e]">Everything in one place — no need to go elsewhere.</p>
                                    </div>

                                    {/* 3. Built for convenience */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl 2xl:text-2xl font-bold flex gap-4">
                                            <span className="text-[#03D391]">3.</span> Built for convenience
                                        </h3>
                                        <p className="text-[#8a928e] leading-relaxed 2xl:text-lg">
                                            Laundry shouldn’t take effort. Drydash simplifies everything with:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-[80%] w-full">
                                            {[
                                                { t: "Doorstep pickup", d: "At your time" },
                                                { t: "Online booking", d: "Click away" },
                                                { t: "Real-time tracking", d: "Live updates" }
                                            ].map((item, idx) => (
                                                <div key={idx} className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10 text-center group hover:bg-[#03D391]/5 transition-colors">
                                                    <div className="text-white font-black text-[13px] 2xl:text-[15px] mb-1">{item.t}</div>
                                                    <div className="text-[10px] 2xl:text-[11px] text-[#8a928e] uppercase tracking-wider">{item.d}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm text-[#8a928e]">You don’t adjust your schedule — the service adjusts to you.</p>
                                    </div>

                                    {/* 4. Faster turnaround */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl 2xl:text-2xl font-bold flex gap-4">
                                            <span className="text-[#03D391]">4.</span> Faster turnaround
                                        </h3>
                                        <p className="text-[#8a928e] leading-relaxed 2xl:text-lg">
                                            Waiting days for your clothes isn’t practical. Drydash offers:
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center gap-3 bg-[#03D391]/10 text-[#03D391] px-5 py-2.5 rounded-full border border-[#03D391]/20 font-black text-[11px] 2xl:text-[12px] uppercase tracking-widest">
                                                24-Hour turnaround
                                            </div>
                                            <div className="flex items-center gap-3 bg-white/5 text-[#8a928e] px-5 py-2.5 rounded-full border border-white/10 font-black text-[11px] 2xl:text-[12px] uppercase tracking-widest">
                                                Quick routine service
                                            </div>
                                        </div>
                                    </div>

                                    {/* 5. Fair and flexible pricing */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl 2xl:text-2xl font-bold flex gap-4">
                                            <span className="text-[#03D391]">5.</span> Fair and flexible pricing
                                        </h3>
                                        <p className="text-[#8a928e] leading-relaxed 2xl:text-lg md:w-[80%] w-full">Good service shouldn’t feel overpriced. Drydash keeps things simple with competitive rates, package options, and regular discounts for regular users.</p>
                                    </div>
                                </div>
                            </section>
                        </InView>

                        {/* Section 3: Experience Side */}
                        <InView viewOptions={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                            <section id="experience-side" className="space-y-12 pt-16 border-t border-white/5 scroll-mt-32">
                                <div>
                                    <h2 className="text-3xl 2xl:text-4xl font-black mb-4 tracking-tight">The experience side</h2>
                                    <p className="text-[#8a928e] font-medium leading-relaxed italic 2xl:text-lg">...where most services fail.</p>
                                </div>

                                <div className="space-y-16">
                                    <div className="space-y-8">
                                        <h3 className="text-xl 2xl:text-2xl font-bold flex gap-4">
                                            <span className="text-[#03D391]">6.</span> Customer support that actually responds
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-[80%] w-full">
                                            {["Quick replies", "Clear communication", "Problems handled without delays"].map((item, idx) => (
                                                <div key={idx} className="flex flex-col items-center text-center">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#03D391] mb-4"></div>
                                                    <div className="text-[13px] 2xl:text-[15px] font-bold text-white/80">{item}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm text-[#8a928e] text-center 2xl:text-base">No chasing. No confusion.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl 2xl:text-2xl font-bold flex gap-4">
                                            <span className="text-[#03D391]">7.</span> Consistency and trust
                                        </h3>
                                        <p className="text-[#8a928e] leading-relaxed 2xl:text-lg md:w-[80%] w-full">
                                            A lot of cleaners focus only on the “cleaning” part. Drydash builds trust through reliable service every time, transparent processes, and no hidden surprises.
                                        </p>
                                        <p className="text-sm font-medium text-white/70 2xl:text-base">
                                            You know what to expect — and you get it.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </InView>

                        {/* Section 4: Smart Approach */}
                        <InView viewOptions={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                            <section id="smart-approach" className="space-y-8 pt-16 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-3xl 2xl:text-4xl font-black tracking-tight">Smart and modern approach</h2>
                                <h3 className="text-xl 2xl:text-2xl font-bold flex gap-4">
                                    <span className="text-[#03D391]">8.</span> Tech-driven system
                                </h3>
                                <p className="text-[#8a928e] leading-relaxed 2xl:text-lg md:w-[80%] w-full">
                                    Drydash uses modern systems for seamless booking, order tracking, and delivery updates. It feels smooth because it’s designed that way.
                                </p>
                            </section>
                        </InView>

                        {/* Section 5: Final Thought */}
                        <InView viewOptions={{ once: true }} variants={{ hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}>
                            <section id="final-thought" className="bg-[#111111] p-12 md:p-16 2xl:p-20 rounded-[48px] border border-white/10 text-center shadow-2xl relative overflow-hidden scroll-mt-32 md:w-[80%] w-full">
                                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent to-transparent opacity-30"></div>
                                <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black mb-6 tracking-tight">Final thought</h2>
                                <p className="text-lg md:text-xl text-white/90 max-w-xl 2xl:max-w-3xl mx-auto leading-relaxed font-medium">
                                    Drydash isn’t just about cleaning clothes. It’s about making the entire process effortlessly and reliable.
                                </p>
                            </section>
                        </InView>

                    </article>
                </div>
            </Container>
        </main>
    );
};

export default BlogSlugPage;