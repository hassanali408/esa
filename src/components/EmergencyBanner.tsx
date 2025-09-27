"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Phone, X } from 'lucide-react';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-destructive text-destructive-foreground py-2 px-3 sm:py-2 sm:px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 flex-1 min-w-0">
              <span className="text-xs sm:text-sm font-medium leading-tight">
                <span className="sm:hidden">24/7 Emergency Glass Repair</span>
                <span className="hidden sm:inline">24/7 Emergency Glass Repair Available</span>
              </span>
              <span className="text-xs sm:text-xs opacity-90 leading-tight hidden sm:inline">
                Broken glass? Storm damage? We respond within 2-4 hours
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-2 flex-shrink-0">
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent border-0 sm:border sm:border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive text-xs sm:text-xs px-2 sm:px-3 py-1.5 sm:py-2 flex-1 sm:flex-none min-w-0 h-8 sm:h-auto"
              data-testid="button-emergency-call"
            >
              <Phone className="w-3 h-3 sm:w-3 sm:h-3 mr-1 sm:mr-1 flex-shrink-0" />
              <span className="truncate">
                <span className="hidden sm:inline">Emergency: </span>
                <span className="sm:hidden">Call: </span>
                0730 5130 643
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-6 sm:w-6 hover:bg-destructive-foreground/10 flex-shrink-0"
              onClick={() => setIsVisible(false)}
              data-testid="button-close-banner"
            >
              <X className="w-4 h-4 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}