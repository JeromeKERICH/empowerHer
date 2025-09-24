import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePaystackPayment } from 'react-paystack';

export default function CartPage() {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    if (!product) {
      navigate('/shop');
    }
  }, [product, navigate]);
  
  if (!product) {
    return null;
  }
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com", // This should come from user input
    amount: product.price * quantity * 100, // Amount in kobo
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  };
  
  const initializePayment = usePaystackPayment(config);
  
  const onSuccess = (reference) => {
    console.log(reference);
    // Handle successful payment
    alert("Payment successful! Thank you for your purchase.");
    navigate('/');
  };

  const onClose = () => {
    // Handle payment close
    console.log('Payment closed');
  };
  
  const handlePayment = () => {
    if ((product.category === 'hoodies' || product.category === 'tshirts') && !selectedSize) {
      alert('Please select a size before proceeding to payment.');
      return;
    }
    
    initializePayment(onSuccess, onClose);
  };
  
  const totalAmount = product.price * quantity;

  return (
    <section 
      className="relative bg-white py-15 md:py-30 overflow-hidden min-h-screen"
      style={{ fontFamily: 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif' }}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#F7D9D9] opacity-20 mix-blend-multiply filter blur-3xl translate-x-1/3 -translate-y-1/3 animate-float-slow"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          <h1 className="text-3xl font-bold text-center mb-8 text-[#00337C]">Product Details</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-[#00337C] font-medium text-xl mb-4">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Size Selection (only for wearables) */}
              {(product.category === 'hoodies' || product.category === 'tshirts') && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Select Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                          selectedSize === size 
                            ? 'bg-[#00337C] text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 bg-gray-200 rounded-l-md"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Total Price */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900">Total: ${totalAmount.toFixed(2)}</h3>
              </div>
              
              {/* Payment Button */}
              <button
                onClick={handlePayment}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#00337C] to-[#B76E79] text-white font-medium rounded-full hover:from-[#B76E79] hover:to-[#00337C] transition-all duration-300"
              >
                Proceed to Payment
              </button>
              
              {/* Continue Shopping */}
              <button
                onClick={() => navigate('/shop')}
                className="w-full py-3 px-6 mt-4 border border-[#00337C] text-[#00337C] font-medium rounded-full hover:bg-[#00337C] hover:text-white transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}