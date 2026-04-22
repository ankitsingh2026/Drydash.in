'use client';

import React from 'react';
import Image from 'next/image';
import PlaystoreLogo from '@/../public/Assests/SVG/playstore.svg';
import AppStoreLogo from '@/../public/Assests/SVG/app-store.svg';
// import { AndroidLogo, QrCode } from 'phosphor-react';
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '@/components/motion-primitives/morphing-dialog';
import playStoreQR from '@/../public/Assests/SVG/Download_QR.svg'

interface DownloadBtnProps {
    variant?: 'default' | 'minimal_black';
    varient?: 'default' | 'minimal_black'; // Support for typo in request
}

const DownloadBtn = ({ variant = 'default', varient }: DownloadBtnProps) => {
    const activeVariant = varient || variant;
    const [isIOS, setIsIOS] = React.useState(false);

    React.useEffect(() => {
        // Detect if device is iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(userAgent)) {
            setIsIOS(true);
        }
    }, []);

    return (
        <div className="will-change-transform w-full sm:w-auto flex flex-col justify-center">
            {/* Desktop View (Morphing Dialog) */}
            <div className="hidden md:block">
                <MorphingDialog
                    transition={{
                        type: 'spring',
                        bounce: 0.05,
                        duration: 0.25,
                    }}
                >
                    {activeVariant === 'minimal_black' ? (
                        <MorphingDialogTrigger
                            style={{ borderRadius: '16px' }}
                            className="w-auto mx-auto"
                        >
                            <div
                                style={{ borderRadius: '16px' }}
                                className="bg-black text-white font-black text-lg px-12 h-14 md:h-16 flex items-center justify-center transition-transform hover:scale-105 active:scale-[0.98] shadow-xl w-max"
                            >
                                Download App
                            </div>
                        </MorphingDialogTrigger>
                    ) : (
                        <MorphingDialogTrigger
                            style={{ borderRadius: '12px' }}
                            className="p-[2px] bg-[linear-gradient(20deg,#142926,#458F83)] w-full"
                        >
                            <div
                                style={{ borderRadius: '12px' }}
                                className="bg-[linear-gradient(45deg,#152B28,#21453F)] text-white 2xl:text-lg text-[15px] 2xl:w-50 w-full px-8 2xl:h-14 h-12 flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
                            >
                                <Image src={PlaystoreLogo} alt="Play Store" className="w-5 h-auto hidden" />
                                Download App
                            </div>
                        </MorphingDialogTrigger>
                    )}

                    <MorphingDialogContainer>
                        <MorphingDialogContent
                            style={{ borderRadius: '24px' }}
                            className="pointer-events-auto relative flex h-auto w-full sm:w-[650px] flex-col md:flex-row overflow-hidden border border-white/10 bg-[#121212] shadow-2xl"
                        >
                            {/* Left Side: Instructions */}
                            <div className="flex-1 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 bg-[#171717] z-10">
                                <div>
                                    <MorphingDialogTitle className="text-3xl font-bold text-white mb-4 leading-[1.15] tracking-tight">
                                        Steps to<br />Download
                                    </MorphingDialogTitle>

                                    <MorphingDialogDescription disableLayoutAnimation className="flex flex-col gap-6 mt-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-[13px] font-bold shrink-0">1</div>
                                            <span className="text-[#a1a1aa] text-[16px] font-medium tracking-wide">Open your phone's QR scanner</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-[13px] font-bold shrink-0">2</div>
                                            <span className="text-[#a1a1aa] text-[16px] font-medium tracking-wide">Scan the QR code below</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-[13px] font-bold shrink-0">3</div>
                                            <span className="text-[#a1a1aa] text-[16px] font-medium tracking-wide">Tap the link to download</span>
                                        </div>
                                    </MorphingDialogDescription>
                                </div>
                            </div>

                            {/* Right Side: QR Code Area */}
                            <div className="flex-[0.8] bg-[#121212] p-10 flex flex-col items-center justify-center relative">
                                <div className="relative p-6">
                                    {/* Corner brackets */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-sm pointer-events-none"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-sm pointer-events-none"></div>

                                    <div className="w-[180px] h-[180px] bg-white flex items-center justify-center rounded-sm">
                                        <Image src={playStoreQR} alt="Play Store QR" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            </div>

                        </MorphingDialogContent>
                    </MorphingDialogContainer>
                </MorphingDialog>
            </div>

            {/* Mobile View (Direct Link) */}
            <div className="block md:hidden w-full">
                <a
                    href={isIOS ? "https://apps.apple.com/in/app/drydash/id6761757578" : "https://play.google.com/store/apps/details?id=com.drydash.newCustomer&hl=en_IN"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                >
                    {activeVariant === 'minimal_black' ? (
                        <div
                            style={{ borderRadius: '16px' }}
                            className="bg-black text-white font-black text-lg px-12 h-14 md:h-16 flex items-center justify-center transition-transform hover:scale-105 active:scale-[0.98] shadow-xl w-max mx-auto"
                        >
                            Download App
                        </div>
                    ) : (
                        <div
                            style={{ borderRadius: '12px' }}
                            className="p-[2px] bg-[linear-gradient(20deg,#142926,#458F83)] w-full"
                        >
                            <div
                                style={{ borderRadius: '12px' }}
                                className="bg-[linear-gradient(45deg,#152B28,#21453F)] text-white text-[15px] w-full px-8 h-12 flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
                            >
                                <Image src={isIOS ? AppStoreLogo : PlaystoreLogo} alt={isIOS ? "App Store" : "Play Store"} className="w-5 h-auto text-white fill-white stroke-white" />
                                Download App
                            </div>
                        </div>
                    )}
                </a>
            </div>
        </div>
    );
};

export default DownloadBtn;