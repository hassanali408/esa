"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Phone, X } from 'lucide-react';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-destructive text-destructive-foreground py-2 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
              <span className="text-sm font-medium">
                24/7 Emergency Glass Repair Available
              </span>
              <span className="text-xs opacity-90">
                Broken glass? Storm damage? We respond within 2-4 hours
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive text-xs px-3"
              data-testid="button-emergency-call"
            >
              <Phone className="w-3 h-3 mr-1" />
              Emergency: 0730 5130 643
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 hover:bg-destructive-foreground/10"
              onClick={() => setIsVisible(false)}
              data-testid="button-close-banner"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}