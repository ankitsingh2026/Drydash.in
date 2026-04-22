'use client'
import React from 'react';
import Container from '@/components/common/container';
import Image from 'next/image';
import { CaretRight } from 'phosphor-react';
import { InView } from '@/components/ui/in-view';
import { motion } from 'motion/react';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';
import Link from 'next/link';

const servicesList = [
    // {
    //     title: "Laundry",
    //     image: "/Assests/Images/laundry_card.jpg",
    //     active: true
    // },
    {
        title: "Dry Cleaning",
        image: "/Assests/Images/dry_cleaning_card.jpg",
        active: false
    },
    {
        title: "On side services",
        image: "/Assests/Images/on_side_services_card.jpg",
        active: false
    },
    {
        title: "car wash",
        image: "/Assests/Images/car_wash_card.jpg",
        active: false
    },
    {
        title: "8 hours express delivery",
        image: "/Assests/Images/express_delivery_card.jpg",
        active: false
    }
];

const cursorText = [
    'Clean',
    'Fresh',
    'Flawless'
];

const TYPING_SPEED = 110;
const DELETING_SPEED = 55;
const PAUSE_AFTER_TYPED = 2200;
const PAUSE_AFTER_DELETED = 400;

const TypewriterText = ({ words }: { words: string[] }) => {
    const [displayText, setDisplayText] = React.useState('');
    const [wordIndex, setWordIndex] = React.useState(0);
    const [phase, setPhase] = React.useState<'typing' | 'pausing' | 'deleting' | 'waiting'>('typing');

    React.useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        switch (phase) {
            case 'typing':
                if (displayText.length < currentWord.length) {
                    timeout = setTimeout(() => {
                        setDisplayText(currentWord.slice(0, displayText.length + 1));
                    }, TYPING_SPEED);
                } else {
                    timeout = setTimeout(() => setPhase('pausing'), PAUSE_AFTER_TYPED);
                }
                break;

            case 'pausing':
                setPhase('deleting');
                break;

            case 'deleting':
                if (displayText.length > 0) {
                    timeout = setTimeout(() => {
                        setDisplayText(displayText.slice(0, -1));
                    }, DELETING_SPEED);
                } else {
                    timeout = setTimeout(() => {
                        setWordIndex((prev) => (prev + 1) % words.length);
                        setPhase('typing');
                    }, PAUSE_AFTER_DELETED);
                }
                break;

            default:
                break;
        }

        return () => clearTimeout(timeout);
    }, [displayText, phase, wordIndex, words]);

    return (
        <span className="inline-flex items-baseline">
            <span>{displayText}</span>
            <img
                src="/Assests/SVG/blinkingCursorNew.svg"
                alt=""
                aria-hidden="true"
                className="inline-block h-[1em] w-auto ml-1 animate-[cursorBlink_1s_step-end_infinite]"
            />
        </span>
    );
};

const ServiceCard = ({ svc }: { svc: typeof servicesList[0] }) => {
    const [isHover, setIsHover] = React.useState(false);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        type: 'spring',
                        damping: 20,
                        staggerChildren: 0.1
                    }
                },
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="relative 2xl:min-w-[260px] min-w-[200px] 2xl:h-[340px] h-[250px] rounded-[24px] overflow-hidden shrink-0 snap-start group cursor-pointer"
        >
            <Image
                src={svc.image}
                alt={svc.title}
                fill
                sizes="260px"
                className="object-cover"
            />
            {/* Progressive Blur Hover Effect */}
            <ProgressiveBlur
                className='pointer-events-none absolute bottom-0 left-0 h-[60%] w-full'
                blurIntensity={0.8}
                animate={isHover ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            />

            {/* Card Content (Visible on Hover) */}
            <motion.div
                className="absolute inset-x-0 bottom-0 p-5"
                animate={isHover ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <div className="flex justify-between items-end w-full">
                    <h3 className="text-[14px] font-medium text-white tracking-wider pb-1">{svc.title}</h3>
                    <button
                        className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors ${svc.active ? 'bg-[#E0A355] text-black' : 'bg-[#E0A355] text-black'
                            }`}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Services = () => {
    return (

        <section className="bg-[url('/Assests/Images/background_gradiant.jpg')] mx-auto 
        bg-cover bg-center bg-no-repeat 
        2xl:w-[80%] md:w-[98%] w-full min-h-screen 
        md:py-16 py-0 
        md:border-6 border-0 border-[#E2DEC6]/20 
        md:p-6 p-0 md:rounded-4xl 
        flex flex-col justify-center items-center mb-20
        mask-[linear-gradient(to_bottom,black_70%,transparent)]
        -webkit-mask-image-[linear-gradient(to_bottom,black_70%,transparent)]
        ">
            <Container>

                <style>{`
                @keyframes cursorBlink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                    }`
                }</style>
                <div className="w-full max-w-[1300px] mx-auto 2xl:px-0 md:px-10 p-2">
                    {/* Header Section */}
                    <InView
                        viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-12">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
                                }}
                                className="w-full md:w-1/2"
                            >
                                <p className="text-lg tracking-wide mb-6 text-gray-400">/ Service we offers</p>
                                <h2 className="2xl:text-7xl font-didot md:text-6xl/normal text-5xl/normal font-normal leading-[1.05] text-white tracking-wide">
                                    Swift<br /><TypewriterText words={cursorText} />
                                </h2>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
                                }}
                                className="w-full md:w-[45%] 2xl:pb-4 pb-0"
                            >
                                <p className="2xl:text-[16px]/[24.2px] text-[15px]/normal tracking-wide mb-8 font-light text-gray-300 w-[80%]">
                                    We offer shoe spa and dry cleaning, along with on-site services
                                    and car wash. With our 8-hour express delivery you get
                                    everything cleaned and ready the same day.
                                </p>
                                <div className="flex items-center gap-8 text-[#A64B2A]">
                                    <Link href="/services" className="flex items-center gap-2 hover:text-[#d46138] transition-colors 2xl:text-[16px] text-[15px] tracking-wide">
                                        View all services <span><CaretRight size={18} /></span>
                                    </Link>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=919717953316&text=Hi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-[#d46138] transition-colors 2xl:text-[16px] text-[15px] tracking-wide"
                                    >
                                        Book pickup <CaretRight size={18} />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </InView>

                    {/* Cards Section */}
                    <InView
                        viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        <div className="flex gap-5 overflow-x-auto pb-4 snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            {servicesList.map((svc, idx) => (
                                <ServiceCard key={idx} svc={svc} />
                            ))}
                        </div>
                    </InView>

                    {/* Scroll track indicator */}
                    <div className="w-full flex justify-center mt-12 mb-10">
                        <div className="w-1/2 h-[3px] bg-gray-500/30 rounded-full flex">
                            <div className="w-1/3 bg-white h-full rounded-full"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>


    )
}

export default Services