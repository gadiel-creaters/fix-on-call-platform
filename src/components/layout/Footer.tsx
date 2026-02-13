import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Fix On Call</span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed">
              Kenya's trusted roadside assistance platform connecting drivers with verified mechanics in real time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider opacity-40">Platform</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><Link to="/register" className="hover:opacity-100 transition-opacity">For Drivers</Link></li>
              <li><Link to="/register" className="hover:opacity-100 transition-opacity">For Mechanics</Link></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider opacity-40">Company</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider opacity-40">Support</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm opacity-40">
          © {new Date().getFullYear()} Fix On Call. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
