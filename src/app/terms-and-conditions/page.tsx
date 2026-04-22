'use client'
import React from 'react';
import Container from '@/components/common/container';
import { InView } from '@/components/ui/in-view';
import { CheckCircleIcon } from '@phosphor-icons/react';

const TermsAndConditionsPage = () => {
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
                            Terms & Conditions
                        </h1>
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                            OWNED AND OPERATED BY GYLD SOLUTIONS PRIVATE LIMITED
                        </p>
                    </div>
                </InView>

                {/* ── CENTERED CONTENT COLUMN ── */}
                <div className="w-full max-w-[800px] mx-auto space-y-16 mb-24">

                    {/* Intro paragraph */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                        }}
                    >
                        <p className="text-base md:text-md leading-relaxed text-[#8a928e]">
                            Transparency, care, and trust are the foundation of every DryDash experience. Please read our terms carefully before availing our services.
                        </p>
                    </InView>

                    {/* Delivery Policy */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
                        }}
                    >
                        <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-xl w-full">
                            <h2 className="text-2xl font-bold mb-8 text-white">Delivery Policy</h2>
                            <ul className="space-y-5">
                                {[
                                    "Laundry deliveries will be made in 72 hours.",
                                    "Dry Cleaning garments will be delivered in 120 hours.",
                                    "Urgent delivery of garments will be charged at 50% extra.",
                                    "Free pickup & delivery on laundry orders of 6 KG or more.",
                                    "We strive for timely delivery; if delayed, we’ll keep you updated.",
                                    "Customers are requested to inspect garments upon delivery.",
                                    "We are not responsible for fabric shrinkage, color bleeding, or embellishment damage.",
                                    "All garments are cleaned with care, but some stains may be permanent.",
                                    "Garments uncollected within 15 days of delivery may incur storage risk.",
                                    "We are not liable for loss due to fire, burglary, or unforeseen circumstances."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <CheckCircleIcon size={18} weight="regular" className="text-[#03D391] shrink-0 mt-1" />
                                        <span className="text-sm text-[#8a928e] leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InView>

                    {/* Cleaning & Quality Policy */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                        }}
                    >
                        <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-xl w-full">
                            <h2 className="text-2xl font-bold mb-8 text-white">Cleaning & Quality Policy</h2>
                            <ul className="space-y-5">
                                {[
                                    "We use professional methods such as hydrocarbon, PERC, and soft washes as required.",
                                    "Tariff is determined by garment complexity; rates listed are minimal estimates.",
                                    "Our technicians assess and choose the safest, most effective cleaning method for each garment.",
                                    "All articles are processed at the customer’s risk.",
                                    "We may feature cleaned garments in promotional visuals with full discretion.",
                                    "All disputes fall under the jurisdiction of Delhi courts."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <CheckCircleIcon size={18} weight="regular" className="text-[#03D391] shrink-0 mt-1" />
                                        <span className="text-sm text-[#8a928e] leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InView>

                    {/* Privacy Policy */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                        }}
                    >
                        <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-xl w-full">
                            <h2 className="text-2xl font-bold mb-6 text-white">Privacy Policy</h2>
                            <p className="text-sm text-[#8a928e] leading-relaxed mb-6">
                                DryDash values your privacy. We collect and protect personal data shared through our stores, mobile app, or customer service channels with utmost care and consent.
                            </p>
                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-white mb-4">Your data helps us provide customized services like:</h3>
                                <ul className="space-y-3 pl-2">
                                    {[
                                        "Real-time updates about your order",
                                        "Information about offers and new services",
                                        "Feedback and experience research"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#03D391] mt-2 shrink-0" />
                                            <span className="text-sm text-[#8a928e] leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-sm text-[#8a928e] leading-relaxed mt-6">
                                Communication methods include phone, WhatsApp, SMS, email, and direct mailers.
                            </p>
                        </div>
                    </InView>

                    {/* Guaranteed Cloth Protection Program */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                        }}
                    >
                        <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-xl w-full">
                            <h2 className="text-2xl font-bold mb-8 text-white">Guaranteed Cloth Protection Program</h2>
                            <ul className="space-y-5">
                                {[
                                    "Protection against any damage or loss during cleaning.",
                                    "Refund up to 2X the item’s processing value in case of confirmed loss/damage.",
                                    "Free re-processing for quality-related issues.",
                                    "Claims must be raised within 30 days of delivery.",
                                    "Disputes are subject to company address."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <CheckCircleIcon size={18} weight="regular" className="text-[#03D391] shrink-0 mt-1" />
                                        <span className="text-sm text-[#8a928e] leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </InView>

                </div>
            </Container>
        </main>
    );
};

export default TermsAndConditionsPage;