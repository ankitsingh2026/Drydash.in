'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Container from '../../common/container';

const Step09 = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: '#C0D695', // Solid color as requested
        height: 'calc(100vh - 65px)',
      }}
    >
      <Container className="relative h-full w-full flex items-center">
        {/* Content Layout - Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] w-full gap-8 z-10 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-4 md:gap-12 mt-10">
            {/* Index Number */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
            >
              <h1 className="text-5xl md:text-9xl 2xl:text-[160px] font-bold text-[#161511] relative leading-none select-none tracking-tighter">
                09
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
              <h2 className="text-4xl md:text-5xl 2xl:text-[90px] font-bold mb-6 leading-tight select-none font-didot">
                <span className="block">Rider Assigned</span>
                <span className="block">for Delivery</span>
              </h2>
              <p className="md:text-base 2xl:text-xl opacity-90 leading-relaxed max-w-sm font-light">
                A delivery partner is assigned to ensure fast and reliable delivery back to you.
              </p>
            </motion.div>
          </div>

          {/* Right Column: SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "anticipate", delay: 0.3 }}
            className="relative w-full bottom-[-20%] aspect-square md:aspect-auto md:h-[85vh] flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full">
              <Image
                src="/Assests/SVG/ProcessSVG/2.svg"
                alt="Rider Assigned for Delivery"
                fill
                className="object-contain md:object-bottom-right scale-100"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Step09;
