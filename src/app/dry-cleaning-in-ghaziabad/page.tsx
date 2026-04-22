'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/common/container';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import {
    WhatsappLogo,
    CheckCircle,
    Truck,
    Clock,
    Leaf,
    Star,
    Quotes,
    User,
    ArrowUpRight,
    CaretRight
} from 'phosphor-react';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import DownloadBtn from '@/components/DownloadBtn/downloadBtn';
import { testimonialsRow2, TestimonialCard } from '@/components/landing/testimonials';

// Data
const servicesList = [
    // {
    //     title: "Laundry",
    //     desc: "Expert garment care using eco-conscious solvents and artisanal finishing techniques.",
    //     icon: Leaf
    // },
    {
        title: "Dry Cleaning",
        desc: "Delicate treatment for high-fashion pieces, ensuring longevity and pristine texture.",
        icon: CheckCircle
    },
    {
        title: "Onsite Service",
        desc: "Professional home care and management services delivered by our vetted specialists.",
        icon: User
    },
    {
        title: "Car Wash",
        desc: "Professional home care and management services delivered by our vetted specialists.",
        icon: Truck
    },
    {
        title: "Express",
        desc: "Ultra-priority 8-hour turnaround for your most urgent care requirements.",
        icon: Clock
    }
];

const curatorPoints = [
    { title: "Reliable turnaround", desc: "Automated tracking ensures your items return precisely when promised, every single time." },
    { title: "Professional handling", desc: "Certified fabric specialists inspect each item before processing to ensure optimal care." },
    { title: "Transparent pricing", desc: "No hidden surcharges or pickup fees. See your quote upfront with our digital pricing engine." },
    { title: "Convenient booking", desc: "Schedule a pickup in 3 taps via our streamlined digital interface." }
];

const stats = [
    { label: "Free Pickup & Delivery", icon: Truck },
    { label: "Same-Day & 8-Hour", icon: Clock },
    { label: "Eco-Friendly Processes", icon: Leaf }
];



