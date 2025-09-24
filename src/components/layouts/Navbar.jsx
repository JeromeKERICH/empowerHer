import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Sponsor', path: '/sponsor' },
    { name: 'Donate', path: '/donate' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 font-cambria ${isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center group">
              <span className="text-xl font-bold text-[#00337C] group-hover:text-[#B76E79] transition-colors duration-300">
                EmpowerHer
              </span>
              <span className="ml-2 text-sm text-gray-500 italic border-l border-gray-300 pl-2">
                by Build Your Best Self
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.slice(0, 4).map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-[#00337C] font-medium transition-colors duration-300 text-lg"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Highlighted CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="ml-2"
            >
              <Link
                to="/sponsor"
                className="px-4 py-2 rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00337C] to-[#1E40AF] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 text-lg"
              >
                Sponsor a Woman
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#00337C] focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          style={{ fontFamily: 'Cambria, serif' }}
        >
          <div className="px-6 py-3 space-y-3">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-100"
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-[#00337C] font-medium py-3 text-lg"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="py-3"
            >
              <Link
                to="/sponsor"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-[#00337C] to-[#1E40AF] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 text-lg"
              >
                Sponsor a Woman
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}