import React from 'react';
import { CONTACT_INFO, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex flex-col">
                <img src={LOGO_URL} alt="HMS South Tampa" className="h-10 w-auto object-contain brightness-0 invert opacity-90 self-start" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              HMS provides preventative home maintenance and concierge care for busy professionals and families in Tampa, FL.
            </p>
          </div>

          {/* Quick Links */}
          <div>
             <h3 className="text-white text-lg font-serif font-semibold mb-6">Quick Links</h3>
             <ul className="space-y-3 text-sm">
                <li><a href="https://www.hmssouthtampa.com/#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="https://www.hmssouthtampa.com/#process" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="https://www.hmssouthtampa.com/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="https://www.hmssouthtampa.com/#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
             </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-lg font-serif font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {CONTACT_INFO.address}
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center">
                 <svg className="h-5 w-5 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT_INFO.email}
              </li>
            </ul>
          </div>

          {/* Hours / Quick Links */}
          <div>
            <h3 className="text-white text-lg font-serif font-semibold mb-6">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon - Fri:</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Saturday:</span>
                <span className="text-white">By Appointment</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sunday:</span>
                <span className="text-gray-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} HMS South Tampa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-slate-300">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;