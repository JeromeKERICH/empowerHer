import { motion } from "framer-motion";

export function OurDifference() {
    const differences = [
      {
        title: "Mindset + Skills",
        description: "We combine psychological tools with practical training. Empowerment starts from within, but must also include tangible skills for economic independence."
      },
      {
        title: "Sustainable Change",
        description: "Our programs create lasting income, not dependency. We focus on building skills that lead to self-sufficiency."
      },
      {
        title: "Community Focus",
        description: "Women support each other through peer networks. We believe in the power of community to uplift and empower."
      }
    ];
  
    return (
      <section className="relative bg-gray-200 py-5"
        style={{ fontFamily: 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00337C]  mb-6">
            Our Difference
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {differences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[#00337C] mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }