import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section 
      className="relative bg-white py-20 md:py-32 overflow-hidden"
      style={{ fontFamily: 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif' }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#F7D9D9] opacity-20 mix-blend-multiply filter blur-3xl -translate-x-1/3 -translate-y-1/3 animate-float-slow"></div>
      
      <div className="relative max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-6 px-5 py-2 bg-[#00337C]/10 rounded-full border border-[#00337C]/30"
          >
            <span className="text-[#00337C] font-semibold text-sm uppercase tracking-wider">
              Our Origin Story
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79] text-start md:text-center">
              This is More Than a Brand. It's a Movement
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto text-start md:text-center"
          >
            EmpowerHer exists to turn personal healing into collective power. 
            We bridge the gap between <span className="font-semibold text-[#00337C]">inner work</span> and{' '}
            <span className="font-semibold text-[#B76E79]">economic freedom</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}