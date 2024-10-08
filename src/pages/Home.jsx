import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const name = "Angelo Aquilino";
  const paragraphs = [
    "is a photography enthusiast   ",
    "is a creative artist         ",
    "is a talented software engineer",
  ];

  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const typingEffect = () => {
      const currentParagraph = paragraphs[currentParagraphIndex];

      if (isErasing) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));

        if (displayedText.length === 0) {
          setIsErasing(false);
          setTimeout(() => {
            setCurrentParagraphIndex(
              (prevIndex) => (prevIndex + 1) % paragraphs.length
            );
          }, 1000);
        }
      } else {
        if (displayedText.length < currentParagraph.length) {
          const newDisplayedText = currentParagraph.slice(
            0,
            displayedText.length + 1
          );
          setDisplayedText(newDisplayedText);
        } else {
          setTimeout(() => {
            setIsErasing(true);
          }, 1500);
        }
      }
    };

    const typingInterval = setInterval(typingEffect, isErasing ? 100 : 150);

    return () => clearInterval(typingInterval);
  }, [displayedText, currentParagraphIndex, isErasing, paragraphs]);

  return (
    <>
      {/* Hero Section */}
      {/* <section className="bg-[#171717] text-[#f5f5dc] h-[90vh] md:h-screen flex flex-col md:justify-center items-start text-left p-6">
        <div className="mt-12 md:mt-0 flex flex-col">
          <motion.h1
            className="text-6xl font-bold text-[#c0a080] md:text-8xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Capturing Creativity in Code
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl font-medium mt-2 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Where <span className="text-[#c0a080]">photography</span>,{" "}
            <span className="text-[#c0a080]">art</span>, and{" "}
            <span className="text-[#c0a080]">code</span> converge.
          </motion.p>

          <motion.h1
            className="text-lg font-bold mt-12 md:text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            {name}{" "}
            <span className="text-lg text-[#c0a080] md:text-2xl">{displayedText}</span>
            <span className="animate-pulse">|</span>
          </motion.h1>
        </div>
      </section>

      <div className="h-1 bg-[#c0a080] w-24 mx-auto  rounded-full"></div> */}

    </>
  );
};

export default Home;
