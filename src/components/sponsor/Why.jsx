import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaGraduationCap, FaToolbox, FaBrain, FaUsers, FaSeedling } from 'react-icons/fa';

export default function WhySponsorSection() {
  const benefits = [
    {
      icon: FaGraduationCap,
      title: "Vocational Training",
      description: "Tailoring, baking, crafts, beauty, digital skills",
      impact: "Equips women with skills to earn reliably and build businesses or livelihoods.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Women learning tailoring skills together"
    },
    {
      icon: FaToolbox,
      title: "Startup Kit",
      description: "Tools, materials, and small capital",
      impact: "Everything needed to put those skills into action from day one.",
      image: "https://images.unsplash.com/photo-1556655848-a1c8b76a&auto=format&fit=crop&w=500&q=80",
      alt: "Entrepreneur toolkit with sewing machine and materials"
    },
    {
      icon: FaBrain,
      title: "Mindset & Confidence Coaching",
      description: "Professional guidance and support",
      impact: "Healing is only the start; confidence and mindset empower sustainable growth.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Women in a coaching and support group session"
    },
    {
      icon: FaUsers,
      title: "Community & Peer Support",
      description: "Network of fellow entrepreneurs",
      impact: "Isolation is often part of the hardship; community builds strength and accountability.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Diverse women supporting each other in a circle"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white to-purple-50 py-5 overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Sponsor <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">EmpowerHer</span>?
          </h2>
          <p className="text-l md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you partner with us, you're not just donating, you're catalyzing change. 
            Here's the difference your sponsorship can make:
          </p>
        </motion.div>

        {/* Benefits Grid with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200 overflow-hidden h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  
                  
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <div className="flex items-center text-sm font-medium text-purple-600 mb-3">
                    
                    {benefit.description}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}