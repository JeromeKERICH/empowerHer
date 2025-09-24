import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaUser, FaPaperPlane, FaHandshake, FaNewspaper, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaCheckCircle } from 'react-icons/fa';

export default function ContactPage() {
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjectOptions = [
    { value: 'sponsorship', label: 'Sponsorship', icon: FaHandshake },
    { value: 'partnership', label: 'Partnership', icon: FaHandshake },
    { value: 'general', label: 'General Inquiry', icon: FaEnvelope },
    { value: 'media', label: 'Media', icon: FaNewspaper },
    { value: 'other', label: 'Other', icon: FaPaperPlane }
  ];

  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'Have questions? Reach out to our team.',
      email: 'hello@empowerher.org',
      phone: '+211 921 650 576',
      icon: FaCheckCircle
    },
    {
      title: 'Sponsorship & Partnerships',
      description: 'Let\'s explore how you can walk with us in empowering women through training, tools, and dignity.',
      email: 'sponsors@empowerher.org',
      icon: FaCheckCircle
    },
    {
      title: 'Media & Storytelling',
      description: 'For interviews, collaborations, or featuring EmpowerHer stories.',
      email: 'media@empoweher.org',
      icon: FaCheckCircle
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Build Together
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you want to sponsor, partner, or simply learn more, we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Options</h2>
            
            {contactMethods.map((method, index) => (
              <div key={method.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00337C] to-[#1E40AF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <method.icon className="text-xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <FaEnvelope className="mr-3 text-gray-300" />
                        <a href={`mailto:${method.email}`} className="hover:text-purple-600 transition-colors">
                          {method.email}
                        </a>
                      </div>
                      {method.phone && (
                        <div className="flex items-center text-gray-700">
                          <FaPhone className="mr-3 text-gray-300" />
                          <a href={`tel:${method.phone}`} className="hover:text-purple-600 transition-colors">
                            {method.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Connections */}
            <div className="bg-white rounded-2xl p-6 text-gray-700">
              <h3 className="text-lg font-semibold mb-3">Follow Our Journey</h3>
              <p className="text-gray-500 mb-4">Share the story and stay connected</p>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebook, label: 'Facebook' },
                  { icon: FaInstagram, label: 'Instagram' },
                  { icon: FaLinkedin, label: 'LinkedIn' },
                  { icon: FaTwitter, label: 'X' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact Form</h2>
            <p className="text-gray-600 mb-6">Simple and human — we promise to respond!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                 
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
                  placeholder="Your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  
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

              {/* Phone */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                 
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+254 XXX XXX XXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a subject</option>
                  {subjectOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00337C] to-[#1E40AF] text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}