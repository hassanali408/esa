import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Home, 
  Building, 
  Shield, 
  Wrench, 
  Zap, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
// Using public folder for images

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Glazing',
      description: 'Window installation, replacement, and repair for homes. Energy-efficient solutions that enhance comfort and reduce costs.',
      features: ['Window replacement', 'Double glazing', 'Energy efficient glass', 'Emergency repairs']
    },
    {
      icon: Building,
      title: 'Commercial Glazing',
      description: 'Professional glazing services for offices, retail, and industrial buildings. Large-scale installations with precision.',
      features: ['Curtain walls', 'Storefronts', 'Safety glass', 'Structural glazing']
    },
    {
      icon: Shield,
      title: 'Safety & Security Glass',
      description: 'Specialized safety glass installations including tempered, laminated, and security glass for enhanced protection.',
      features: ['Tempered glass', 'Laminated glass', 'Security glazing', 'Fire-rated glass']
    },
    {
      icon: Wrench,
      title: 'Glass Repair',
      description: 'Quick and reliable glass repair services for emergency situations and scheduled maintenance.',
      features: ['Emergency repairs', 'Seal replacement', 'Frame repair', '24/7 service']
    },
    {
      icon: Zap,
      title: 'Energy Efficient Solutions',
      description: 'Advanced glazing technologies that improve insulation and reduce energy consumption significantly.',
      features: ['Low-E glass', 'Triple glazing', 'Insulated units', 'Smart glass']
    },
    {
      icon: Sparkles,
      title: 'Custom Glass Work',
      description: 'Bespoke glass solutions tailored to your specific requirements and architectural vision.',
      features: ['Custom designs', 'Decorative glass', 'Colored glass', 'Textured options']
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive glazing solutions for residential and commercial properties with expert craftsmanship and premium materials.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/services">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      data-testid={`button-learn-more-${index}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <Card className="overflow-hidden hover-elevate">
            <div className="relative h-64">
              <Image 
                src="/stock_images/project_image_01.jpeg" 
                alt="Commercial glazing project" 
                width={600}
                height={256}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Commercial Projects</h3>
                <p className="text-white/90">Large-scale glazing solutions</p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Professional commercial glazing services for offices, retail spaces, and industrial buildings.
              </p>
              <Link href="/gallery">
                <Button variant="outline" data-testid="button-commercial-projects">
                  View Commercial Work
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-elevate">
            <div className="relative h-64">
              <Image 
                src="/stock_images/project_image_08.jpeg" 
                alt="Residential glazing project" 
                width={600}
                height={256}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Residential Projects</h3>
                <p className="text-white/90">Home window installations</p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Expert residential glazing services to enhance your home&apos;s comfort and energy efficiency.
              </p>
              <Link href="/gallery">
                <Button variant="outline" data-testid="button-residential-projects">
                  View Residential Work
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team for a free consultation and quote tailored to your specific needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8" data-testid="button-get-started">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}