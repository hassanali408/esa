"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  // WhatsApp business number - replace with actual number
  const whatsappNumber = "1234567890";
  const defaultMessage = "Hello! I'm interested in your glazing services. Could you please provide me with more information?";
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    console.log('WhatsApp contact initiated');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        )}
        
        {/* WhatsApp Button */}
        <Button
          onClick={handleClick}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          data-testid="button-whatsapp"
        >
          <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
        </Button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </div>
    </div>
  );
}