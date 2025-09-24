import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaHandHoldingHeart, FaCreditCard, FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function SponsorSupportPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, [])

        
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    sponsorshipLevel: '',
    customAmount: '',
    paymentMethod: '',
    receiveUpdates: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sponsorshipLevels = [
    { value: 'starter', label: 'Starter Support – $100', description: 'Training materials + starter kit' },
    { value: 'growth', label: 'Growth Partner – $250', description: 'Full vocational training for one woman' },
    { value: 'champion', label: 'Champion Sponsor – $1,000', description: 'Sponsor 5+ women and community support' },
    { value: 'custom', label: 'Custom Amount', description: 'Choose your own sponsorship amount' }
  ];

  const paymentMethods = [
    { value: 'card', label: 'Credit/Debit Card' },
    { value: 'mobile', label: 'Mobile Money (M-Pesa, Airtel Money, etc.)' },
    { value: 'bank', label: 'Bank Transfer' },
    { value: 'paystack', label: 'Paystack / Stripe' }
  ];

  const steps = [
    { number: 1, title: 'Personal Info', icon: FaUser },
    { number: 2, title: 'Sponsorship', icon: FaHandHoldingHeart },
    { number: 3, title: 'Payment', icon: FaCreditCard }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email address is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    }

    if (step === 2) {
      if (!formData.sponsorshipLevel) newErrors.sponsorshipLevel = 'Please select a sponsorship level';
      if (formData.sponsorshipLevel === 'custom' && !formData.customAmount) {
        newErrors.customAmount = 'Please enter a custom amount';
      }
    }

    if (step === 3) {
      if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select a payment method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    try {
      console.log('Form data:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Thank you for your sponsorship! You will be redirected to payment.');
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error processing your sponsorship. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSponsorshipAmount = () => {
    switch (formData.sponsorshipLevel) {
      case 'starter': return 100;
      case 'growth': return 250;
      case 'champion': return 1000;
      case 'custom': return parseFloat(formData.customAmount) || 0;
      default: return 0;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Sponsor a Woman's Journey
          </h1>
          
        </motion.div>

        

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
                  <p className="text-gray-600 mb-6">Tell us a bit about yourself</p>

                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="mr-2 text-purple-600" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          errors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="mr-2 text-purple-600" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <FaPhone className="mr-2 text-purple-600" />
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Sponsorship Level */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Sponsorship</h2>
                  <p className="text-gray-600 mb-6">Select the level that matches your impact goals</p>

                  <div className="space-y-4">
                    {sponsorshipLevels.map(level => (
                      <label key={level.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:border-purple-300 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="sponsorshipLevel"
                          value={level.value}
                          checked={formData.sponsorshipLevel === level.value}
                          onChange={handleChange}
                          className="mt-1 text-purple-600 focus:ring-purple-500"
                        />
                        <div className="flex-1">
                          <span className="font-medium text-gray-900">{level.label}</span>
                          <p className="text-sm text-gray-600 mt-1">{level.description}</p>
                        </div>
                      </label>
                    ))}
                    {errors.sponsorshipLevel && <p className="text-red-500 text-sm mt-1">{errors.sponsorshipLevel}</p>}

                    {formData.sponsorshipLevel === 'custom' && (
                      <div className="pl-12">
                        <input
                          type="number"
                          name="customAmount"
                          value={formData.customAmount}
                          onChange={handleChange}
                          placeholder="Enter amount in USD"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                            errors.customAmount ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.customAmount && <p className="text-red-500 text-sm mt-1">{errors.customAmount}</p>}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment & Final Details */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Details</h2>
                  <p className="text-gray-600 mb-6">Complete your sponsorship</p>

                  {/* Order Summary */}
                  {formData.sponsorshipLevel && (
                    <div className="bg-purple-50 rounded-lg p-4 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Sponsorship Summary</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                          {sponsorshipLevels.find(l => l.value === formData.sponsorshipLevel)?.label.split('–')[0].trim()}
                        </span>
                        <span className="font-bold text-purple-600">${getSponsorshipAmount()}</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <FaCreditCard className="mr-2 text-purple-600" />
                        Preferred Payment Method *
                      </label>
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          errors.paymentMethod ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select payment method</option>
                        {paymentMethods.map(method => (
                          <option key={method.value} value={method.value}>{method.label}</option>
                        ))}
                      </select>
                      {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <input
                        type="checkbox"
                        name="receiveUpdates"
                        checked={formData.receiveUpdates}
                        onChange={handleChange}
                        className="mt-1 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">
                        Yes, I'd love to receive updates and impact stories from EmpowerHer.
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Previous
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Next
                  <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Complete Sponsorship'
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}