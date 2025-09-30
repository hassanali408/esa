import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// Using public folder for images

interface AboutProps {
  isHomePage?: boolean;
}

export default function About({ isHomePage = false }: AboutProps) {
  const stats = [
    { icon: Calendar, label: '15+ Years', description: 'In Business' },
    { icon: Users, label: '500+', description: 'Happy Clients' },
    { icon: CheckCircle, label: '1000+', description: 'Projects Completed' },
    { icon: Award, label: '100%', description: 'Satisfaction Rate' },
  ];

  const achievements = [
    'Manufacturing and Installers of UPVC & Aluminium',
    'All Repair Work Available',
    'Free Quotations Provided',
    'Quick Services Guaranteed',
    'Mirror and Glass Cutting',
    'Professional Installation'
  ];

  if (isHomePage) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose ESA Glazing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manufacturing and Installers of UPVC & Aluminium. All repair work with free quotations and quick services.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/about">
              <Button size="lg" data-testid="button-learn-more">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Full about page layout with zigzag design
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About ESA Glazing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manufacturing and Installers of UPVC & Aluminium. Your trusted partner for professional glazing services.
          </p>
        </div>

        {/* Zigzag layout */}
        <div className="space-y-24">
          {/* First section - Image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image 
                src="/stock_images/project_image_32.jpeg" 
                alt="Professional glazier at work" 
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ESA Glazing specializes in manufacturing and installing UPVC & Aluminium windows and doors. We provide comprehensive repair services with free quotations and quick turnaround times.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our services include mirror cutting, glass cutting to size, moisture glass replacement, window and door repairs, glass replacement, and professional sealing services.
              </p>
            </div>
          </div>

          {/* Second section - Content left, stats right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Expertise</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We pride ourselves on providing comprehensive glazing solutions with a focus on quality materials and professional installation. Our team is experienced in working with UPVC and Aluminium systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">{stat.label}</h3>
                    <p className="text-muted-foreground text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Third section - Project Showcase */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Recent Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Take a look at some of our recent glazing projects showcasing our expertise and quality workmanship.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover-elevate">
                <Image 
                  src="/stock_images/project_image_02.jpeg" 
                  alt="Residential window project" 
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Luxury Home Windows</h3>
                  <p className="text-sm text-muted-foreground">Triple-glazed energy efficient windows</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <Image 
                  src="/stock_images/project_image_12.jpeg" 
                  alt="Commercial glazing project" 
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Office Building</h3>
                  <p className="text-sm text-muted-foreground">Complete glazing solution</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <Image 
                  src="/stock_images/project_image_24.jpeg" 
                  alt="Window replacement project" 
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Window Replacement</h3>
                  <p className="text-sm text-muted-foreground">Modern frames and energy efficient glass</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Link href="/gallery">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Fourth section - Mission */}
          <div className="text-center bg-muted/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To provide exceptional glazing services including manufacturing and installation of UPVC & Aluminium windows and doors. We are committed to delivering quality workmanship, free quotations, and quick services for all your glazing needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}