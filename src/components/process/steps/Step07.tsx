'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Container from '../../common/container';

const Step07 = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: '#F0E1D9', // Solid color as requested
        height: 'calc(100vh - 65px)',
      }}
    >
      <Container className="relative h-full w-full flex items-center">
        {/* Content Layout - Reversed grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] w-full gap-8 z-10 items-center">

          {/* Left Column: SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "anticipate", delay: 0.1 }}
            className="relative w-full aspect-square md:aspect-auto md:h-[85vh] flex items-center justify-center pointer-events-none order-2 md:order-1"
          >
            <div className="relative w-full h-full">
              <Image
                src="/Assests/SVG/ProcessSVG/7.svg"
                alt="Quality Assurance"
                fill
                className="object-contain md:object-bottom-left"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col gap-4 md:gap-12 pl-0 md:pl-12 order-1 md:order-2">
            {/* Index Number */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
            >
              <h1 className="text-5xl md:text-9xl 2xl:text-[160px] font-bold text-[#161511] relative leading-none select-none tracking-tighter">
                07
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
                <span className="block">Quality</span>
                <span className="block">Assurance</span>
              </h2>
              <p className="md:text-base 2xl:text-xl opacity-90 leading-relaxed max-w-sm font-light">
                Every item undergoes a strict quality check to ensure spotless cleaning and perfect finishing.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Step07;
