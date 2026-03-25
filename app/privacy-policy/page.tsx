"use client";
import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0A121B] text-[#F0F6FC] mt-20">
        {" "}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Privacy Policy
          </h1>

         <p className="text-[#6A6F76] mb-10">
  Last updated: March 2026
</p>

          <p className="mb-6 text-lg leading-relaxed text-[#AEAEAF]">
            At <span className="font-semibold">DryDash</span>, we value your
            privacy. This policy explains how we collect, use, and protect your
            information when you use our laundry, shoe spa, and dry cleaning
            services.
          </p>

          {/* Sections */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-2">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may collect your name, phone number, address, and payment
                details to provide pickup, cleaning, and delivery services. We
                also collect app usage data to improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your data is used to process orders, provide real-time tracking,
                send notifications, and improve our services. We do not sell
                your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                3. Payments & Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All payments are processed securely via trusted payment
                gateways. We implement industry-standard measures to protect
                your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                4. Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may use third-party services for payments, analytics, and
                notifications. These providers follow strict data protection
                standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                You can request access, correction, or deletion of your personal
                data anytime by contacting our support team.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions, reach out at:
                <br />
                <span className="font-medium">support@drydash.in</span>
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

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
              The premium destination for sneaker care, restoration, and dry
              cleaning. We bring life back to your favorite pairs.
            </p>
            {/* <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#ffffff]/5 flex items-center justify-center text-white hover:bg-[#03AE96] hover:text-[#0A121B] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
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
              <li>hello@drydash.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Sneaker St, NY 10001</li>
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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    // { name: 'Testimonials', href: '#testimonials' },
    // { name: 'Franchise', href: '#franchise' },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#0A121B]/90 backdrop-blur-xl border-b border-[#03AE96]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className=" flex items-center gap-2 cursor-pointer group">
            <img
              src="/drydash_lo.png"
              alt="DryDash"
              className="w-[70%] h-[100%] rounded-xl object-cover"
            />
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
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
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
