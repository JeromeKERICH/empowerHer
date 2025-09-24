import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function OurStory() {
  const actionBoxes = [
    {
      title: "Shop",
      description: "Every T-shirt, hoodie, or mug funds empowerment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: "from-[#B76E79] to-[#D4A5AD]",
      link: "/shop"
    },
    {
      title: "Donate",
      description: "Any amount fuels skills and tools.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-[#00337C] to-[#1E40AF]",
      link: "/donate"
    },
    {
      title: "Sponsor",
      description: "Cover a full journey for one woman.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-[#00337C] to-[#B76E79]",
      link: "/sponsor"
    }
  ];

  return (
    <section 
      className="relative bg-white py-5 md:py-10 overflow-hidden"
      style={{ fontFamily: 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif' }}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#F7D9D9] opacity-20 mix-blend-multiply filter blur-3xl translate-x-1/3 -translate-y-1/3 animate-float-slow"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Our Story Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-[#00337C] mb-8"
          >
            Our Story in 60 Seconds
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 text-start md:text-center"
          >
            EmpowerHer is the impact arm of Build Your Best Self. We believe that when a woman heals, she doesn't just shift her life, she reshapes her family, her community, her world. That's why we pair mindset and self-awareness with hands-on skills and startup tools, so she can earn, own, and thrive.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              to="/approach"
              className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#00337C] to-[#1E40AF] hover:from-[#1E40AF] hover:to-[#00337C] transition-all duration-300"
            >
              Learn How It Works
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* How You Can Help Section */}
            <div>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-center text-[#B76E79] mb-12"
            >
                How You Can Be the Change
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Shop Box */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                >
                <div className="relative h-48 overflow-hidden">
                    <img 
                    src="/assets/hoodie.jpg" 
                    alt="Woman holding EmpowerHer merchandise" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                    
                    <h4 className="text-xl font-bold text-center text-white drop-shadow-md">Shop</h4>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 text-center mb-6">Every merch funds empowerment.</p>
                    <Link
                    to="/shop"
                    className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-[#f8f8f8] bg-gray-900  transition-colors duration-300"
                    >
                    Buy Merchandise
                    </Link>
                </div>
                </motion.div>

                {/* Donate Box */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                >
                <div className="relative h-48 overflow-hidden">
                    <img 
                    src="/assets/don.jpg" 
                    alt="Women learning new skills in workshop" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                    
                    <h4 className="text-xl font-bold text-center text-white drop-shadow-md">Donate</h4>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 text-center mb-6">Any amount fuels skills and tools.</p>
                    <Link
                    to="/donate"
                    className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-[#f8f8f8] bg-gray-900  transition-colors duration-300"
                    >
                    Donate Now
                    </Link>
                </div>
                </motion.div>

                {/* Sponsor Box */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                >
                <div className="relative h-48 overflow-hidden">
                    <img 
                    src="/assets/sponsor.png" 
                    alt="Group of empowered women celebrating" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                    
                    <h4 className="text-xl font-bold text-center text-white drop-shadow-md">Sponsor</h4>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 text-center mb-6">Cover a full journey for one woman.</p>
                    <Link
                    to="/sponsor"
                    className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-[#f8f8f8] bg-gray-900  transition-colors duration-300"
                    >
                    Full Sponsorship
                    </Link>
                </div>
                </motion.div>
            </div>
            </div>
      </div>
    </section>
  );
}