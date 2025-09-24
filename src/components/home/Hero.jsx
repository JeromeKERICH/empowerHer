import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section 
      className="relative bg-white overflow-hidden" 
      style={{ fontFamily: 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif' }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#F7D9D9] opacity-20 mix-blend-multiply filter blur-3xl -translate-x-1/3 -translate-y-1/3 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#00337C] opacity-10 mix-blend-multiply filter blur-3xl translate-x-1/3 translate-y-1/3 animate-float"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text content - order-first on mobile, order-none on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-none"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6"
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#B76E79] to-[#00337C] text-start">
                EmpowerHer by Build Your Best Self
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0 text-start"
            >
              Because healing is powerful. But empowering others to rise with you? That's transformational.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/shop"
                className="relative overflow-hidden group px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-[#00337C] to-[#1E40AF] text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Shop to Empower</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
              
              <Link
                to="/sponsor"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg border-2 border-[#00337C] text-[#00337C] hover:bg-[#00337C]/10 text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                  </svg>
                  Sponsor a Woman
                </span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image - order-first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full lg:w-1/2 order-first lg:order-none mb-8 lg:mb-0"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl border-4 sm:border-8 border-white aspect-w-16 aspect-h-9">
              <img 
                src="/assets/hero.png"
                alt="Empowered women supporting each other" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}