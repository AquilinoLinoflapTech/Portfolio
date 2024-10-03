import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className="bg-[#171717] text-[#f5f5dc] h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-8xl font-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Capturing Creativity in Code
        </motion.h1>

        <motion.p
          className="text-2xl mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Where photography, art, and code converge.
        </motion.p>
      </section>
      
      <section className="bg-[#171717] text-[#f5f5dc] flex justify-center items-center pt-20 pb-20">
        <div className="space-y-4 text-lg text-justify max-w-7xl tracking-tight leading-loose">
          <motion.div 
            className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Photography is more than just a hobby; it’s a profound passion that
              fuels my creativity. Through the lens of my camera, I capture
              moments that speak volumes, conveying emotions and stories that
              words often fail to express. Art has always been my outlet for
              channeling feelings, and I take immense joy in crafting visual
              narratives that resonate with others.
            </p>
          </motion.div>

          <motion.div 
            className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              Simultaneously, I’ve discovered a powerful new medium for expression
              through coding. This unique blend of logic and artistry allows me to
              build dynamic digital experiences that come to life in the same way
              my photographs do. Each project reflects my commitment to creativity
              and innovation.
            </p>
          </motion.div>

          <motion.div 
            className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              This portfolio is a celebration of my artistic journey—a collection
              of the images I’ve captured and the code I’ve written. It embodies
              my belief that creativity knows no boundaries, transcending the
              traditional and the digital alike.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
