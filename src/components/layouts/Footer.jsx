import { Link } from 'react-router-dom';
import { FaHeart, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function MinimalFooter() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Branding */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">EmpowerHer</h3>
              <p className="text-gray-300 text-sm mb-2">by Build Your Best Self</p>
              <p className="text-gray-400 italic">"Because when one woman rises, many follow."</p>
            </div>

            {/* Links */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">About</Link>
                <Link to="/sponsor" className="text-gray-300 hover:text-white text-sm">Sponsorship</Link>
                <Link to="/shop" className="text-gray-300 hover:text-white text-sm">Shop</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400 text-sm" />
                <span className="text-gray-300 text-sm">hello@empowerher.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-400 text-sm" />
                <span className="text-gray-300 text-sm">+211 921 650 576</span>
              </div>
              <div className="flex space-x-3 pt-2">
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2025 Build Your Best Self | EmpowerHer Initiative - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}