'use client'
import React from 'react';
import Container from '@/components/common/container';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import Link from 'next/link';
import {
    WashingMachineIcon,
    CoatHangerIcon,
    BriefcaseIcon,
    CarIcon,
    TimerIcon,
    CaretRightIcon
} from '@phosphor-icons/react';
import DownloadBtn from '@/components/DownloadBtn/downloadBtn';

const services = [
    // {
    //     icon: <WashingMachineIcon size={24} weight="light" />,
    //     title: "Laundry",
    //     description: "Expert garment care using eco-conscious solvents and artisanal finishing techniques."
    // },
    {
        icon: <CoatHangerIcon size={24} weight="light" />,
        title: "Dry Cleaning",
        description: "Delicate treatment for high-fashion pieces, ensuring longevity and pristine texture."
    },
    {
        icon: <BriefcaseIcon size={24} weight="light" />,
        title: "Onsite Service",
        description: "Professional home care and management services delivered by our vetted specialists."
    },
    {
        icon: <CarIcon size={24} weight="light" />,
        title: "Car Wash",
        description: "Premium detailing and waterless cleaning that restores your vehicle to showroom condition."
    },
    {
        icon: <TimerIcon size={24} weight="light" />,
        title: "Express",
        description: "Ultra-priority 8-hour turnaround for your most urgent care requirements."
    }
];

const ServicesPage = () => {
    return (
        <main className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-fixed min-h-screen text-white pt-24 pb-20">
            <Container>
                {/* ── HERO SECTION ── */}
                <InView
                    viewOptions={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                >
                    <div className="flex flex-col md:items-center md:justify-center justify-start text-left md:text-center mb-16 gap-4">
                        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-black tracking-tight font-didot">
                            Our Services
                        </h1>
                        <p className="text-sm md:text-base text-[#8a928e] max-w-2xl mx-auto leading-relaxed">
                            Experience a new standard of luxury maintenance. From meticulous
                            garment care to bespoke onsite solutions, we curate the details so you
                            don't have to.
                        </p>
                    </div>
                </InView>

                {/* ── SERVICE GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32 justify-center">
                    {services.map((service, idx) => (
                        <InView
                            key={idx}
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: idx * 0.1 }
                                }
                            }}
                        >
                            <div className="group bg-[#111111]/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl flex flex-col h-full hover:bg-white/5 transition-all duration-500 cursor-default">
                                <div className="text-[#8a928e] group-hover:text-white transition-colors mb-8 bg-white/5 w-fit p-3 rounded-xl border border-white/5">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl 2xl:text-2xl font-bold mb-4 tracking-tight ">
                                    {service.title}
                                </h3>
                                <p className="text-[13px] md:text-[14px] leading-relaxed text-[#8a928e] mb-10 group-hover:text-white/80 transition-colors">
                                    {service.description}
                                </p>
                                {/* <div className="mt-auto">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-[#03D391] transition-all"
                                    >
                                        Book Service
                                        <CaretRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div> */}
                            </div>
                        </InView>
                    ))}
                </div>

                {/* ── CTA BOX ── */}
                <InView
                    viewOptions={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                    }}
                >
                    <div className="relative bg-[#111111]/80 backdrop-blur-3xl border border-white/5 p-12 lg:p-24 rounded-[48px] overflow-hidden text-center">
                        {/* Decorative Gradient Background for the box */}
                        <div className="absolute inset-0 bg-linear-to-br from-[#03D391]/5 via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-2xl mx-auto font-didot">
                                Ready for a curated experience?
                            </h2>
                            <p className="text-[14px] md:text-base text-[#8a928e] max-w-xl mx-auto leading-relaxed">
                                Join the circle of homeowners and professionals who trust Drydash for their
                                daily essentials.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                                <DownloadBtn />
                                <Link href="/about-us" className='p-[2px] 2xl:rounded-xl rounded-lg bg-[linear-gradient(20deg,#142926,#458F83)] will-change-transform w-full sm:w-auto flex justify-center cursor-pointer'>
                                    <button className='bg-[#0E0F0E] text-[#458F83] 2xl:text-lg text-[15px] 2xl:w-50 w-full px-8 2xl:h-14 h-12 flex items-center justify-center gap-3 transition-transform active:scale-[0.98] rounded-lg cursor-pointer'>Learn More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </InView>
            </Container>
        </main>
    );
};

export default ServicesPage;