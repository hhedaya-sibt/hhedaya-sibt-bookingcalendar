import React, { useState } from 'react';
import { BOOKING_URL } from '../constants';

const BookingWidget: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-0 md:px-4">
      
      {/* Container that looks like a seamless card */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden relative" style={{ minHeight: '1350px' }}>
        
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
            <p className="text-slate-600 font-medium">Loading Booking Calendar...</p>
          </div>
        )}

        {/* The Iframe */}
        <iframe
          src={BOOKING_URL}
          title="HMS South Tampa Booking Calendar"
          className="w-full h-full border-0"
          style={{ minHeight: '1350px' }}
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; camera; microphone; geolocation; encrypted-media; gyroscope; picture-in-picture"
          scrolling="no" 
        />
      </div>

      <div className="mt-6 text-center text-slate-500 text-sm max-w-2xl px-4">
        <p>If the calendar does not load immediately, please refresh the page or <a href="https://www.hmssouthtampa.com/contact" className="text-accent hover:underline">contact us</a> directly.</p>
      </div>
    </div>
  );
};

export default BookingWidget;