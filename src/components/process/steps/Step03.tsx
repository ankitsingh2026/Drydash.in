'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Container from '../../common/container';

const Step03 = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: '#C6D2F7', // Solid color as requested (#C6D2F7 to #C6D2F7)
        height: 'calc(100vh - 65px)',
      }}
    >
      <Container className="relative h-full w-full flex items-center">
        {/* Content Layout - Grid-like structure for better control */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] w-full gap-8 z-10 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-4 md:gap-12">
            {/* Index Number */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
            >
              <h1 className="text-5xl md:text-9xl 2xl:text-[160px] font-bold text-[#161511] relative leading-none select-none tracking-tighter">
                03
                <span className="opacity-40">.</span>
              </h1>
            </motion.div>

            {/* Title and Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "anticipate", delay: 0.2 }}
              className="text-[#161511]"
            >
              <h2 className="text-4xl md:text-5xl 2xl:text-[120px] font-bold mb-6 leading-tight select-none font-didot">
                <span className="block">Doorstep</span>
                <span className="block">Pickup</span>
              </h2>
              <p className="md:text-base 2xl:text-xl opacity-90 leading-relaxed max-w-sm font-light">
                Your garments are collected from your location, securely packed, and tagged for tracking.
              </p>
            </motion.div>
          </div>

          {/* Right Column: SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "anticipate", delay: 0.3 }}
            className="relative w-full aspect-square md:aspect-auto md:h-[55vh] flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full">
              <Image
                src="/Assests/SVG/ProcessSVG/3.svg"
                alt="Doorstep Pickup"
                fill
                className="object-contain md:object-bottom-right md:scale-180 scale-150"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Step03;
