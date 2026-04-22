'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Container from '../../common/container';

const Step10 = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: '#B6F1FF', // Solid color as requested
        height: 'calc(100vh - 65px)',
      }}
    >
      <Container className="relative h-full w-full flex flex-col pt-12 md:pt-24">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 z-10">
          {/* Index Number */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "anticipate" }}
          >
            <h1 className="text-5xl md:text-9xl 2xl:text-[160px] font-bold text-[#161511] relative leading-none select-none tracking-tighter">
              10
              <span className="opacity-40">.</span>
            </h1>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "anticipate", delay: 0.14 }}
            className="text-[#161511] md:text-start max-w-xl self-end md:self-start md:w-[30%] w-full"
          >
            <h2 className="text-4xl md:text-5xl 2xl:text-[100px] font-bold mb-6 leading-tight select-none font-didot">
              <span className="block">Out for</span>
              <span className="block">Delivery</span>
            </h2>
            <p className="md:text-base 2xl:text-xl opacity-90 leading-relaxed max-w-xs font-light">
              Your order is on the way. Track your delivery in real-time for complete transparency.
            </p>
          </motion.div>
        </div>

        {/* SVG Illustration - Pushed to bottom/center */}
        <div className="absolute md:bottom-[-10%] bottom-0 left-1/2 -translate-x-1/2 w-full h-[65%] md:h-[90%] z-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
            className="relative w-full h-full max-w-480 mx-auto"
          >
            <Image
              src="/Assests/SVG/ProcessSVG/9.svg"
              alt="Out for Delivery"
              fill
              className="object-contain object-bottom scale-100 md:scale-80"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Step10;
