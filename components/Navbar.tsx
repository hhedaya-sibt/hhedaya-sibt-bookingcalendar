import React, { useState } from 'react';
import { NAV_ITEMS, CONTACT_INFO, LOGO_URL } from '../constants';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600 mr-1">
    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.96 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 4.5z" clipRule="evenodd" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = 'https://www.hmssouthtampa.com'}>
             <img src={LOGO_URL} alt="HMS South Tampa" className="h-12 md:h-14 w-auto object-contain" />
          </div>

          {/* Desktop Content */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* Contact Info Block */}
            <div className="flex flex-col items-end mr-4">
                <div className="flex items-center text-primary font-bold text-lg">
                    <PhoneIcon />
                    <span>Call {CONTACT_INFO.phone}</span>
                </div>
                <span className="text-[0.65rem] font-bold tracking-widest text-green-600 uppercase">{CONTACT_INFO.openStatus}</span>
            </div>

            {/* Nav Items */}
            <div className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                item.isButton ? (
                    <a
                    key={item.label}
                    href={item.href}
                    className="bg-primary hover:bg-slate-800 text-white px-6 py-3 rounded-sm text-sm font-medium transition-all duration-200 uppercase tracking-wide shadow-sm hover:shadow-md"
                    >
                    {item.label}
                    </a>
                ) : (
                    <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-600 hover:text-primary px-1 py-2 text-sm font-medium transition-colors duration-200"
                    >
                    {item.label}
                    </a>
                )
                ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-slate-700 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 py-6 space-y-4">
            
            {/* Mobile Contact Info */}
            <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center text-primary font-bold text-lg mb-1">
                    <PhoneIcon />
                    <span>Call {CONTACT_INFO.phone}</span>
                </div>
                <span className="text-xs font-bold tracking-widest text-green-600 uppercase block pl-6">{CONTACT_INFO.openStatus}</span>
            </div>

            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  item.isButton 
                    ? 'bg-primary text-white text-center mt-4 mx-2 shadow-md uppercase tracking-wide' 
                    : 'text-slate-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;