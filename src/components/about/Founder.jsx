import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function FounderSpotlight() {
    return (
      <section className="relative bg-white py-5"
      style={{ fontFamily: 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                <img 
                  src="/assets/AB.jpg" 
                  alt="Brenda, Founder of EmpowerHer" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-[#00337C] mb-6">
                From Personal Healing to Global Impact
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                "I created EmpowerHer after my own journey from burnout to purpose. 
                Real change happens when we address both <span className="font-semibold text-[#B76E79]">the inner wounds</span> and{' '}
                <span className="font-semibold text-[#00337C]">the systemic barriers</span> holding women back. Our mission is to turn personal healing into collective power, accountability, and economic freedom."
                
              </p>
                <p className="text-lg font-semibold mb-2">
                Brenda's journey is a testament to the power of resilience and community. 
                </p>

              <p className="text-gray-600 mb-8">
                — Brenda, Founder & CEO
              </p>
              <a
                href="https://buildyourbestselfblog.com/about"
                className="inline-flex items-center text-[#00337C] font-semibold hover:text-[#B76E79] transition-colors"
              >
                Read Brenda's full story
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }