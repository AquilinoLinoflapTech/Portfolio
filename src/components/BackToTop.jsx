import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-24 right-5 bg-[#f5f5dc] text-[#171717] rounded-full p-3 shadow-lg transition hover:bg-[#FFF] focus:outline-none"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;