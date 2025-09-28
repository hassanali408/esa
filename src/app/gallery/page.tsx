"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Calendar, User, Eye } from 'lucide-react';
import Image from 'next/image';
// Using public folder for images

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Modern Office Complex - Downtown",
      category: "commercial",
      image: "/stock_images/modern_office_buildi_ed1d25ed.jpg",
      description: "Complete glazing solution for 15-story office building including curtain walls and energy-efficient windows.",
      location: "Downtown Business District",
      date: "2024",
      client: "Metro Development Group",
      features: ["Curtain Wall System", "Energy Efficient Glass", "Safety Glass"]
    },
    {
      id: 2,
      title: "Luxury Home Window Replacement",
      category: "residential", 
      image: "/stock_images/residential_window_i_f85c2660.jpg",
      description: "Full home window replacement with triple-glazed energy efficient windows for maximum comfort.",
      location: "Suburban Hills",
      date: "2024",
      client: "Private Residence",
      features: ["Triple Glazing", "Custom Frames", "Energy Star Certified"]
    },
    {
      id: 3,
      title: "Shopping Center Storefront",
      category: "commercial",
      image: "/stock_images/modern_glass_window__a319ff26.jpg",
      description: "Large storefront glazing installation with security features and modern design elements.",
      location: "City Shopping Center",
      date: "2023",
      client: "Retail Properties Inc.",
      features: ["Security Glass", "Large Spans", "Modern Design"]
    },
    {
      id: 4,
      title: "Emergency Glass Repair",
      category: "emergency",
      image: "/stock_images/professional_glazier_7e77ca0d.jpg",
      description: "24-hour emergency response for storm damage glass replacement at commercial facility.",
      location: "Industrial Park",
      date: "2024",
      client: "Manufacturing Corp",
      features: ["24-Hour Service", "Storm Damage Repair", "Temporary Boarding"]
    },
    {
      id: 5,
      title: "Historic Building Restoration",
      category: "specialty",
      image: "/stock_images/modern_office_buildi_ed1d25ed.jpg",
      description: "Careful restoration of historic building windows while maintaining original architectural integrity.",
      location: "Heritage District",
      date: "2023",
      client: "City Heritage Committee", 
      features: ["Historic Preservation", "Custom Manufacturing", "Heritage Compliance"]
    },
    {
      id: 6,
      title: "Residential Patio Doors",
      category: "residential",
      image: "/stock_images/residential_window_i_f85c2660.jpg",
      description: "Installation of large sliding patio doors with integrated blinds and security features.",
      location: "Riverside Community",
      date: "2024",
      client: "Private Residence",
      features: ["Sliding Doors", "Integrated Blinds", "Security Features"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'commercial', name: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
    { id: 'residential', name: 'Residential', count: projects.filter(p => p.category === 'residential').length },
    { id: 'emergency', name: 'Emergency', count: projects.filter(p => p.category === 'emergency').length },
    { id: 'specialty', name: 'Specialty', count: projects.filter(p => p.category === 'specialty').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Explore our portfolio of completed glazing projects showcasing our expertise across residential, commercial, and specialty installations
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground">500+</Badge>
                <span>Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground">15+</Badge>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                  data-testid={`filter-${category.id}`}
                >
                  {category.name}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden hover-elevate cursor-pointer group">
                      <div className="relative h-64 overflow-hidden">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          width={400}
                          height={256}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <Badge className="mb-2 bg-primary text-primary-foreground">
                              {project.category}
                            </Badge>
                            <div className="flex items-center gap-2 text-white">
                              <Eye className="w-4 h-4" />
                              <span className="text-sm">View Details</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{project.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          width={600}
                          height={320}
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <Badge className="mb-4" variant="outline">
                          {project.category}
                        </Badge>
                        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">Completed in {project.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{project.client}</span>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3">Project Features:</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.features.map((feature, index) => (
                              <Badge key={index} variant="secondary">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button 
                          className="w-full mt-6" 
                          data-testid="button-contact-project"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Contact Us About Similar Project
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss your glazing needs and get a personalized quote for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                data-testid="button-get-quote"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                data-testid="button-view-services"
                onClick={() => window.location.href = '/services'}
              >
                View Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}