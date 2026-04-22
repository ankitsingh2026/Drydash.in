'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Container from '../../common/container';
// import Svg1 from '@/Assests/Svg/svg1'

const Step01 = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #348DD1, #205883)`,
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
            <h1 className="text-5xl md:text-9xl 2xl:text-[160px] font-bold text-white relative leading-none select-none tracking-tighter">
              01
              <span className="opacity-40">.</span>
            </h1>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "anticipate", delay: 0.14 }}
            className="text-white md:text-start max-w-xl self-end md:self-start md:w-[30%] w-full"
          >
            <h2 className="text-4xl md:text-5xl 2xl:text-[120px] font-bold mb-6 leading-tight select-none font-didot">
              <span className="block">Schedule</span>
              <span className="block">Pickup</span>
            </h2>
            <p className="md:text-base 2xl:text-xl opacity-90 leading-relaxed max-w-xs font-light">
              Book your service in seconds via app, website, or WhatsApp. Choose a convenient time slot.
            </p>
          </motion.div>
        </div>

        {/* SVG Illustration */}
        {/* <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 
            w-[70%] h-[45%] 
            md:w-[45%] md:h-[65%] md:bottom-0 
            2xl:w-[50%] 2xl:h-[65%] 2xl:bottom-0 
            z-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
            className="relative mx-auto"
          >
            <Svg1 className="w-[150px] md:w-[400px] h-auto" />
          </motion.div>
        </div> */}

        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-full h-[65%] md:h-[90%] z-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
            className="relative w-full h-full max-w-480 mx-auto"
          >
            <Image
              src="/Assests/SVG/ProcessSVG/1.svg"
              alt="Rider Assigned"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>
        </div>


      </Container>
    </section>
  );
};

export default Step01;