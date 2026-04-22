'use client'
import React from 'react';
import Container from '@/components/common/container';
import { Clock, Leaf, Truck, TShirt, CheckCircle } from 'phosphor-react';
import { InView } from '@/components/ui/in-view';
import { motion } from 'motion/react';

const features = [
    {
        icon: <Clock size={54} weight="regular" />,
        title: "24-Hour Delivery",
        description: "Next-day delivery for laundry and dry cleaning.",
        number: "01."
    },
    {
        icon: <Leaf size={54} weight="regular" />,
        title: "Eco-Friendly Solvents",
        description: "No harsh chemicals. No petrol smell. Safe for skin & fabrics.",
        number: "02."
    },
    {
        icon: <Truck size={54} weight="regular" />,
        title: "Doorstep Convenience",
        description: "Pickup and delivery anywhere in your city.",
        number: "03."
    },
    {
        icon: <TShirt size={54} weight="regular" />,
        title: "Premium Fabric Care",
        description: "Delicate, luxury and designer wear handled by specialists.",
        number: "04."
    }
];

const WhychoosDD = () => {
    return (
        <>
            {/* ── MOBILE VIEW ── */}
            <section className="md:hidden block bg-black w-full px-6 pt-12 pb-16">
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -60px 0px' }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeIn' } }
                    }}
                >
                    <div className="mb-10">
                        <h2 className="text-lg tracking-wide mb-6 text-gray-400">
                            <span className="tracking-wide mb-6 text-gray-400">/</span>{' '}
                            Why choose Drydash?
                        </h2>
                    </div>
                </InView>

                <InView
                    viewOptions={{ once: true, margin: '0px 0px -40px 0px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.12 }
                        }
                    }}
                >
                    <div className="flex flex-col gap-0">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, x: -16 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                                }}
                                className="flex items-center gap-5 py-5 border-b border-white/8 last:border-b-0"
                            >
                                {/* Yellow checkmark */}
                                <div className="shrink-0">
                                    <CheckCircle
                                        size={24}
                                        weight="fill"
                                        className="text-[#E9B84A]"
                                    />
                                </div>

                                {/* Title */}
                                <span className="text-[15px] font-medium text-white/90 tracking-wide leading-snug">
                                    {feature.title}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </InView>
            </section>

            {/* ── DESKTOP VIEW (unchanged) ── */}
            <section className="hidden md:block bg-[linear-gradient(0deg,rgba(21,43,40,1)_0%,rgba(21,43,40,0)_100%)] relative w-full pt-20 pb-20 px-6 shadow-2xl overflow-hidden">
                <Container>
                    {/* Ambient blobs */}
                    <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CD5C5C]/5 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="absolute top-10 left-[20%] w-[600px] h-[400px] bg-[#143224]/30 blur-[130px] rounded-full pointer-events-none"></div>

                    {/* Header */}
                    <InView
                        viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                        }}
                    >
                        <div className="flex flex-col items-center justify-center text-center mb-28 z-10 relative">
                            <h2 className="2xl:text-4xl text-3xl font-black text-[#E2DEC6] mb-5 tracking-tight">
                                Why choose Drydash?
                            </h2>
                            <p className="2xl:text-[16px] text-[15px] leading-[24.2px] text-[#8a928e] max-w-lg mx-auto tracking-[2.64%]">
                                Fast. Reliable. Hassle-free. Dry cleaning, and Laundry<br className="hidden md:block" />
                                Fresh, clean, and ready in just 8 hours.
                            </p>
                        </div>
                    </InView>

                    {/* Features Grid */}
                    <InView
                        viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                    >
                        <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 z-10 relative">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                                    }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Icon */}
                                    <div className="text-[#5B6D65] group-hover:text-[#8AA899] transition-colors duration-300 mb-8">
                                        {feature.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-[17px] font-normal text-[#E2DEC6] tracking-wide mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[13px] text-[#5B6D65] font-light leading-[1.6] max-w-[210px] mb-8 min-h-[40px]">
                                        {feature.description}
                                    </p>

                                    {/* Giant Number */}
                                    <div className="text-[76px] font-black text-[#E2DEC6]/40 leading-none tracking-tighter mt-auto group-hover:text-[#E2DEC6]/80 transition-colors duration-300">
                                        {feature.number}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </InView>
                </Container>
            </section>
        </>
    )
}

export default WhychoosDD;