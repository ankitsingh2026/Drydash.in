'use client';

import React from 'react';
import Container from '@/components/common/container';
import Image from 'next/image';
import HeroMockup from '@/../public/Assests/SVG/hero_mockup.svg';

import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { TextLoop } from '@/components/motion-primitives/text-loop'
import DownloadBtn from '@/components/DownloadBtn/downloadBtn';
import Link from 'next/link';

const loopWords = [
    'in 24 hours',
    'at door step',
    'with care',
]

const stats = [
    {
        value: "100k+",
        label: "Satisfied Customer",
    },
    {
        value: "24/7",
        label: "All Time Service",
    },
    {
        value: "99%",
        label: "Satisfied Rate",
    },
]


const Hero = () => {
    const btnsRef = React.useRef<HTMLDivElement>(null);
    const mockupRef = React.useRef<HTMLDivElement>(null);
    const statsRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        gsap.registerPlugin(SplitText);
        let ctx: gsap.Context;
        let isUnmounted = false;

        document.fonts.ready.then(() => {
            if (isUnmounted) return;

            ctx = gsap.context(() => {
                const titleSplit = new SplitText(".heroTitle", {
                    type: "words",
                    wordsClass: "word"
                });

                // Safely collect all targets
                const titleTargets = [...titleSplit.words, ".heroLoop"];
                const btnTargets = btnsRef.current ? Array.from(btnsRef.current.children) : [];
                const mockupElement = mockupRef.current;
                const mockupTarget = mockupElement && window.innerWidth > 768 ? [mockupElement] : [];
                const statsTargets = statsRef.current ? Array.from(statsRef.current.children).filter(el => el.tagName !== 'DIV' || el.classList.contains('flex')) : [];

                // Initial baseline setting
                gsap.set(titleTargets, { y: "30%", opacity: 0 });
                gsap.set(btnTargets, { y: 20, opacity: 0 });
                if (mockupTarget.length > 0) gsap.set(mockupTarget, { y: 60, opacity: 0 });
                gsap.set(statsTargets, { y: 20, opacity: 0 });

                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

                // Sequenced animation
                tl.to(titleTargets, {
                    y: "0%",
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    delay: 0.1,
                    ease: "power2.out"
                })
                    .to(btnTargets, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1
                    }, "-=0.2")
                    .to(statsTargets, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1
                    }, "-=0.2");

                if (mockupTarget.length > 0) {
                    tl.to(mockupTarget, {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power2.out"
                    }, "-=0.2");
                }
            });
        });

        return () => {
            isUnmounted = true;
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-no-repeat w-full md:min-h-screen min-h-[75vh] 2xl:pt-10 md:pt-20 pt-30 mb-20 size-full mask-[linear-gradient(to_bottom,black_70%,transparent)]
  -webkit-mask-image-[linear-gradient(to_bottom,black_70%,transparent)]">
            <Container>
                <div className='2xl:mt-15 mt-0 overflow-hidden'>
                    <div className='flex items-center justify-center'>
                        <div className='2xl:w-2/3 w-180 text-center mb-6'>
                            <h1 className='2xl:text-7xl/normal md:text-5xl/normal text-4xl/normal tracking-[1.6%] md:font-bold font-normal font-didot will-change-transform'>
                                Restored By Morning
                                {/* <span className="heroLoop inline-grid items-center justify-items-start text-left text-[#03D391]">
                                    {loopWords.map((word, index) => (
                                        <span key={`hidden-${index}`} className="invisible col-start-1 row-start-1">{word}</span>
                                    ))}
                                    <TextLoop className="col-start-1 row-start-1 w-full text-left">
                                        {loopWords.map((title, index) => (
                                            <span key={index}>{title}</span>
                                        ))}
                                    </TextLoop>
                                </span> */}
                            </h1>
                            <h1 className='2xl:text-xl/normal md:text-xl/normal text-xl/normal tracking-[1.6%] will-change-transform text-[#c0c0c0]'>overnight garment and shoe care</h1>

                        </div>
                    </div>
                    <div ref={btnsRef} className='flex flex-col sm:flex-row items-center justify-center gap-4 2xl:mt-4 mt-2 mb-12 sm:mb-0'>

                        {/* Download Now - Morphing Dialog Trigger */}
                        <DownloadBtn />
                        <Link href="/about-us" className="p-[2px] 2xl:rounded-xl rounded-lg bg-[linear-gradient(20deg,#142926,#458F83)] will-change-transform w-full sm:w-auto flex justify-center cursor-pointer">
                            <button className='bg-black text-[#458F83] 2xl:text-lg text-[15px] 2xl:w-50 w-full px-8 2xl:h-14 h-12 flex items-center justify-center gap-3 transition-transform active:scale-[0.98] rounded-lg cursor-pointer'>Learn More</button>
                        </Link>
                    </div>

                    <div ref={mockupRef} className='hidden md:flex items-center justify-center mt-10 will-change-transform'>
                        <Image className='2xl:w-300 w-200 h-auto' src={HeroMockup} alt="Hero Mockup" priority />
                    </div>
                    <div ref={statsRef} className="w-full  md:hidden block mt-12 md:mt-20 mb-4 md:mb-10 will-change-transform">
                        <div className="max-w-[900px] mx-auto flex flex-row items-center justify-center">
                            {stats.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex-1 flex flex-col items-center justify-center px-1 md:px-4 text-center">
                                        <h2 className={`text-2xl md:text-[62px] leading-none font-bold text-white mb-2 md:mb-4 tracking-normal`}>
                                            {item.value}
                                        </h2>
                                        <p className="text-[12px] md:text-[22px] leading-tight text-white font-normal tracking-wide">
                                            {item.label}
                                        </p>
                                    </div>
                                    {index !== stats.length - 1 && (
                                        <div className="h-[50px] md:h-[90px] w-px bg-white/30 shrink-0"></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;