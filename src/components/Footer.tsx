"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Mirror Cut to Size', href: '/services#mirror' },
      { name: 'Glass Cut to Size', href: '/services#glass-cut' },
      { name: 'Replace Moisture Glass', href: '/services#moisture' },
      { name: 'Windows & Doors Repair', href: '/services#repair' },
      { name: 'Glass Replacement', href: '/services#replacement' },
      { name: 'Glass Sealing', href: '/services#sealing' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Certifications', href: '/about#certifications' },
      { name: 'Insurance', href: '/about#insurance' }
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Get Quote', href: '/contact#quote' },
      { name: 'Emergency Service', href: '/contact#emergency' },
      { name: 'Warranty', href: '/warranty' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-2 rounded-lg">
                  <Image 
                    src="/stock_images/logo.png" 
                    alt="ESA Windows & Doors Logo" 
                    width={65} 
                    height={65}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">ESA</span>
                  <span className="text-sm font-medium opacity-90">WINDOWS & DOORS</span>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Manufacturing and Installers of UPVC & Aluminium. All repair work with free quotations and quick services.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.label}
                    data-testid={`link-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      data-testid={`link-service-${index}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      data-testid={`link-company-${index}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80 text-sm">
                    <p>691 Unit B</p>
                    <p>London, UK</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div className="text-primary-foreground/80 text-sm">
                    <p>0208 599 2753</p>
                    <p className="text-xs">Mobile: 0730 5130 643</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <p className="text-primary-foreground/80 text-sm">esa_glazing@hotmail.com</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80 text-sm">
                    <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                    <p>Sat: 8:00 AM - 4:00 PM</p>
                    <p>Sun: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} ESA Windows & Doors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="hover:text-primary-foreground transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-primary-foreground transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </Link>
              <Link 
                href="/warranty" 
                className="hover:text-primary-foreground transition-colors"
                data-testid="link-warranty"
              >
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}