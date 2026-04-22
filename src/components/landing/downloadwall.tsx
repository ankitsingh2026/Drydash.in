'use client'
import React from 'react';
import Container from '@/components/common/container';
import Image from 'next/image';
import PeepIllustration from '@/../public/Assests/SVG/peep.svg';
import WallMockup from '@/../public/Assests/SVG/wall_mockup.svg';
import { CheckCircle, AppleLogo, GooglePlayLogo } from 'phosphor-react';
import PlaystoreLogo from '@/../public/Assests/SVG/playstore.svg';
import AppstoreLogo from '@/../public/Assests/SVG/app-store.svg';
import { toast } from 'sonner';

const Downloadwall = () => {
    return (
        <Container>
            {/* ── MOBILE VIEW ── */}
            <section className="md:hidden relative w-full bg-[#FFCC00] rounded-[2rem] px-6 pt-10 pb-0 flex flex-col items-center overflow-hidden mb-20">
                {/* Title */}
                <div className="w-full mb-6">
                    <h2 className="text-[26px] font-black text-[#152B28] leading-[1.15] tracking-tight font-didot">
                        Clean Clothes. Zero Hassle.<br />DryDash
                    </h2>
                </div>

                {/* Feature Checklist */}
                <div className="w-full grid grid-cols-2 gap-y-5 gap-x-4 mb-8">
                    {['Stain Removal', 'Fabric Care', 'Odor Free', 'Quick Delivery'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                            <CheckCircle size={22} weight="fill" className="text-[#152B28] shrink-0" />
                            <span className="text-[#152B28] font-bold text-[14px]">{item}</span>
                        </div>
                    ))}
                </div>

                {/* App Buttons */}
                <div className="flex flex-col gap-4 w-full items-center mb-8">
                    <a target="_blank" href="https://apps.apple.com/in/app/drydash/id6761757578">
                        <button className="bg-black text-white flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl w-[200px]">
                            <Image src={AppstoreLogo} alt="App Store" className="w-[30px] h-auto" />
                            <div className="flex flex-col items-start gap-[2px]">
                                <span className="text-[9px] text-white/70 leading-none font-medium uppercase tracking-wider">Get it on</span>
                                <span className="text-[15px] font-bold leading-none tracking-tight">App Store</span>
                            </div>
                        </button>
                    </a>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.drydash.newCustomer&hl=en_IN">
                        <button className="bg-black text-white flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl w-[200px]">
                            <Image src={PlaystoreLogo} alt="Play Store" className="w-[30px] h-auto" />
                            <div className="flex flex-col items-start gap-[2px]">
                                <span className="text-[9px] text-white/70 leading-none font-medium uppercase tracking-wider">Get it on</span>
                                <span className="text-[15px] font-bold leading-none tracking-tight">Google play</span>
                            </div>
                        </button>
                    </a>
                </div>

                {/* Peep Illustration - bottom aligned */}
                <div className="w-full relative flex justify-center items-end mt-auto">
                    <Image
                        src={PeepIllustration}
                        alt="People Illustration"
                        className="w-[110%] max-w-none h-auto object-contain"
                    />
                </div>
            </section>

            {/* ── DESKTOP VIEW ── */}
            <section className="hidden md:flex relative w-full bg-[#FFCC00] rounded-[2.5rem] md:pl-8 pl-4 pr-0 lg:pl-16 lg:pr-0 md:py-0 py-10 flex-col lg:flex-row justify-between items-center overflow-hidden mb-20 2xl:h-[600px] h-[485px]">

                {/* Left Side Content */}
                <div className="flex flex-col z-20 w-full lg:w-[55%] mb-10 lg:mb-0">
                    <h2 className="md:text-4xl text-2xl 2xl:text-5xl font-black text-[#001714] leading-[1.1] mb-6 tracking-tight font-didot">
                        Clean Clothes. Zero Hassle.<br />DryDash
                    </h2>
                    <p className="text-[#152B28]/85 text-[15px] 2xl:text-[16px] leading-[1.6] mb-10 max-w-[500px]">
                        DryDash provides professional dry cleaning that removes stains, dirt, and
                        odors while protecting your fabric&apos;s quality. With careful handling and
                        convenient pickup and delivery, we make garment care simple and hassle-free.
                    </p>

                    {/* Feature List */}
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 2xl:mb-10 mb-8 max-w-[400px]">
                        {['Stain Removal', 'Fabric Care', 'Odor Free', 'Quick Delivery'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle size={24} weight="fill" className="text-[#152B28]" />
                                <span className="text-[#152B28] font-bold text-[15px]">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* App Store and playstore Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a target="_blank" href="https://apps.apple.com/in/app/drydash/id6761757578">
                            <button className="bg-black text-white flex items-center justify-center gap-3 px-6 py-3 rounded-xl hover:bg-black transition-colors w-[180px] cursor-pointer">
                                <Image src={AppstoreLogo} alt="Play Store" className="w-6 h-auto" />
                                <div className="flex flex-col items-start gap-[2px]">
                                    <span className="text-[10px] text-white/70 leading-none font-medium uppercase tracking-wide">Get it on</span>
                                    <span className="text-[17px] font-bold leading-none tracking-tight">App Store</span>
                                </div>
                            </button>
                        </a>
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.drydash.newCustomer&hl=en_IN">
                            <button className="bg-black text-white flex items-center justify-center gap-3 px-6 py-3 rounded-xl hover:bg-black transition-colors w-[180px] cursor-pointer">
                                <Image src={PlaystoreLogo} alt="Play Store" className="w-6 h-auto" />
                                <div className="flex flex-col items-start gap-[2px]">
                                    <span className="text-[10px] text-white/70 leading-none font-medium uppercase tracking-wide">Get it on</span>
                                    <span className="2xl:text-[16px] text-[15px] font-bold leading-none tracking-tight">Google play</span>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Center/Right Illustrations */}
                <div className="w-full lg:w-[45%] h-[400px] lg:h-full relative flex justify-center lg:justify-end items-end z-10 pointer-events-none mt-10 lg:mt-0">
                    {/* Peep illustration */}
                    <div className="absolute right-[10%] lg:right-[15%] md:bottom-[-20%] w-[80%] max-w-[620px] 2xl:max-w-[800px] z-0">
                        <Image
                            src={PeepIllustration}
                            alt="People Illustration"
                            className="w-full h-auto object-contain scale-125 lg:scale-150 origin-bottom-right"
                        />
                    </div>

                    {/* Wall Mockup (Phones) */}
                    <div className="absolute right-0 top-0 max-w-[730px] 2xl:max-w-[800px] z-10 rounded-tr-[2.5rem] rounded-br-[2.5rem] p-3 lg:p-15">
                        <Image
                            src={WallMockup}
                            alt="Mobile App Mockup"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

            </section>
        </Container>
    );
};

export default Downloadwall;