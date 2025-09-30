import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import Link from 'next/link';
// Using public folder for images

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/stock_images/modern_glass_window__a319ff26.jpg')` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight px-4">
          Professional
          <span className="block text-blue-400">Windows & Doors</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Expert glass installation, window replacement, and commercial glazing solutions with over 15 years of experience
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12 px-4">
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              data-testid="button-get-quote"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/gallery">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg backdrop-blur-sm bg-white/10"
              data-testid="button-our-work"
            >
              View Our Work
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
            <div className="bg-primary p-2 md:p-3 rounded-full">
              <Shield className="w-6 md:w-8 h-6 md:h-8 text-primary-foreground" />
            </div>
            <h3 className="text-base md:text-lg font-semibold">Quality Guaranteed</h3>
            <p className="text-white/80 text-sm md:text-base">All work comes with comprehensive warranty</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
            <div className="bg-primary p-2 md:p-3 rounded-full">
              <Clock className="w-6 md:w-8 h-6 md:h-8 text-primary-foreground" />
            </div>
            <h3 className="text-base md:text-lg font-semibold">Quick Turnaround</h3>
            <p className="text-white/80 text-sm md:text-base">Fast and efficient installation service</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
            <div className="bg-primary p-2 md:p-3 rounded-full">
              <Users className="w-6 md:w-8 h-6 md:h-8 text-primary-foreground" />
            </div>
            <h3 className="text-base md:text-lg font-semibold">Expert Team</h3>
            <p className="text-white/80 text-sm md:text-base">Certified glaziers with 15+ years experience</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}