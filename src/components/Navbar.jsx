import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#141414] w-full p-6 flex justify-between items-center">
      <div>
        <h1 className="text-[#bac4b8] text-xl font-bold">Artjisan</h1>
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        <motion.div
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuOpen ? (
            <FaTimes className="text-[#bac4b8] text-2xl" />
          ) : (
            <FaBars className="text-[#bac4b8] text-2xl" />
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
