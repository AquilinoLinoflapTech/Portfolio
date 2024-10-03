import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MenuItems = ({ onClick }) => (
  <>
    {["/",  "/projects", "/contact"].map((path) => (
      <li key={path}>
        <NavLink
          to={path}
          onClick={onClick}
          className={({ isActive }) =>
            isActive
              ? "text-[#f5f5dc] font-bold"
              : "text-[#f5f5dc] hover:text-[#FFF]"
          }
        >
          {path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2)}
        </NavLink>
      </li>
    ))}
  </>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#171717] w-full p-6 flex justify-between items-center">
      <div>
        <NavLink to="/" className="text-[#f5f5dc] text-xl font-bold">
          Artjisan
        </NavLink>
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        <motion.div
          animate={{ rotate: menuOpen ? 180 : 0 }} 
          transition={{ duration: 0.3 }} 
        >
          {menuOpen ? (
            <FaTimes className="text-[#f5f5dc] text-2xl" />
          ) : (
            <FaBars className="text-[#f5f5dc] text-2xl" />
          )}
        </motion.div>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden text-center absolute bg-[#1c1c1c] w-full left-0 top-16"
          >
            <ul className="flex-col space-y-3 p-6">
              <MenuItems onClick={handleLinkClick} />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop menu */}
      <ul className="hidden md:flex md:flex-row md:space-x-12">
        <MenuItems onClick={handleLinkClick} />
      </ul>
    </header>
  );
};

export default Navbar;