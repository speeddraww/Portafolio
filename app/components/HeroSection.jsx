'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function HeroSection() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  const downloadLocalPDF = () => {
    const pdfPath = '/Emilio_CV.pdf';

    
    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = 'downloaded_file.pdf';

    // Trigger download
    downloadLink.click();
  };


  return (
    
    
    <section className='lg:py-16'>
      
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
        initial={{ opacity: 0,scale
          :0.5 }}
        animate={{ opacity: 1,scale:1 }}
        transition={{ duration: 1 }}
        
         className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600">Hello, I&apos;m {""}</span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'EMILIO',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'App Developer',
                1000,
                'UI/UX Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Aspiring IT Professional
          </p>
          <div>
          <button
      className="px-6 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-green-400 via-green-500 to-green-700 font-semibold transition duration-300 hover:to-green-800 text-white"
      onClick={scrollToBottom}
    >
      Hire Me
    </button>
            
            <button
              className="px-1 py-1 w-full rounded-full sm:w-fit bg-gradient-to-br from-green-300 via-green-500 to-green-700 hover:bg-green-400 text-white mt-3"
              onClick={downloadLocalPDF}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </motion.div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero.jpeg"
              alt="Picture of the author"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default HeroSection;
