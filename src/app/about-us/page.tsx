'use client'
import React from 'react';
import Container from '@/components/common/container';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import {
    LightningIcon,
    ShieldCheckIcon,
    TruckIcon,
    LeafIcon,
    HeartIcon,
    CheckCircleIcon,
    TShirtIcon,
    WashingMachineIcon,
    FootprintsIcon,
    WindIcon,

} from '@phosphor-icons/react';
import { Car, Clock, Handbag, House } from 'phosphor-react';
import DownloadBtn from '@/components/DownloadBtn/downloadBtn';

const differentiatorFeatures = [
    {
        icon: <LightningIcon size={24} weight="fill" className="text-black" />,
        title: "Fast & Reliable",
        description: "Quick turnaround times with 24-hour delivery options to match your lifestyle."
    },
    {
        icon: <ShieldCheckIcon size={24} weight="fill" className="text-black" />,
        title: "Premium Fabric Care",
        description: "Advanced cleaning methods that ensure deep cleaning without damage."
    },
    {
        icon: <TruckIcon size={24} weight="fill" className="text-black" />,
        title: "Doorstep Convenience",
        description: "Easy pickup and delivery designed to save your time and effort."
    },
    {
        icon: <LeafIcon size={24} weight="fill" className="text-black" />,
        title: "Eco-Conscious Process",
        description: "Efficient and responsible cleaning practices for better sustainability."
    },
    {
        icon: <HeartIcon size={24} weight="fill" className="text-black" />,
        title: "Customer-First Approach",
        description: "Every service is designed to deliver maximum satisfaction and trust."
    }
];

const serviceItems = [
    { icon: <WashingMachineIcon size={28} />, text: "Dry Cleaning" },
    { icon: <FootprintsIcon size={28} />, text: "Premium Shoe Spa" },
    { icon: <House size={28} weight="fill" />, text: "On-site" },
    { icon: <Car size={28} weight="fill" />, text: "Car Wash" },
    { icon: <Clock size={28} weight="fill" />, text: "8-Hours Delivery" },
    { icon: <Handbag size={28} weight="fill" />, text: "Premium Bag Care" },
    { icon: <WindIcon size={28} />, text: "Ironing & Pressing" }
];

const AboutUsPage = () => {
    return (
        <main className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-fixed min-h-screen text-white pb-20">
            <Container>
                {/* ── HERO SECTION ── */}
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                    }}
                >
                    <div className="flex flex-col md:items-center md:justify-center justify-start text-left md:text-center mt-20 mb-16 ">
                        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight font-didot">
                            About DryDash
                        </h1>
                        <p className="text-[10px] md:text-xs font-bold  tracking-[0.2em] text-white/60">
                            Owned and operated by Gyld Solutions Private Limited
                        </p>
                    </div>
                </InView>

                {/* ── CENTERED CONTENT COLUMN ── */}
                <div className="w-full max-w-[800px] mx-auto space-y-20 mb-24">

                    {/* Intro paragraph */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                        }}
                    >
                        <p className="text-base md:text-md leading-relaxed text-[#8a928e]">
                            DryDash is a premium dryclean and garment care platform developed and operated by Gyld Solutions Pvt. Ltd., a forward-thinking company focused on building innovative, technology-driven service solutions.
                        </p>
                    </InView>

                    {/* Redefining Laundry */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
                        }}
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-6">
                                Redefining Drycleaning with Speed, Care & Convenience
                            </h2>
                            <p className="text-sm text-[#8a928e] leading-relaxed mb-6">
                                DryDash is built for modern lifestyles where time matters. We provide seamless, on-demand shoe spa and dry cleaning services with fast doorstep pickup and delivery.
                            </p>
                            <p className="text-sm text-[#8a928e] leading-relaxed">
                                Our goal is simple — eliminate the hassle of drycleaning while delivering premium quality care.
                            </p>
                        </div>
                    </InView>

                    {/* Who We Are */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                        }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Who We Are</h3>
                            <p className="text-sm text-[#8a928e] leading-relaxed mb-6">
                                We are a tech-enabled service platform delivering reliable, high-quality garment care solutions. From daily wear to delicate fabrics and footwear, DryDash ensures every item is handled with precision and expertise.
                            </p>
                            <p className="text-sm text-[#8a928e] leading-relaxed">
                                We combine smart logistics, professional cleaning processes, and customer-centric design to deliver a smooth and dependable experience.
                            </p>
                        </div>
                    </InView>

                    {/* ── VISION & MISSION COMBO CARD ── */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-xl w-full">
                            <div className="mb-14">
                                <h3 className="text-md font-bold text-white mb-6 underline underline-offset-8 decoration-white/10 decoration-1">Our Vision</h3>
                                <p className="text-base md:text-md text-[#8a928e] leading-relaxed">
                                    To become the most trusted on-demand dry cleaning and garment care brand, known for speed, quality, and consistency.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-md font-bold text-white mb-8 underline underline-offset-8 decoration-white/10 decoration-1">Our Mission</h3>
                                <ul className="space-y-5">
                                    {[
                                        "Deliver hassle-free dry cleaning and garment care services using smart technology",
                                        "Maintain premium quality standards in dry cleaning and garment care",
                                        "Ensure fast and reliable doorstep pickup & delivery",
                                        "Create a seamless and satisfying customer experience"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <CheckCircleIcon size={18} weight="regular" className="text-[#03D391] shrink-0 mt-1" />
                                            <span className="text-sm text-[#8a928e]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </InView>

                    {/* ── DIFFERENTIATORS GRID ── */}
                    <div className="pt-10">
                        <InView
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            <h2 className="text-2xl font-bold mb-16">What Makes DryDash Different</h2>
                        </InView>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {differentiatorFeatures.map((feature, idx) => (
                                <InView
                                    key={idx}
                                    viewOptions={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                                    }}
                                >
                                    <div className="flex flex-col items-start">
                                        <div className="mb-6 p-2 bg-[#00FDC0] rounded-sm">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-md font-bold mb-3">{feature.title}</h4>
                                        <p className="text-[13px] text-[#8a928e] leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </InView>
                            ))}
                        </div>
                    </div>

                    {/* ── OUR SERVICES GRID ── */}
                    <div className="pt-10">
                        <InView
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            <h2 className="text-2xl font-bold mb-12">Our Services</h2>
                        </InView>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {serviceItems.map((service, idx) => (
                                <InView
                                    key={idx}
                                    viewOptions={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                                    }}
                                >
                                    <div className="bg-[#111111]/90 border border-white/5 p-6 rounded-md flex items-center gap-5 hover:bg-white/5 transition-colors cursor-default">
                                        <div className="text-[#03D391]">
                                            {service.icon}
                                        </div>
                                        <span className="text-sm font-medium tracking-wide">
                                            {service.text}
                                        </span>
                                    </div>
                                </InView>
                            ))}
                        </div>
                    </div>

                    {/* ── CTA SECTION ── */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                        }}
                    >
                        <div className="mt-32 pt-24 border-t border-white/5 text-center flex flex-col items-center">
                            <h3 className="text-3xl md:text-5xl font-black mb-10 leading-tight font-didot">
                                Freshness, Care & Confidence — Delivered
                            </h3>
                            <p className="text-sm text-[#8a928e] mb-12 max-w-lg">
                                At DryDash, we don't just clean clothes — we deliver freshness, care, and confidence with every order.
                            </p>
                            <DownloadBtn />
                        </div>
                    </InView>
                </div>
            </Container>
        </main>
    );
};

export default AboutUsPage;