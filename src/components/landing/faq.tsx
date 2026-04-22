'use client'
import React from 'react';
import Container from '@/components/common/container';
import { CaretDown } from 'phosphor-react';
import { InView } from '@/components/ui/in-view';
import { motion } from 'motion/react';

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '@/components/motion-primitives/accordion';

const faqItems = [
    {
        q: "1. How does DryDash work?",
        a: "Our process is simple: Schedule a pickup through the app, we collect your items, clean them with premium care, and deliver them back to your doorstep within 24 hours."
    },
    {
        q: "2. What pricing plans are available for DryDash?",
        a: "We offer transparent, fixed pricing for all our services. Check our app for the latest rates in your city."
    },
    {
        q: "3. What are the benefits of using DryDash?",
        a: "Benefits include professional-grade cleaning, eco-friendly solvents, convenient doorstep service, and our 24-hour express delivery guarantee."
    },
    {
        q: "4. Can DryDash be integrated with other platforms?",
        a: "Currently, Drydash operates as a standalone service through our official mobile app, ensuring a seamless and secure experience for all our users."
    },
    {
        q: "5. How does DryDash work?",
        a: "Simply download our app, set your preferences, and choose a convenient pickup time. Our specialists handle the rest, from careful cleaning to final delivery."
    },
    {
        q: "6. How do I troubleshoot common issues with DryDash?",
        a: "For any issues, our 24/7 support team is available via the in-app chat. We're here to help with tracking, scheduling."
    },
    {
        q: "7. What are the best practices for maintaining DryDash?",
        a: "To get the best results, please follow the care labels on your garments. If you have special requests, you can add notes directly to your order in the app."
    },
    {
        q: "8. How can I optimize my workflow using DryDash?",
        a: "Use our recurring pickup feature to automate your weekly laundry needs. It's the best way to save time and ensure your wardrobe is always fresh."
    }
];

const Faq = () => {
    return (
        <Container>
            <section className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[600px] py-16 lg:py-24 border-6 border-[#E2DEC6]/20 md:p-6 p-0 rounded-4xl flex flex-col justify-center items-center mb-20 relative">
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-start md:gap-16 gap-0 lg:gap-12 2xl:px-0 px-4 lg:px-12 z-10">

                        {/* Left side text */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
                            }}
                            className="w-full lg:w-[40%] shrink-0 flex flex-col justify-between lg:sticky lg:top-24"
                        >
                            <div>
                                <h2 className="text-4xl lg:text-5xl 2xl:text-[56px] font-medium text-white leading-tight mb-8 font-didot">
                                    Get all your questions<br />
                                    answered here
                                </h2>
                            </div>

                            <div className="mt-8 lg:mt-auto">
                                <p className="text-[14px] 2xl:text-[15px] leading-relaxed text-[#8a928e] max-w-sm md:block hidden">
                                    Get clear answers to the most common questions about
                                    our services, process, and delivery. Everything you need
                                    to know, all in one place.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right side accordion */}
                        <div className="w-full lg:w-[50%] min-w-0 overflow-hidden flex flex-col gap-3 lg:gap-4">
                            <Accordion className="flex w-full flex-col gap-3 lg:gap-4">
                                {faqItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-full min-w-0"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                                        }}
                                    >
                                        <AccordionItem
                                            value={`item-${index}`}
                                            className="w-full bg-[#1A1A1A]/80 hover:bg-[#252525]/90 transition-colors cursor-pointer backdrop-blur-sm rounded-2xl overflow-hidden"
                                        >
                                            <AccordionTrigger className="w-full p-5 2xl:p-6 flex justify-between items-center text-left">
                                                <h3 className="text-white/90 text-[15px] 2xl:text-[16px] font-normal tracking-wide">
                                                    {item.q}
                                                </h3>
                                                <CaretDown size={20} className="text-gray-500 transition-transform duration-300 group-data-expanded:-rotate-180" />
                                            </AccordionTrigger>
                                            <AccordionContent className="px-5 2xl:px-6 pb-5 2xl:pb-6">
                                                <p className="text-gray-400 text-[14px] leading-relaxed wrap-break-word">
                                                    {item.a}
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </motion.div>
                                ))}
                            </Accordion>
                        </div>

                    </div>
                </InView>
            </section>
        </Container>
    );
};

export default Faq;