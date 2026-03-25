"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  Droplets,
  Wind,
  Timer,
  ShieldCheck,
  MapPin,
  Bell,
  Star,
  Apple,
  Play,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  Check,
  ArrowRight,
  RefreshCcw,
  Zap,
  Shirt,
  ShoppingBag,
  Truck,
  Gem,
  Smartphone,
  Calendar, Headset,
  Quote
} from 'lucide-react';

// --- Utility for loading scripts (GSAP) ---
const useScript = (src: string) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [src]);
};

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    // { name: 'Testimonials', href: '#testimonials' },
    // { name: 'Franchise', href: '#franchise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav ref={navRef} className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#0A121B]/90 backdrop-blur-xl border-b border-[#03AE96]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className=" flex items-center gap-2 cursor-pointer group">
            <img src="/drydash_lo.png" alt="DryDash" className="w-[70%] h-[100%] rounded-xl object-cover" />
          </div>

          {/* Desktop Nav - 5 Elements */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-[#F0F6FC] hover:text-[#4EF1BD] transition-colors"
                >
                  {item.name}
                </a>
              ))}

              <Link
                href="https://wa.me/918287636979?text=Hi!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#E5BD43] to-[#F6E05E] text-[#0A121B] hover:shadow-[0_0_20px_rgba(229,189,67,0.4)] px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book Pickup
              </Link>
            </div>
          </div>

          {/* Mobile menu button (links to WhatsApp) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4EF1BD] hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A121B] border-b border-[#03AE96]/20 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#F0F6FC] hover:text-[#4EF1BD] hover:bg-[#03AE96]/10"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const shoeRef = useRef<HTMLDivElement | null>(null);
  const shoeInnerRef = useRef<HTMLDivElement | null>(null);
  const laundryRef = useRef<HTMLDivElement | null>(null);
  const bagRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const avatarsWrapperRef = useRef<HTMLDivElement | null>(null);
  const wrapperTweenRef = useRef<any>(null);
  const avatarsTweenRef = useRef<any>(null);
  const tweensRef = useRef<any[]>([]);
  const rotatingRef = useRef<HTMLSpanElement | null>(null);
  const cities = ['Noida', 'Delhi', 'Ghaziabad', 'Gurugram'];


  useEffect(() => {
    let mounted = true;

    const init = () => {
      const gsap = (window as any).gsap;
      if (!mounted) return;
      if (!gsap) {
        // retry until GSAP loads (Home loads the script)
        setTimeout(init, 120);
        return;
      }

      const elements = [
        // stronger quick vertical shake for the shoe card
        { el: shoeRef.current, opts: { y: -16, rotation: -6, duration: 1.1 } },
        // faster, noticeable bob for laundry
        { el: laundryRef.current, opts: { y: -12, rotation: 5, duration: 1.2 } },
        { el: bagRef.current, opts: { y: -10, rotation: 2, duration: 2.2 } },
        { el: badgeRef.current, opts: { y: -14, rotation: 0, duration: 2.8 } },
      ].filter((x) => x.el) as any[];

      elements.forEach((item, idx) => {
        const el = item.el as HTMLElement;
        const opts = item.opts;

        const tween = gsap.to(el, {
          y: opts.y,
          rotation: opts.rotation,
          duration: opts.duration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: idx * 0.12,
        });

        tweensRef.current.push(tween);

        // hover/touch interactions
        const enter = () => {
          tween.pause();
          gsap.to(el, { scale: 1.04, rotation: 0, y: 0, duration: 0.28, ease: 'power2.out' });
        };
        const leave = () => {
          gsap.to(el, { scale: 1, duration: 0.28, ease: 'power2.out' });
          tween.resume();
        };

        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
        el.addEventListener('touchstart', enter);
        el.addEventListener('touchend', leave);

        // store cleanup per element
        (el as any)._gsapCleanup = () => {
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
          el.removeEventListener('touchstart', enter);
          el.removeEventListener('touchend', leave);
        };
      });

      // subtle movement for avatar images inside the bag card
      const bagEl = bagRef.current;
      if (bagEl) {
        const avatars = bagEl.querySelectorAll('img');
        if (avatars?.length) {
          avatarsTweenRef.current = gsap.to(avatars, {
            x: (i: number) => (i % 2 === 0 ? -4 : 4),
            y: (i: number) => (i % 2 === 0 ? -6 : 6),
            rotation: () => (Math.random() - 0.5) * 6,
            duration: 1.6,
            repeat: -1,
            yoyo: true,
            stagger: 0.12,
            ease: 'sine.inOut'
          });
        }

        // bob the whole avatar row up and down slightly
        const avatarsWrapper = avatarsWrapperRef.current;
        if (avatarsWrapper) {
          wrapperTweenRef.current = gsap.to(avatarsWrapper, {
            y: -6,
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 0.05
          });
        }

        // pause avatar tweens when bag card is hovered (additional safety)
        const pauseAvatars = () => {
          (avatarsTweenRef.current as any)?.pause?.();
          (wrapperTweenRef.current as any)?.pause?.();
        };
        const resumeAvatars = () => {
          (avatarsTweenRef.current as any)?.resume?.();
          (wrapperTweenRef.current as any)?.resume?.();
        };

        bagEl.addEventListener('mouseenter', pauseAvatars);
        bagEl.addEventListener('mouseleave', resumeAvatars);
        bagEl.addEventListener('touchstart', pauseAvatars);
        bagEl.addEventListener('touchend', resumeAvatars);

        const prevBagCleanup = (bagEl as any)._gsapCleanup;
        (bagEl as any)._gsapCleanup = () => {
          prevBagCleanup && prevBagCleanup();
          bagEl.removeEventListener('mouseenter', pauseAvatars);
          bagEl.removeEventListener('mouseleave', resumeAvatars);
          bagEl.removeEventListener('touchstart', pauseAvatars);
          bagEl.removeEventListener('touchend', resumeAvatars);
        };
      }

      // subtle up/down bob for inner shoe area
      const shoeInnerEl = shoeInnerRef.current;
      if (shoeInnerEl) {
        const innerTween = gsap.to(shoeInnerEl, {
          y: -8,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.1
        });
        tweensRef.current.push(innerTween);

        // pause inner on shoe hover (shoeRef already has its own handlers)
        const enterInner = () => innerTween.pause();
        const leaveInner = () => innerTween.resume();
        const shoeEl = shoeRef.current;
        if (shoeEl) {
          shoeEl.addEventListener('mouseenter', enterInner);
          shoeEl.addEventListener('mouseleave', leaveInner);
          shoeEl.addEventListener('touchstart', enterInner);
          shoeEl.addEventListener('touchend', leaveInner);

          const prev = (shoeEl as any)._gsapCleanup;
          (shoeEl as any)._gsapCleanup = () => {
            prev && prev();
            shoeEl.removeEventListener('mouseenter', enterInner);
            shoeEl.removeEventListener('mouseleave', leaveInner);
            shoeEl.removeEventListener('touchstart', enterInner);
            shoeEl.removeEventListener('touchend', leaveInner);
          };
        }
      }
    };

    init();

    return () => {
      mounted = false;
      const bagEl = bagRef.current as any;
      if (bagEl && bagEl._gsapCleanup) bagEl._gsapCleanup();
      try {
        // kill any tweens we stored
        tweensRef.current.forEach((t) => t?.kill?.());
        wrapperTweenRef.current?.kill?.();
        (avatarsTweenRef.current as any)?.kill?.();
      } catch (e) { }
    };
  }, []);

  // (Removed typewriter animation; hours shown statically)

  // rotating services text (under the heading) -> typewriter-style
  useEffect(() => {
    let mounted = true;
    let timeoutId: number | null = null;
    const el = rotatingRef.current;
    if (!el) return;

    const texts = cities;
    let listIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const step = () => {
      if (!mounted) return;
      const current = texts[listIdx];

      if (!deleting) {
        charIdx = Math.min(current.length, charIdx + 1);
        el.textContent = current.slice(0, charIdx);

        if (charIdx === current.length) {
          timeoutId = window.setTimeout(() => { deleting = true; step(); }, 1200);
        } else {
          timeoutId = window.setTimeout(step, 90);
        }
      } else {
        charIdx = Math.max(0, charIdx - 1);
        el.textContent = current.slice(0, charIdx);

        if (charIdx === 0) {
          deleting = false;
          listIdx = (listIdx + 1) % texts.length;
          timeoutId = window.setTimeout(step, 300);
        } else {
          timeoutId = window.setTimeout(step, 40);
        }
      }
    };

    // start typing
    el.textContent = '';
    timeoutId = window.setTimeout(step, 300);

    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  return (
    <section className="relative flex items-center sm:pt-28 sm:pb-20 pt-24 pb-12 overflow-hidden bg-[#0A121B]">
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4EF1BD 1px, transparent 1px), radial-gradient(#03AE96 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#044288] rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#03AE96] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse delay-700"></div>

      <div className="max-w-7xl 2x:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Side: Content */}
          <div className="flex flex-col items-start text-left">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5BD43]/40 bg-[#E5BD43]/10 mb-6 backdrop-blur-md">
              <Star className="w-3 h-3 text-[#E5BD43] fill-[#E5BD43]" />
              <span className="text-[#E5BD43] text-xs font-bold tracking-widest uppercase">Premium Care</span>
            </div> */}

            <h1 className="text-3xl md:text-6xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.5]">
              Shoe Spa <br /> & Dry Cleaning in<br />
              <span className="relative inline-block">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4EF1BD] to-[#03AE96] font-extrabold">24 Hours</span>
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E5BD43]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-light text-white mb-2">
              Delivered in <span ref={rotatingRef} className="font-bold text-[#4EF1BD]"></span>
            </h2>

            {/* <p className="max-w-xl text-md text-[#AEAEAF] mb-8 leading-relaxed">
              DryDash brings expert cleaning with fast pickup, eco-friendly care, and doorstep delivery—crafted for busy professionals and modern families.
            </p> */}

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 w-[100%] sm:w-auto mb-10">
              <Link
                href="https://wa.me/918287636979?text=Hi!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#E5BD43] to-[#F6E05E] text-[#0A121B] hover:shadow-[0_0_20px_rgba(229,189,67,0.4)] px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book Pickup <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://wa.me/918287636979?text=Hi!"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 md:px-8 md:py-2 bg-transparent border border-[#6A6F76] text-[#F0F6FC] rounded-full font-bold text-lg hover:border-[#F0F6FC] hover:bg-[#F0F6FC]/5 transition-all flex items-center text-sm justify-center gap-2"
              >
                Order Now
              </Link>

            </div> */}

          </div>

          {/* Right Side: Creative Composition */}
          <div className="hidden lg:block relative w-full lg:h-[500px] perspective-1000">
            {/* Main Card: Shoe */}
            <div ref={shoeRef} className="relative lg:absolute lg:top-10 lg:right-10 w-full lg:w-60 p-4 bg-[#0F1923] border border-[#03AE96]/30 rounded-2xl shadow-2xl z-20 lg:transform lg:rotate-[-5deg] lg:hover:rotate-0 transition-transform duration-500 hover:z-30 group">
              <div ref={shoeInnerRef} className="bg-[#0A121B] rounded-xl h-48 mb-4 relative overflow-hidden flex items-center justify-center border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/qr-code.png" alt="QR code" className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-sm" />
                </div>
                {/* <Sparkles className="w-16 h-16 text-[#4EF1BD] group-hover:scale-110 transition-transform duration-500" /> */}
                {/* <div className="absolute bottom-2 right-2 px-2 py-1 bg-[#4EF1BD] text-[#0A121B] text-xs font-bold rounded">SPA MODE</div> */}
              </div>
              <div className="justify-between items-center">
                <div className='items-center text-center'>
                  <p className="text-white text-center font-bold">Download App</p>
                </div>
              </div>
            </div>

            {/* Floating Badge: Delivery */}
            <div ref={badgeRef} className="hidden lg:flex absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A121B]/80 backdrop-blur-md border border-[#4EF1BD] p-4 rounded-full shadow-[0_0_30px_rgba(78,241,189,0.2)] z-30 animate-bounce-slow items-center gap-3">
              <div className="w-10 h-10 bg-[#4EF1BD] rounded-full flex items-center justify-center text-[#0A121B]">
                <Truck className="w-5 h-5" />
              </div>
              <div className="pr-2">
                <p className="text-[#F0F6FC] font-bold text-sm">On the way</p>
                <p className="text-[#4EF1BD] text-xs">Arriving in 15 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyDryDash = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const reasons = [
    {
      icon: Timer,
      title: "24-Hour Delivery Promise",
      desc: "Next-day delivery for laundry and dry cleaning."
    },
    {
      icon: Droplets,
      title: "Eco-Friendly Solvents",
      desc: "No harsh chemicals. No petrol smell. Safe for skin & fabrics."
    },
    {
      icon: Truck,
      title: "Doorstep Convenience",
      desc: "Pickup and delivery anywhere in your city."
    },
    {
      icon: Shirt,
      title: "Premium Fabric Care",
      desc: "Delicate, luxury and designer wear handled by specialists."
    },
  ];

  useEffect(() => {
    let mounted = true;
    const init = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (!mounted) return;
      if (!gsap || !ScrollTrigger) {
        setTimeout(init, 100);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      // Animate cards staggering in
      if (containerRef.current) {
        gsap.fromTo(cardsRef.current.filter(Boolean),
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            }
          }
        );
      }
    };
    init();
    return () => { mounted = false; };
  }, []);

  return (
    <section className="py-24 relative bg-[#0A121B] overflow-hidden border-t border-[#ffffff]/5">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B3729]/20 to-[#06221a]/20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#03AE96]/10 rounded-full filter blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E5BD43]/5 rounded-full filter blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 relative">
          <div className="inline-block relative">
            <h2 className="text-[#E5BD43] font-bold tracking-[0.2em] uppercase text-sm mb-3 relative z-10">The DryDash Standard</h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#E5BD43]/20 blur-sm"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mt-2">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4EF1BD] to-[#03AE96] relative">DryDash?</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              ref={el => { if (el) cardsRef.current[idx] = el; }}
              className="bg-[#0F1923]/80 backdrop-blur-sm p-8 rounded-3xl border border-[#ffffff]/5 hover:border-[#03AE96]/40 transition-all duration-300 group relative overflow-hidden hover:shadow-[0_10px_40px_-10px_rgba(3,174,150,0.15)] hover:-translate-y-2"
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#03AE96]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="w-16 h-16 bg-[#044288]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#03AE96] transition-all duration-300 group-hover:scale-110 shadow-inner ring-1 ring-[#ffffff]/5 group-hover:ring-[#03AE96]/50">
                <item.icon className="w-8 h-8 text-[#4EF1BD] group-hover:text-white transition-colors duration-300" />
              </div>

              <h4 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h4>
              <p className="text-[#AEAEAF] leading-relaxed text-sm relative z-10 group-hover:text-[#D1EDE0] transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DetailedServices = () => {
  const details = [
    {
      title: "Shoe Spa",
      desc: "From casual sneakers to premium leather—cleaning, deodorizing, polishing, renewing.",
      image: "image/shoe.jpg",
      icon: Sparkles,
      color: "#03AE96"
    },
    {
      title: "Bag Spa",
      desc: "Deep cleaning for handbags with premium leather treatment and restoration.",
      image: "image/bag.jpg",
      icon: ShoppingBag,
      color: "#E5BD43"
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0A121B] relative border-t border-[#ffffff]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#4EF1BD] font-bold tracking-widest uppercase text-sm mb-3">Complete Care</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Our Premium <span className="text-[#E5BD43]">Services</span></h3>
        </div>
      </div>
      {details.map((service, index) => (
        <div key={index} className="flex flex-col md:flex-row group">
          {/* Text Section */}
          <div className={`flex-1 p-12 lg:p-24 flex flex-col justify-center bg-[#0A121B] border-b md:border-b-0 border-[#ffffff]/5 ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2 bg-[#0F1923]'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#ffffff]/5 flex items-center justify-center border border-[#ffffff]/10" style={{ borderColor: `${service.color}40` }}>
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              {/* <span className="text-5xl font-bold text-[#ffffff]/10 font-mono absolute pointer-events-none -ml-4 -mt-12 select-none">0{index + 1}</span> */}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-[#AEAEAF] text-lg leading-relaxed mb-8 max-w-md">
              {service.desc}
            </p>
            <div>
              <Link href="https://wa.me/918287636979?text=Hi!" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all" style={{ color: service.color }}>
                Book Pickup <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className={`flex-1 relative overflow-hidden h-[400px] md:h-auto ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
            <div className="absolute inset-0 bg-[#0A121B]/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A121B] via-transparent to-transparent opacity-50"></div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Schedule Pickup", desc: "Book via WhatsApp, call, or website.", icon: Smartphone },
    { num: "02", title: "We Collect", desc: "Doorstep pickup at your preferred time.", icon: Truck },
    { num: "03", title: "Expert Cleaning", desc: "Fabric-safe processes, eco cleaning & strict quality checks.", icon: Sparkles },
    { num: "04", title: "24h Delivery", desc: "Fresh, clean, and neatly packed in 24 hours.", icon: Timer },
  ];

  // typed as an array of nullable div refs
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconTweensRef = useRef<any[]>([]);
  const entranceTweenRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    const start = () => {
      const gsap = (window as any).gsap;
      if (!mounted) return;
      if (!gsap) {
        setTimeout(start, 120);
        return;
      }

      const els = stepRefs.current.filter(Boolean) as HTMLElement[];
      if (!els.length) return;

      entranceTweenRef.current = gsap.from(els, {
        autoAlpha: 0,
        y: 20,
        stagger: 0.14,
        duration: 0.8,
        ease: 'power3.out'
      });

      els.forEach((el, i) => {
        const svg = el.querySelector('svg');
        if (svg) {
          const t = gsap.to(svg, {
            y: -6,
            rotation: (i % 2 === 0 ? 4 : -4),
            duration: 1.6,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.08
          });
          iconTweensRef.current.push(t);
        }

        const enter = () => {
          iconTweensRef.current.forEach((T) => T?.pause?.());
          gsap.to(el, { scale: 1.03, duration: 0.24, ease: 'power2.out' });
        };
        const leave = () => {
          iconTweensRef.current.forEach((T) => T?.resume?.());
          gsap.to(el, { scale: 1, duration: 0.24, ease: 'power2.out' });
        };

        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
        el.addEventListener('touchstart', enter);
        el.addEventListener('touchend', leave);

        (el as any)._gsapCleanup = () => {
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
          el.removeEventListener('touchstart', enter);
          el.removeEventListener('touchend', leave);
        };
      });
    };

    start();

    return () => {
      mounted = false;
      stepRefs.current.forEach((el: any) => el && el._gsapCleanup && el._gsapCleanup());
      try {
        entranceTweenRef.current?.kill?.();
        iconTweensRef.current.forEach((t) => t?.kill?.());
      } catch (e) { }
    };
  }, []);

  return (
    <section id="process" className="py-24 relative bg-gradient-to-b from-[#0B3729] to-[#06221a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#4EF1BD] font-bold tracking-widest uppercase text-sm mb-3">How DryDash Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">A Seamless Process <span className="text-[#E5BD43]">Designed for You</span></h3>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-[#03AE96]/20 via-[#E5BD43]/20 to-[#03AE96]/20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              // <-- FIXED: callback body returns void (no value)
              <div
                key={idx}
                ref={(el) => { stepRefs.current[idx] = el; }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-[#0A121B] rounded-full border-4 border-[#0F1923] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-[#03AE96]/10 flex items-center justify-center border border-[#03AE96]/30 group-hover:border-[#E5BD43] group-hover:bg-[#E5BD43]/10 transition-colors">
                    <step.icon className="w-8 h-8 text-[#4EF1BD] group-hover:text-[#E5BD43] transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#044288] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-[#0F1923]">
                    {step.num}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#4EF1BD] transition-colors">{step.title}</h4>
                <p className="text-[#AEAEAF] text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const Gallery = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);


  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    const el = containerRef.current;
    if (!el) return;

    const { left, width } = el.getBoundingClientRect();

    const clientX =
      "touches" in event
        ? event.touches[0]?.clientX ?? 0
        : event.clientX;

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };


  return (
    <section id="gallery" className="py-24 bg-[#0A121B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#4EF1BD] font-bold tracking-widest uppercase text-sm mb-3">Real Results</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Before & After</h3>
        </div>

        <div
          className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-[#ffffff]/10 shadow-2xl cursor-col-resize select-none"
          ref={containerRef}
          onMouseDown={() => isDragging.current = true}
          onMouseUp={() => isDragging.current = false}
          onMouseLeave={() => isDragging.current = false}
          onMouseMove={(e) => isDragging.current && handleMove(e)}
          onTouchMove={handleMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 bg-gray-800">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=2525&auto=format&fit=crop"
              alt="After"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#03AE96] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">AFTER</div>
          </div>

          {/* Before Image (Foreground Clipped) */}
          <div
            className="absolute inset-0 bg-gray-900 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=2535&auto=format&fit=crop"
              alt="Before"
              className="w-full h-full object-cover grayscale brightness-75 contrast-125"
            />
            <div className="absolute top-4 left-4 bg-[#6A6F76] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">BEFORE</div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3 bg-gray-800"></div>
                <div className="w-0.5 h-3 bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-[#AEAEAF] text-sm">
          Drag the slider to see the magic
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "DryDash returned my sneakers looking completely new. Worth every rupee.",
      author: "Rahul S.",
      role: "Sneakerhead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
    },
    {
      text: "My saree dry clean was flawless. No color fade, no chemical smell.",
      author: "Priya M.",
      role: "Fashion Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
      text: "Fast, reliable and high-quality service. Highly recommended.",
      author: "Vikram K.",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-gradient-to-b from-[#0B3729] to-[#06221a] overflow-hidden border-t border-[#ffffff]/5">
      {/* Decorative Elements */}
      <div className="absolute left-10 top-20 w-32 h-32 bg-[#E5BD43]/5 rounded-full filter blur-[50px]"></div>
      <div className="absolute right-10 bottom-20 w-32 h-32 bg-[#4EF1BD]/5 rounded-full filter blur-[50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#E5BD43] font-bold tracking-widest uppercase text-sm mb-3">Happy Customers</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Trusted by the <span className="text-[#4EF1BD]">Best</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#0F1923] p-8 rounded-2xl border border-[#ffffff]/5 relative group hover:-translate-y-2 transition-transform duration-300">
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-[#ffffff]/10 group-hover:text-[#4EF1BD]/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E5BD43] text-[#E5BD43]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#F0F6FC] text-lg leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-[#ffffff]/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#03AE96]/30 group-hover:border-[#4EF1BD] transition-colors">
                  <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.author}</h4>
                  <p className="text-[#AEAEAF] text-xs uppercase tracking-wide">{review.role}</p>
                </div>
              </div>

              {/* Bottom Gradient Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#03AE96] via-[#4EF1BD] to-[#03AE96] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FranchisePartner = () => {
  const [form, setForm] = useState({ name: '', city: '', investment: '', email: '', phone: '' });

  return (
    <section id="franchise" className="py-20 bg-[#071018] border-t border-[#ffffff]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Pitch / Benefits */}
          <div className="text-left">
            <h2 className="text-4xl font-extrabold text-white mb-4">Start Your <span className="text-[#4EF1BD]">DRYDASH</span> Franchise</h2>
            <p className="text-[#AEAEAF] mb-8 max-w-xl">Join the future of laundry — proven operations, cutting-edge technology, and a market ready for disruption. Get full training, marketing support, and ongoing operational help.</p>


            <div className="mt-8 mb-8">
              <div className="bg-[#0F1923] border border-[#ffffff]/5 p-6 rounded-2xl">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-3">
                  <Gem className="w-5 h-5 text-[#4EF1BD]" />
                  What You Get
                </h4>
                <ul className="space-y-2 text-[#AEAEAF] text-sm list-disc list-inside">
                  <li>Turn-key plant setup assistance</li>
                  <li>Complete technology stack access</li>
                  <li>Ongoing operational training</li>
                  <li>Marketing & branding support</li>
                  <li>Dedicated franchise success manager</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#044288] flex items-center justify-center text-[#4EF1BD]">
                  <Gem className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold">18-24 mo Avg ROI</h4>
                  <p className="text-[#AEAEAF] text-sm">Fast ramp-up with our business playbook.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#044288] flex items-center justify-center text-[#4EF1BD]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Full Training & Support</h4>
                  <p className="text-[#AEAEAF] text-sm">Operational, technical and marketing assistance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#044288] flex items-center justify-center text-[#4EF1BD]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Included Tech Platform</h4>
                  <p className="text-[#AEAEAF] text-sm">Centralized ops dashboard and customer management.</p>
                </div>
              </div>
            </div>


          </div>

          {/* Right: Form */}
          <div className="bg-[#0F1923] p-8 rounded-2xl shadow-2xl border border-[#ffffff]/5">
            <h3 className="text-white font-bold text-xl mb-4">Express Your Interest</h3>
            <p className="text-sm text-[#AEAEAF] mb-6">Fill out the form below to get started. We'll respond within 24 hours.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs text-[#AEAEAF]">Your Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="w-full mt-2 p-3 rounded-lg bg-[#071018] border border-[#ffffff]/10 text-white" />
              </div>

              <div>
                <label className="text-xs text-[#AEAEAF]">City / Region</label>
                <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="New York, NY" className="w-full mt-2 p-3 rounded-lg bg-[#071018] border border-[#ffffff]/10 text-white" />
              </div>

              <div>
                <label className="text-xs text-[#AEAEAF]">Investment Range</label>
                <select value={form.investment} onChange={(e) => setForm({ ...form, investment: e.target.value })} className="w-full mt-2 p-3 rounded-lg bg-[#071018] border border-[#ffffff]/10 text-white">
                  <option value="">Select range</option>
                  <option>₹10L - ₹25L</option>
                  <option>₹25L - ₹50L</option>
                  <option>₹50L+</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#AEAEAF]">Email Address</label>
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full mt-2 p-3 rounded-lg bg-[#071018] border border-[#ffffff]/10 text-white" />
                </div>
                <div>
                  <label className="text-xs text-[#AEAEAF]">Phone Number</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(555) 123-4567" className="w-full mt-2 p-3 rounded-lg bg-[#071018] border border-[#ffffff]/10 text-white" />
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-[#4EF1BD] to-[#03AE96] text-[#0A121B] font-bold rounded-lg shadow-lg">Start Your DRYDASH Franchise</button>

              <p className="text-xs text-[#6A6F76] mt-2">We’ll respond within 24 hours. Your information is secure.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const DownloadApp = () => {
  const phoneARef = useRef<HTMLImageElement | null>(null);
  const phoneBRef = useRef<HTMLImageElement | null>(null);
  const featuresRef = useRef<HTMLSpanElement | null>(null);
  const drRef = useRef<HTMLSpanElement | null>(null);
  const features = ['Schedule', 'Track', 'Pay', '24/7 Support'];

  useEffect(() => {
    let mounted = true;
    const start = () => {
      const gsap = (window as any).gsap;
      if (!mounted) return;
      if (!gsap) {
        setTimeout(start, 120);
        return;
      }

      // phone entrance
      if (phoneARef.current && phoneBRef.current) {
        gsap.fromTo(phoneARef.current, { x: 40, y: -10, autoAlpha: 0, rotation: 6 }, { x: 0, y: 0, autoAlpha: 1, rotation: 6, duration: 0.8, ease: 'power3.out' });
        gsap.fromTo(phoneBRef.current, { x: -40, y: 10, autoAlpha: 0, rotation: -6 }, { x: 0, y: 0, autoAlpha: 1, rotation: -6, duration: 0.9, ease: 'power3.out' });

        // subtle floating
        gsap.to(phoneARef.current, { y: -8, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.4 });
        gsap.to(phoneBRef.current, { y: -6, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.6 });
      }

      // running feature text (fade/slide)
      const el = featuresRef.current;
      if (el) {
        let idx = 0;
        el.textContent = features[idx];
        const swap = () => {
          gsap.to(el, {
            autoAlpha: 0, y: -8, duration: 0.28, ease: 'power2.in', onComplete: () => {
              idx = (idx + 1) % features.length;
              el.textContent = features[idx];
              gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.36, ease: 'power2.out' });
            }
          });
        };
        const iv = window.setInterval(swap, 1800);
        (el as any)._gsapCleanup = () => clearInterval(iv);
      }
    };
    start();
    return () => {
      let el = featuresRef.current as any;
      if (el && el._gsapCleanup) el._gsapCleanup();
      mounted = false;
    };
  }, []);

  // typewriter for 'DRYDASH' in the heading
  useEffect(() => {
    let mounted = true;
    let timeoutId: number | null = null;
    const el = drRef.current;
    if (!el) return;

    const text = 'DRYDASH';

    const start = () => {
      let i = 0;
      const step = () => {
        if (!mounted) return;
        el.textContent = text.slice(0, i);
        i++;
        if (i <= text.length) {
          timeoutId = window.setTimeout(step, 90);
        } else {
          timeoutId = window.setTimeout(() => {
            i = 0;
            step();
          }, 1200);
        }
      };
      step();
    };

    start();

    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#0B3729] to-[#06221a] overflow-hidden">
      {/* Corner gradients */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-[#4EF1BD]/40 to-[#03AE96]/10 filter blur-3xl opacity-80 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#03AE96]/30 to-[#4EF1BD]/5 filter blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Download the <span ref={drRef} className="text-transparent bg-clip-text bg-gradient-to-r from-[#4EF1BD] to-[#03AE96] font-extrabold"></span> App
            </h2>
            <p className="text-[#D1EDE0] max-w-xl mb-3">Everything you need to manage your laundry in one app. Schedule, track, and pay—all from your phone.</p>
            <div className="mb-6">
              <span className="text-sm text-[#4EF1BD] font-semibold mr-3">Features:</span>
              <span ref={featuresRef} className="inline-block text-white/90 font-medium"></span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#044288]/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#4EF1BD]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Real-Time Tracking</h4>
                  <p className="text-[#AEAEAF] text-sm">Know exactly where your clothes are at every moment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#044288]/30 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#4EF1BD]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Smart Notifications</h4>
                  <p className="text-[#AEAEAF] text-sm">Get updates at pickup, processing, and delivery.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#044288]/30 flex items-center justify-center">
                  <RefreshCcw className="w-5 h-5 text-[#4EF1BD]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Easy Payments</h4>
                  <p className="text-[#AEAEAF] text-sm">Multiple payment options with secure checkout.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a className="inline-flex items-center gap-3 bg-[#050505] text-white rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform" href="#" aria-label="Download on the App Store">
                <img src="/apple-48.ico" alt="App Store" className="w-6 h-6 opacity-90" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-white/60">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </a>

              <a className="inline-flex items-center gap-3 bg-[#050505] text-white rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform" href="#" aria-label="Get it on Google Play">
                <img src="/android.png" alt="App Store" className="w-6 h-6 opacity-90" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-white/60">Get it on</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[260px] h-[520px]">
              <img ref={phoneARef} src="/image/2_mockup.png" alt="app phone" className="absolute right-0 top-0 w-56 shadow-2xl transform rotate-6" />
              <img ref={phoneBRef} src="/image/main.png" alt="app phone 2" className="absolute left-0 bottom-0 w-60 shadow-2xl transform -rotate-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 md:py-40 bg-[#0A121B] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/cta_bg.png"
          alt="Dry cleaning background"
          fill
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#03AE96]/20 to-[#044288]/20 z-0"></div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E5BD43]/10 rounded-full filter blur-[80px] -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4EF1BD]/10 rounded-full filter blur-[80px] translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Ready for a Fresh, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4EF1BD] to-[#03AE96]">Hassle-Free Cleaning</span> Experience?
        </h2>

        <p className="text-md text-[#fff] mb-12 max-w-2xl mx-auto">
          Your clothes, shoes, and home deserve premium care. Experience the DryDash difference today.
        </p>

        <div className="flex gap-4 justify-center items-center">
          <Link
            href="https://wa.me/918287636979?text=Hi!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex lg:w-auto items-center justify-center bg-gradient-to-r from-[#E5BD43] to-[#F6E05E] text-[#0A121B] hover:shadow-[0_0_20px_rgba(229,189,67,0.4)] px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Book Pickup <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="tel:+918287636979"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:w-auto sm:w-auto px-8 py-2 bg-[#0A121B]/50 backdrop-blur-md border border-[#ffffff]/20 text-white rounded-full font-bold text-lg hover:bg-[#ffffff]/10 transition-colors text-sm"
          >
            Talk to Support
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#05090e] pt-16 pb-8 border-t border-[#ffffff]/5">
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/drydash_lo.png" alt="DRYDASH logo" className="w-[50%] h-[50%] object-cover rounded-lg" />
            </div>
            <p className="text-[#AEAEAF] max-w-sm mb-6">
              The premium destination for sneaker care, restoration, and dry cleaning. We bring life back to your favorite pairs.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#ffffff]/5 flex items-center justify-center text-white hover:bg-[#03AE96] hover:text-[#0A121B] transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
             <ul className="space-y-3">
              {[
                { name: "Services", href: "#" },
                { name: "About Us", href: "#" },
                { name: "Pricing", href: "#" },
                { name: "Contact", href: "#" },
                { name: "Privacy Policy", href: "/privacy-policy" },
              ].map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-[#AEAEAF] hover:text-[#4EF1BD] transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
             <ul className="space-y-3 text-[#AEAEAF]">
              <li>support@drydash.in</li>
              <li>+91 8287636979</li>
              <li>Tower 15 211 ATS Le-grandiose noida 150, 201310</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#ffffff]/5 pt-8 text-center text-[#6A6F76] text-sm">
          © 2024 DryDash Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3">
      {/* Talk Now group */}
      <div className="flex items-center gap-3">
        {/* <span className="inline-block mr-1 rounded-md bg-[#0A121B] text-white text-xs font-medium py-1 px-2 shadow-lg">Talk Now</span> */}
        <a
          href="tel:+919717953316"
          aria-label="Call DryDash"
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#4EF1BD] to-[#03AE96] text-[#0A121B] shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-[#4EF1BD]/30"
        >
          <Headset className="w-6 h-6" />
        </a>
      </div>

      {/* Typed WhatsApp image component (defined below) */}
      {/* WhatsApp group */}
      <div className="flex items-center gap-3">
        {/* <span className="inline-block mr-1 rounded-md bg-[#0A121B] text-white text-xs font-medium py-1 px-2 shadow-lg">WhatsApp</span> */}
        <a
          href="https://wa.me/918287636979?text=Hi!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#4EF1BD] to-[#03AE96] text-[#0A121B] shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-[#4EF1BD]/30"
        // className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
        >
          <WhatsAppImage className="w-6 h-6" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

// Typed small component for the WhatsApp image
const WhatsAppImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ className, alt = 'WhatsApp', src = '/whatsapp.svg', ...props }) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default function Home() {
  // Load GSAP from CDN for the "creative animation" requirement
  useScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
  useScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');

  return (
    <div className="font-sans antialiased bg-[#0A121B] min-h-screen text-[#F0F6FC] selection:bg-[#03AE96] selection:text-[#0A121B]">
      <Navigation />
      <Hero />
      <CTA />
      <DownloadApp />
      <DetailedServices />
      <WhyDryDash />
      {/* <Process /> */}
      {/* <Gallery /> */}
      <Testimonials />
      <FranchisePartner />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}