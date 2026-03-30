 "use client";

 import React, { MouseEvent, useEffect, useRef, useState } from 'react';
  import { 
    Sparkles, 
    Droplets, 
    Wind, 
    Timer, 
    ShieldCheck, 
    MapPin, 
    Star, 
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
    Armchair,
    Gem,
    Sofa,
    Smartphone,
    Calendar,
    Quote
  } from 'lucide-react';

  // --- Utility for loading scripts (GSAP) ---
  const useScript = (src : string) => {
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
   const navRef = useRef<HTMLElement | null>(null);


    const navItems = [
      { name: 'Services', href: '#services' },
      { name: 'Process', href: '#process' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Testimonials', href: '#testimonials' }, // Updated link
      { name: 'Contact', href: '#contact' },
    ];

    return (
      <nav ref={navRef} className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#0A121B]/90 backdrop-blur-xl border-b border-[#03AE96]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <img src="/image/logo.png" alt="DryDash" className="w-10 h-10 rounded-xl object-cover" />
            </div>

            {/* Desktop Nav - 5 Elements */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-[#AEAEAF] hover:text-[#F0F6FC] transition-colors group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#E5BD43] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-[#E5BD43] to-[#F6E05E] text-[#0A121B] hover:shadow-[0_0_20px_rgba(229,189,67,0.4)] px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5">
                  Book Pickup
              </button>
            </div>

            {/* Mobile menu button */}
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
    return (
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#0A121B]">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Side: Content */}
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5BD43]/40 bg-[#E5BD43]/10 mb-6 backdrop-blur-md">
                <Star className="w-3 h-3 text-[#E5BD43] fill-[#E5BD43]" />
                <span className="text-[#E5BD43] text-xs font-bold tracking-widest uppercase">Premium Care</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
                Premium Laundry,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4EF1BD] to-[#03AE96]">Dry Cleaning</span> &<br />
                <span className="relative inline-block">
                  Shoe Spa
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E5BD43]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
                Delivered in <span className="font-bold text-[#4EF1BD]">24 Hours</span>.
              </h2>

              <p className="max-w-xl text-lg text-[#AEAEAF] mb-8 leading-relaxed">
                DryDash brings expert cleaning with fast pickup, eco-friendly care, and doorstep delivery—crafted for busy professionals and modern families.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                <button className="px-8 py-4 bg-[#E5BD43] text-[#0A121B] rounded-full font-bold text-lg shadow-[0_0_20px_rgba(229,189,67,0.3)] hover:shadow-[0_0_30px_rgba(229,189,67,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                  Book Pickup <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-transparent border border-[#6A6F76] text-[#F0F6FC] rounded-full font-bold text-lg hover:border-[#F0F6FC] hover:bg-[#F0F6FC]/5 transition-all flex items-center justify-center gap-2">
                  View Pricing
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="w-full pt-6 border-t border-[#ffffff]/10">
                <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm text-[#AEAEAF] font-medium">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#E5BD43]">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-white">4.9/5 Rated</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-[#6A6F76] rounded-full"></div>
                  <span>25,000+ Items Cleaned</span>
                  <div className="hidden sm:block w-1 h-1 bg-[#6A6F76] rounded-full"></div>
                  <span className="flex items-center gap-1"><Droplets className="w-3 h-3 text-[#4EF1BD]" /> Eco-Friendly</span>
                  <div className="hidden sm:block w-1 h-1 bg-[#6A6F76] rounded-full"></div>
                  <span>Trained Experts</span>
                </div>
              </div>
            </div>

            {/* Right Side: Creative Composition */}
            <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
              {/* Main Card: Shoe */}
              <div className="absolute top-10 right-10 w-72 p-4 bg-[#0F1923] border border-[#03AE96]/30 rounded-2xl shadow-2xl z-20 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 hover:z-30 group">
                  <div className="bg-[#0A121B] rounded-xl h-48 mb-4 relative overflow-hidden flex items-center justify-center border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#03AE96]/20 to-transparent"></div>
                    <Sparkles className="w-16 h-16 text-[#4EF1BD] group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-[#4EF1BD] text-[#0A121B] text-xs font-bold rounded">SPA MODE</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                        <p className="text-white font-bold">Air Jordan 1</p>
                        <p className="text-[#AEAEAF] text-xs">Deep Clean + De-yellow</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#E5BD43] flex items-center justify-center text-[#0A121B] font-bold">
                        <Check className="w-5 h-5" />
                    </div>
                  </div>
              </div>

              {/* Secondary Card: Laundry */}
              <div className="absolute top-40 left-10 w-64 p-4 bg-[#0F1923] border border-[#6D96FB]/30 rounded-2xl shadow-2xl z-10 transform rotate-[3deg] hover:rotate-0 transition-transform duration-500 hover:z-30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#6D96FB]/20 flex items-center justify-center text-[#6D96FB]">
                        <Shirt className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-white font-bold">Premium Laundry</p>
                        <p className="text-[#AEAEAF] text-xs">Delicates & Silks</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-[#ffffff]/10 rounded-full overflow-hidden">
                        <div className="h-full w-[80%] bg-[#6D96FB]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-[#AEAEAF]">
                        <span>Washing</span>
                        <span>80%</span>
                    </div>
                  </div>
              </div>

              {/* Tertiary Card: Bag Spa */}
              <div className="absolute bottom-10 right-20 w-64 p-4 bg-[#0F1923] border border-[#E5BD43]/30 rounded-2xl shadow-2xl z-20 transform rotate-[6deg] hover:rotate-0 transition-transform duration-500 hover:z-30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E5BD43]/20 flex items-center justify-center text-[#E5BD43]">
                        <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-white font-bold">Luxury Bag Spa</p>
                        <p className="text-[#AEAEAF] text-xs">Leather Restoration</p>
                    </div>
                  </div>
                  <div className="flex -space-x-2 overflow-hidden py-2">
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0F1923] bg-gray-600"></div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0F1923] bg-gray-500"></div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0F1923] bg-gray-400 flex items-center justify-center text-[10px] text-[#0A121B] font-bold">+2</div>
                  </div>
              </div>

              {/* Floating Badge: Delivery */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A121B]/80 backdrop-blur-md border border-[#4EF1BD] p-4 rounded-full shadow-[0_0_30px_rgba(78,241,189,0.2)] z-30 animate-bounce-slow flex items-center gap-3">
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

    return (
      <section className="py-24 bg-[#0A121B] relative border-t border-[#ffffff]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#E5BD43] font-bold tracking-widest uppercase text-sm mb-3">The DryDash Standard</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Why Choose <span className="text-[#4EF1BD]">DryDash?</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, idx) => (
              <div key={idx} className="bg-[#0F1923] p-8 rounded-2xl border border-[#ffffff]/5 hover:border-[#03AE96]/50 transition-all hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-[#044288]/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#03AE96] transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#4EF1BD] group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-[#AEAEAF] leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ServicesOverview = () => {
    const overviewServices = [
      {
        title: "Laundry",
        subtitle: "Wash & Fold / Wash & Iron",
        desc: "Daily wear made fresh, sanitized, and neatly packed.",
        icon: Shirt,
        gradient: "from-[#4EF1BD] to-[#03AE96]"
      },
      {
        title: "Dry Cleaning",
        subtitle: "Suits, Sarees, Gowns",
        desc: "Fabric-safe cleaning for suits, sarees, gowns & luxury items.",
        icon: Wind,
        gradient: "from-[#6D96FB] to-[#3B82F6]"
      },
      {
        title: "Shoe Spa",
        subtitle: "Cleaning & Restoration",
        desc: "Deep cleaning, whitening, deodorizing & color restoration.",
        icon: Sparkles,
        gradient: "from-[#E5BD43] to-[#F6E05E]"
      },
      {
        title: "Bag & Purse Spa",
        subtitle: "Leather Care",
        desc: "Professional cleaning for leather bags, clutches & designer items.",
        icon: ShoppingBag,
        gradient: "from-[#F472B6] to-[#DB2777]"
      },
      {
        title: "Home Upholstery",
        subtitle: "Sofas & Carpets",
        desc: "Sofa, carpet, curtains & mattress—spotless and germ-free.",
        icon: Armchair,
        gradient: "from-[#A78BFA] to-[#7C3AED]"
      },
      {
        title: "Special Care",
        subtitle: "Wedding & Couture",
        desc: "Wedding outfits, woolen coats, expensive fabrics—handled with extra care.",
        icon: Gem,
        gradient: "from-[#FCD34D] to-[#F59E0B]"
      },
    ];

    return (
      <section className="py-24 bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#4EF1BD] font-bold tracking-widest uppercase text-sm mb-3">Complete Care</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Our Premium <span className="text-[#E5BD43]">Services</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {overviewServices.map((service, idx) => (
              <div key={idx} className="group relative bg-[#0A121B] rounded-2xl p-1 hover:-translate-y-2 transition-transform duration-300">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
                
                <div className="h-full bg-[#0A121B] rounded-xl p-8 border border-[#ffffff]/5 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-[100px]`}></div>

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-[#0A121B]" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-1">{service.title}</h4>
                  <p className={`text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-4`}>
                    {service.subtitle}
                  </p>
                  <p className="text-[#AEAEAF] mb-8 leading-relaxed text-sm min-h-[40px]">
                    {service.desc}
                  </p>

                  <a href="#" className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    Book Now <ArrowRight className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`} />
                  </a>
                </div>
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
        title: "Premium Laundry",
        desc: "Perfect for everyday clothes—washed, sanitized, steam ironed, and packed fresh.",
        image: "https://images.unsplash.com/photo-1517677208171-0bc5e259b33d?q=80&w=2070&auto=format&fit=crop",
        icon: Shirt,
        color: "#4EF1BD"
      },
      {
        title: "Dry Cleaning",
        desc: "Advanced solvent cleaning that protects fabric texture, color, and shape.",
        image: "https://images.unsplash.com/photo-1489278542524-dea4616f1e75?q=80&w=2073&auto=format&fit=crop",
        icon: Wind,
        color: "#6D96FB"
      },
      {
        title: "Shoe Spa",
        desc: "From casual sneakers to premium leather—cleaning, deodorizing, polishing, renewing.",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop",
        icon: Sparkles,
        color: "#03AE96"
      },
      {
        title: "Bag Spa",
        desc: "Deep cleaning for handbags with premium leather treatment and restoration.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2535&auto=format&fit=crop",
        icon: ShoppingBag,
        color: "#E5BD43"
      },
      {
        title: "Home Cleaning",
        desc: "Specialists clean your sofa, carpets, curtains, and mattresses for a healthier home.",
        image: "https://images.unsplash.com/photo-1527513913476-fa6cb43e5300?q=80&w=2070&auto=format&fit=crop",
        icon: Sofa,
        color: "#A78BFA"
      }
    ];

    return (
      <section className="bg-[#0A121B] relative border-t border-[#ffffff]/5">
        {details.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row group">
            {/* Text Section */}
            <div className={`flex-1 p-12 lg:p-24 flex flex-col justify-center bg-[#0A121B] border-b md:border-b-0 border-[#ffffff]/5 ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2 bg-[#0F1923]'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#ffffff]/5 flex items-center justify-center border border-[#ffffff]/10" style={{ borderColor: `${service.color}40` }}>
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <span className="text-5xl font-bold text-[#ffffff]/10 font-mono absolute pointer-events-none -ml-4 -mt-12 select-none">0{index + 1}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-[#AEAEAF] text-lg leading-relaxed mb-8 max-w-md">
                {service.desc}
              </p>
              <div>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all" style={{ color: service.color }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
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
      { 
        num: "01", 
        title: "Schedule Pickup", 
        desc: "Book via WhatsApp, call, or website.",
        icon: Smartphone 
      },
      { 
        num: "02", 
        title: "We Collect", 
        desc: "Doorstep pickup at your preferred time.",
        icon: Truck 
      },
      { 
        num: "03", 
        title: "Expert Cleaning", 
        desc: "Fabric-safe processes, eco cleaning & strict quality checks.",
        icon: Sparkles 
      },
      { 
        num: "04", 
        title: "24h Delivery", 
        desc: "Fresh, clean, and neatly packed in 24 hours.",
        icon: Timer 
      },
    ];

    return (
      <section id="process" className="py-24 bg-[#0F1923] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#4EF1BD] font-bold tracking-widest uppercase text-sm mb-3">How DryDash Works</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">A Seamless Process <span className="text-[#E5BD43]">Designed for You</span></h3>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-[#03AE96]/20 via-[#E5BD43]/20 to-[#03AE96]/20 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
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
      <section id="testimonials" className="py-24 bg-[#0A121B] relative border-t border-[#ffffff]/5">
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

  const CTA = () => {
    return (
      <section className="py-40 bg-[#0A121B] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#03AE96]/20 to-[#044288]/20"></div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#E5BD43]/10 rounded-full filter blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4EF1BD]/10 rounded-full filter blur-[80px] translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready for a Fresh, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4EF1BD] to-[#03AE96]">Hassle-Free Cleaning</span> Experience?
          </h2>
          
          <p className="text-xl text-[#AEAEAF] mb-10 max-w-2xl mx-auto">
            Your clothes, shoes, and home deserve premium care. Experience the DryDash difference today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#E5BD43] text-[#0A121B] rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(229,189,67,0.3)] flex items-center justify-center gap-2">
                Book My Pickup <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0A121B]/50 backdrop-blur-md border border-[#ffffff]/20 text-white rounded-full font-bold text-lg hover:bg-[#ffffff]/10 transition-colors">
                Talk to Support
            </button>
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => {
    return (
      <footer className="bg-[#05090e] pt-16 pb-8 border-t border-[#ffffff]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#03AE96] flex items-center justify-center">
                      <Sparkles className="text-[#0A121B] w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl text-white">DRYDASH</span>
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
                    {['Services', 'About Us', 'Pricing', 'Contact'].map((l) => (
                        <li key={l}><a href="#" className="text-[#AEAEAF] hover:text-[#4EF1BD] transition-colors">{l}</a></li>
                    ))}
                  </ul>
              </div>

              <div>
                  <h4 className="text-white font-bold mb-6">Contact</h4>
                  <ul className="space-y-3 text-[#AEAEAF]">
                    <li>hello@drydash.com</li>
                    <li>+1 (555) 123-4567</li>
                    <li>123 Sneaker St, NY 10001</li>
                  </ul>
              </div>
            </div>
            <div className="border-t border-[#ffffff]/5 pt-8 text-center text-[#6A6F76] text-sm">
              Copyright © GYLD Solutions Pvt. Ltd. All rights reserved.
            </div>
        </div>
      </footer>
    );
  };

  export default function App() {
    // Load GSAP from CDN for the "creative animation" requirement
    useScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
    useScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');

    return (
      <div className="font-sans antialiased bg-[#0A121B] min-h-screen text-[#F0F6FC] selection:bg-[#03AE96] selection:text-[#0A121B]">
        <Navigation />
        <Hero />
        <WhyDryDash />
        <ServicesOverview />
        <DetailedServices />
        <Process />
        <Gallery />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    );
  }
