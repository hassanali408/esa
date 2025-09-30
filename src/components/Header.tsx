"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm border-b border-primary-foreground/20">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>0208 599 2753</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>0730 5130 643</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>esa_glazing@hotmail.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/stock_images/logo.png" 
              alt="ESA Windows & Doors Logo" 
              width={65} 
              height={65}
              className="object-contain brightness-0 invert"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">ESA</span>
              <span className="text-sm font-medium opacity-90">WINDOWS & DOORS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium ${
                  pathname === item.path ? 'border-b-2 border-primary-foreground' : ''
                }`}
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-testid="button-quote"
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary mt-2"
                data-testid="button-mobile-quote"
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}