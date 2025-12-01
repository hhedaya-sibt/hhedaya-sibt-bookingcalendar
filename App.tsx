import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingWidget from './components/BookingWidget';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Navigation - Sticky Top */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center w-full">
        
        {/* Page Title Section - Clean and matching typography */}
        <div className="w-full bg-slate-50 py-16 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">South Tampa's Premier Home Care</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
              Monthly Home Maintenance Service
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Seamlessly schedule your preventative home maintenance and concierge care.
            </p>
          </div>
        </div>

        {/* Booking Calendar Integration */}
        <div className="w-full max-w-7xl px-0 sm:px-6 lg:px-8 py-12 -mt-8">
           <BookingWidget />
        </div>

      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default App;