const DryCleaningPage = () => {
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
    const heroButtonsRef = useRef<HTMLDivElement>(null);
    const heroStatsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(SplitText);

            const ctx = gsap.context(() => {
                const titleSplit = new SplitText(heroTitleRef.current, { type: "words,chars" });

                const titleTargets = titleSplit.chars;
                const subtitleTarget = heroSubtitleRef.current;
                const btnTargets = heroButtonsRef.current ? Array.from(heroButtonsRef.current.children) : [];
                const statsTargets = heroStatsRef.current ? Array.from(heroStatsRef.current.children) : [];

                // Initial baseline setting
                gsap.set(titleTargets, { y: 40, opacity: 0, rotateX: -40 });
                gsap.set(subtitleTarget, { y: 20, opacity: 0 });
                gsap.set(btnTargets, { y: 20, opacity: 0 });
                gsap.set(statsTargets, { y: 10, opacity: 0 });

                const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

                tl.to(titleTargets, {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    stagger: 0.02,
                    duration: 1.2
                })
                    .to(subtitleTarget, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8
                    }, "-=0.8")
                    .to(btnTargets, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.6
                    }, "-=0.6")
                    .to(statsTargets, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.5
                    }, "-=0.4");
            });

            return () => ctx.revert();
        }
    }, []);

    return (
        <main className="bg-[#0A0A0A] text-white overflow-hidden">
            {/* ── HERO SECTION ── */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#03D391]/10 border border-[#03D391]/20 px-4 py-1.5 rounded-full mb-8"
                        >
                            <span className="text-[#03D391] text-[13px] font-bold tracking-widest uppercase">Servicing All Ghaziabad Areas</span>
                        </motion.div>

                        {/* Title */}
                        <h1
                            ref={heroTitleRef}
                            className="text-4xl md:text-6xl 2xl:text-[90px] font-normal leading-[1.1] mb-8 tracking-tight font-didot"
                        >
                            Premium Cleaning Services<br />
                            <span className="text-[#03D391] italic font-serif">Across Ghaziabad</span>
                        </h1>

                        {/* Subtitle */}
                        <p
                            ref={heroSubtitleRef}
                            className="text-[#8a928e] text-[16px] md:text-[18px] 2xl:text-[20px] max-w-2xl mb-12 leading-relaxed tracking-wide"
                        >
                            overnight garment and shoe care
                        </p>

                        {/* Buttons */}
                        <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-5 mb-16 w-full sm:w-auto px-6">
                            <DownloadBtn />
                            {/* <button className="bg-white/20 hover:bg-white/30 border border-white/20 text-white px-10 rounded-xl font-bold transition-all backdrop-blur-xl">
                                <span>Check Pricing</span>
                            </button> */}
                        </div>

                        {/* Quick Stats */}
                        <div ref={heroStatsRef} className="hidden md:grid md:grid-cols-3 gap-8 md:gap-12 mt-10">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                        <stat.icon size={22} className="text-[#03D391]" />
                                    </div>
                                    <span className="text-white/70 text-[14px] font-medium tracking-wide">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── SERVICES SECTION ── */}
            <section className="py-24 2xl:py-32">
                <Container>
                    <div className="mb-20">
                        <InView
                            viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                            }}
                        >
                            <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-normal text-[#E2DEC6] mb-6 tracking-tight">
                                Expert Care for Every Fabric
                            </h2>
                            <p className="text-[#8a928e] text-[16px] 2xl:text-[18px] max-w-xl">
                                Meticulous cleaning techniques powered by modern logistics.
                            </p>
                        </InView>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6">
                        {servicesList.map((svc, i) => (
                            <InView
                                key={i}
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.5 } }
                                }}
                            >
                                <div className="group bg-[#141414]/50 border border-white/5 rounded-3xl p-8 h-full flex flex-col hover:bg-[#1A1A1A] hover:border-[#03D391]/30 transition-all duration-500 cursor-pointer">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-[#03D391]/10 group-hover:border-[#03D391]/20 transition-colors">
                                        <svc.icon size={28} className="text-gray-400 group-hover:text-[#03D391] transition-colors" />
                                    </div>
                                    <h3 className="text-[22px] font-medium text-white mb-4">{svc.title}</h3>
                                    <p className="text-gray-500 text-[14px] 2xl:text-[15px] leading-relaxed mb-8 group-hover:text-gray-400 transition-colors">
                                        {svc.desc}
                                    </p>
                                    {/* <div className="mt-auto flex items-center gap-2 text-[#03D391] font-bold text-[14px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                                        Book Service <CaretRight size={18} />
                                    </div> */}
                                </div>
                            </InView>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── DIGITAL CURATOR SECTION ── */}
            <section className="py-24 2xl:py-32 bg-[#0C0C0C]">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        {/* Left: Text */}
                        <div className="w-full lg:w-1/2">
                            <InView
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                                }}
                            >
                                <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-normal leading-tight text-[#E2DEC6] mb-8 tracking-tight">
                                    The Digital Curator Approach to Cleanliness.
                                </h2>
                                <p className="text-[#8a928e] text-[16px] 2xl:text-[18px] leading-relaxed mb-12 max-w-xl">
                                    We treat every garment as a curated piece of art, ensuring the highest standards of hygiene and fabric integrity.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
                                    {curatorPoints.map((point, i) => (
                                        <div key={i} className="flex flex-col gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-lg bg-[#03D391]/10 flex items-center justify-center border border-[#03D391]/20">
                                                    <CheckCircle size={14} className="text-[#03D391]" />
                                                </div>
                                                <h4 className="text-white font-bold text-[16px]">{point.title}</h4>
                                            </div>
                                            <p className="text-gray-500 text-[14px] leading-relaxed pl-9">
                                                {point.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </InView>
                        </div>

                        {/* Right: Image */}
                        <div className="w-full lg:w-1/2">
                            <InView
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9, rotate: 2 },
                                    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "circOut" } }
                                }}
                            >
                                <div className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl">
                                    <Image
                                        src="/Assests/Images/curator_section.png"
                                        alt="Modern Laundry"
                                        width={1200}
                                        height={1400}
                                        className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                                </div>
                            </InView>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── TESTIMONIALS SECTION ── */}
            <section className="py-24 2xl:py-40 bg-[#0A0A0A] overflow-hidden relative">
                <Container>
                    <div className="text-center mb-20 px-4">
                        <InView
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                            }}
                        >
                            <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-normal text-[#E2DEC6] mb-6 tracking-tight">
                                Loved by Ghaziabad’s Discerning
                            </h2>
                            <p className="text-[#8a928e] text-[16px] 2xl:text-[18px] max-w-2xl mx-auto">
                                Hear from our clients across Ghaziabad and beyond.
                            </p>
                        </InView>
                    </div>
                </Container>

                <div className="w-full flex flex-col gap-8 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-20 2xl:w-40 bg-linear-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 2xl:w-40 bg-linear-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>

                    <InfiniteSlider speed={50} gap={24}>
                        {testimonialsRow2.map((testimonial) => (
                            <TestimonialCard key={'row2-' + testimonial.id} data={testimonial} />
                        ))}
                    </InfiniteSlider>
                </div>
            </section>

            {/* ── FINAL CTA SECTION ── */}
            <section className="py-24 2xl:py-32">
                <Container>
                    <div className="bg-[#03D391] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center overflow-hidden relative">
                        {/* Decorative background circle */}
                        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[80%] bg-black/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[80%] bg-white/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Side Illustrations */}
                        <div className="hidden md:block absolute bottom-0 left-0 md:w-[280px] lg:w-[380px] xl:w-[450px] 2xl:w-[600px] pointer-events-none transform -scale-x-100 z-10 origin-bottom">
                            <img src="/Assests/SVG/peep_area_we_serve.svg" alt="Illustration" className="w-full h-auto object-contain object-bottom" />
                        </div>
                        <div className="hidden md:block absolute bottom-0 right-0 md:w-[280px] lg:w-[380px] xl:w-[450px] 2xl:w-[600px] pointer-events-none z-10 origin-bottom">
                            <img src="/Assests/SVG/peep_area_we_serve.svg" alt="Illustration" className="w-full h-auto object-contain object-bottom" />
                        </div>

                        <InView
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                            }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 tracking-tight max-w-3xl leading-[1.05] relative z-20 font-didot">
                                Experience Effortless Cleaning Today
                            </h2>
                            <p className="text-black/70 text-[16px] md:text-[18px] mb-12 2xl:max-w-xl max-w-md text-center mx-auto font-medium relative z-20">
                                Schedule your pickup in minutes. Let us handle the cleaning while you focus on what matters.
                            </p>
                            <div className="relative z-20">
                                <DownloadBtn variant="minimal_black" />
                            </div>
                        </InView>
                    </div>
                </Container>
            </section>
        </main>
    );
};

export default DryCleaningPage;
