import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-kids-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="block">
              <img src={logo} alt="The Creative World" className="h-20 w-auto object-contain bg-white rounded-xl p-2" />
            </Link>
            <p className="text-white/80 leading-relaxed">
              Where stories come alive — building foundations for amazing values and learning.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-kids-yellow transition-all">Home</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-kids-yellow transition-all">Gallery</Link></li>
              <li><Link to="/workshop" className="text-white/80 hover:text-kids-yellow transition-all">Workshop</Link></li>
              <li><Link to="/events" className="text-white/80 hover:text-kids-yellow transition-all">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-kids-yellow rounded-full flex items-center justify-center transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-kids-pink rounded-full flex items-center justify-center transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-kids-blue rounded-full flex items-center justify-center transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 The Creative World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
