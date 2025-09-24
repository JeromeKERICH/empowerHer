import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ShopPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'hoodies', name: 'Hoodies' },
    { id: 'tshirts', name: 'T-shirts' },
    { id: 'mugs', name: 'Mugs' },
    { id: 'journals', name: 'Journals' }
  ];

  const products = [
    {
      id: 1,
      name: 'EmpowerHer Hoodie',
      price: 49.99,
      category: 'hoodies',
      image: '/assets/hoodie.jpg',
      description: 'A comfortable and stylish hoodie with an empowering message.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Rise Together Tee',
      price: 29.99,
      category: 'tshirts',
      image: '/assets/t2.jpg',
      description: 'A soft cotton t-shirt promoting unity and growth.',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: 'Note Book',
      price: 14.99,
      category: 'journals',
      image: '/assets/not1.jpg',
      description: 'Start your day with purpose with this inspirational notebook.',
      sizes: ['One Size']
    },
    {
      id: 4,
      name: 'Growth Diary',
      price: 24.99,
      category: 'journals',
      image: '/assets/note2.jpg',
      description: 'A beautifully crafted journal for reflection and growth.',
      sizes: ['One Size']
    },
    {
      id: 5,
      name: 'Unstoppable Hoodie',
      price: 54.99,
      category: 'hoodies',
      image: '/assets/hoodie1.jpg',
      description: 'Premium hoodie with a message of resilience and strength.',
      sizes: ['S', 'M', 'L', 'XL', '2XL']
    },
    {
      id: 6,
      name: 'She Rises Tee',
      price: 27.99,
      category: 'tshirts',
      image: '/assets/t1.jpg',
      description: 'Celebrate female empowerment with this stylish tee.',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    }, 

    {
      id: 7,
      name: 'Thriving Backpack',
      price: 27.99,
      category: 'bags',
      image: '/assets/pack.jpg',
      description: 'Carry your day with a beautiful bag.',
      sizes: ['One Size']
    }, 

    {
      id: 9,
      name: 'She Carry Bag',
      price: 20.99,
      category: 'bags',
      image: '/assets/bag1.jpg',
      description: 'Carry your essentials with style and purpose.',
      sizes: ['One Size']
    },

    {
      id: 8,
      name: 'e Cap',
      price: 9.99,
      category: 'caps',
      image: '/assets/cap.jpg',
      description: 'Wear with pride, promote with ease.',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    }
  ];

  const handleViewDetails = (product) => {
    navigate('/cart', { state: { product } });
  };

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section 
      className="relative bg-white py-15 md:py-30 overflow-hidden"
      style={{ fontFamily: 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif' }}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#F7D9D9] opacity-20 mix-blend-multiply filter blur-3xl translate-x-1/3 -translate-y-1/3 animate-float-slow"></div>
      
      {/* Mission Banner */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#00337C] to-[#B76E79] rounded-2xl p-8 md:p-10 text-white shadow-xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Every purchase funds skills, tools, and hope for women rebuilding their lives.
            </h2>
            <p className="text-lg opacity-90">
              When you shop with us, you're not just buying a product, you're investing in transformation.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Category Filters */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category.id 
                  ? 'bg-[#00337C] text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-[#00337C] font-medium text-lg mb-3">${product.price.toFixed(2)}</p>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleViewDetails(product)}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#00337C] to-[#B76E79] hover:from-[#B76E79] hover:to-[#00337C] transition-all duration-300"
                    >
                      View details
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 mt-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#F7F9FC] rounded-2xl p-8 md:p-10 border border-[#00337C]/20"
        >
          <h3 className="text-2xl font-bold text-[#00337C] mb-4">Want to make an even bigger impact?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Consider sponsoring a woman's full journey from healing to economic independence.
          </p>
          <Link
            to="/sponsor"
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#B76E79] to-[#D4A5AD] hover:from-[#D4A5AD] hover:to-[#B76E79] transition-all duration-300"
          >
            Learn About Sponsorship
          </Link>
        </motion.div>
      </div>
    </section>
  );
}