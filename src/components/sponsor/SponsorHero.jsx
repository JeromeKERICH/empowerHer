import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SponsorHero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }
  , []);
  return (
    <section className="relative bg-white h-[430px] flex items-center justify-center overflow-hidden"
      style={{ fontFamily: 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif' }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#F7D9D9] opacity-20 mix-blend-multiply filter blur-3xl -translate-x-1/3 -translate-y-1/3 animate-float-slow"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Headline - More compact */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:text-center  bg-clip-text  text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79] mb-4 leading-tight">
            <span className="block">Join as a Sponsor</span>
            <span className="block text-gray-900 md:text-3xl text-2xl">
              Transform a Generation.
            </span>
          </h1>
          
          {/* Subheadline - Shorter lines */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-500 max-w-5xl text-start md:text-center mx-auto leading-relaxed mb-6"
          >
            When a woman rebuilds her life, she lifts her family, community, and generations to come.
            Because when one woman rises, many follow.

          </motion.p>
          
          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Link
              to="/donate"
              className="inline-flex items-center px-7 py-3 text-base font-bold text-white bg-gradient-to-r from-[#00337C] to-[#1E40AF] rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 group"
            >
              <span>Become a Sponsor Today</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
}