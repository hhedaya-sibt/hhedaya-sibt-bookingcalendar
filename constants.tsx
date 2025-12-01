import React from 'react';
import { NavItem } from './types';

// Navigation matching the main website structure
// Note: Anchors removed as they were causing blank screen issues on external navigation
export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: 'https://www.hmssouthtampa.com' },
  { label: 'Process', href: 'https://www.hmssouthtampa.com' },
  { label: 'Pricing', href: 'https://www.hmssouthtampa.com' },
  { label: 'Testimonials', href: 'https://www.hmssouthtampa.com' },
  { label: 'Schedule Service', href: 'https://booking.hmssouthtampa.com', isButton: true },
];

export const LOGO_URL = "https://storage.googleapis.com/msgsndr/Z9VkbpvTwFPgODZUYAw7/media/6929d5f832bffb323ba2309f.png";

export const CONTACT_INFO = {
  address: "South Tampa, FL 33629",
  phone: "(813) 705-5705",
  email: "info@hmssouthtampa.com",
  openStatus: "OPEN 24/7"
};

export const BOOKING_URL = "https://app.hmssouthtampa.com/widget/bookings/hms-south-tampa-booking-calend";