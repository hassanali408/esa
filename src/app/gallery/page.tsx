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
      title: "Bay Window Installation with Decorative Leading",
      category: "residential",
      image: "/stock_images/project_image_01.jpeg",
      description: "Beautiful five-panel bay window installation featuring white uPVC frames with decorative leading and tilt-and-turn functionality.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Bay Window Design", "Decorative Leading", "Tilt-and-Turn Mechanism", "uPVC Frames"]
    },
    {
      id: 2,
      title: "Modern Window Installation with Clean Lines",
      category: "residential", 
      image: "/stock_images/project_image_02.jpeg",
      description: "Contemporary window installation featuring clean, modern design with quality uPVC frames and excellent craftsmanship.",
      location: "Modern Home",
      date: "2024",
      client: "Private Residence",
      features: ["Modern Design", "Clean Lines", "Quality uPVC", "Professional Installation"]
    },
    {
      id: 3,
      title: "Professional Window Installation Project",
      category: "residential",
      image: "/stock_images/project_image_03.jpeg",
      description: "High-quality window installation showcasing professional craftsmanship and attention to detail in residential glazing work.",
      location: "Residential Property",
      date: "2023",
      client: "Private Residence",
      features: ["Professional Installation", "Quality Craftsmanship", "Attention to Detail", "Residential Glazing"]
    },
    {
      id: 4,
      title: "Modern Tilt-and-Turn Window Installation",
      category: "residential",
      image: "/stock_images/project_image_04.jpeg",
      description: "High-quality white uPVC window installation featuring tilt-and-turn mechanism with excellent street views and clean modern design.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Tilt-and-Turn Mechanism", "White uPVC Frame", "Modern Design", "Quality Installation"]
    },
    {
      id: 5,
      title: "Quality Window Installation Work",
      category: "residential",
      image: "/stock_images/project_image_05.jpeg",
      description: "Professional window installation showcasing excellent craftsmanship and attention to detail in residential glazing services.",
      location: "Residential Property",
      date: "2023",
      client: "Private Residence",
      features: ["Professional Installation", "Quality Craftsmanship", "Residential Service", "Attention to Detail"]
    },
    {
      id: 6,
      title: "Professional Window Frame Installation",
      category: "residential",
      image: "/stock_images/project_image_06.jpeg",
      description: "Expert window frame installation work demonstrating precision craftsmanship and quality materials in residential glazing.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Frame Installation", "Precision Craftsmanship", "Quality Materials", "Professional Service"]
    },
    {
      id: 7,
      title: "Modern Window Installation Project",
      category: "residential",
      image: "/stock_images/project_image_07.jpeg",
      description: "Contemporary window installation showcasing modern design and professional craftsmanship in residential glazing work.",
      location: "Modern Home",
      date: "2024",
      client: "Private Residence",
      features: ["Modern Design", "Professional Installation", "Contemporary Style", "Quality Workmanship"]
    },
    {
      id: 8,
      title: "Professional Window Installation Work",
      category: "residential",
      image: "/stock_images/project_image_08.jpeg",
      description: "High-quality window installation demonstrating professional expertise and attention to detail in residential glazing services.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Professional Installation", "Quality Workmanship", "Attention to Detail", "Residential Service"]
    },
    {
      id: 10,
      title: "Window Installation Work in Progress",
      category: "residential",
      image: "/stock_images/project_image_10.jpeg",
      description: "Professional window installation work showing the installation process and quality craftsmanship in residential glazing.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Installation Process", "Quality Craftsmanship", "Professional Work", "Residential Service"]
    },
    {
      id: 11,
      title: "Professional Window Frame Work",
      category: "residential",
      image: "/stock_images/project_image_11.jpeg",
      description: "Expert window frame installation and finishing work demonstrating precision craftsmanship in residential glazing services.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Frame Installation", "Precision Work", "Professional Finishing", "Quality Craftsmanship"]
    },
    {
      id: 12,
      title: "Quality Window Installation Service",
      category: "residential",
      image: "/stock_images/project_image_12.jpeg",
      description: "Professional window installation service showcasing quality workmanship and attention to detail in residential glazing projects.",
      location: "Residential Property",
      date: "2023",
      client: "Private Residence",
      features: ["Quality Installation", "Professional Service", "Attention to Detail", "Residential Work"]
    },
    {
      id: 13,
      title: "Professional Door Installation",
      category: "residential",
      image: "/stock_images/project_image_13.jpeg",
      description: "Expert door installation work demonstrating professional craftsmanship and quality materials in residential glazing services.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Door Installation", "Professional Craftsmanship", "Quality Materials", "Residential Service"]
    },
    {
      id: 15,
      title: "Professional Window Installation Work",
      category: "residential",
      image: "/stock_images/project_image_15.jpeg",
      description: "High-quality window installation work demonstrating professional expertise and attention to detail in residential glazing services.",
      location: "Residential Property",
      date: "2023",
      client: "Private Residence",
      features: ["Professional Installation", "Quality Workmanship", "Attention to Detail", "Residential Service"]
    },
    {
      id: 18,
      title: "Professional Window Installation Project",
      category: "residential",
      image: "/stock_images/project_image_18.jpeg",
      description: "Expert window installation project showcasing professional craftsmanship and quality materials in residential glazing work.",
      location: "Residential Property",
      date: "2023",
      client: "Private Residence",
      features: ["Professional Installation", "Quality Craftsmanship", "Expert Workmanship", "Residential Service"]
    },
    {
      id: 20,
      title: "Professional Window Installation Work",
      category: "residential",
      image: "/stock_images/project_image_20.jpeg",
      description: "High-quality window installation work demonstrating professional expertise and attention to detail in residential glazing services.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Professional Installation", "Quality Workmanship", "Attention to Detail", "Residential Service"]
    },
    {
      id: 21,
      title: "Professional Door Installation Work",
      category: "residential",
      image: "/stock_images/project_image_21.jpeg",
      description: "Expert door installation work demonstrating professional craftsmanship and quality materials in residential glazing services.",
      location: "Residential Property",
      date: "2023",
      client: "Private Residence",
      features: ["Door Installation", "Professional Craftsmanship", "Quality Materials", "Residential Service"]
    },
    {
      id: 24,
      title: "Professional Window Installation Work",
      category: "residential",
      image: "/stock_images/project_image_24.jpeg",
      description: "High-quality window installation work demonstrating professional expertise and attention to detail in residential glazing services.",
      location: "Residential Property",
      date: "2023",
      client: "Private Residence",
      features: ["Professional Installation", "Quality Workmanship", "Attention to Detail", "Residential Service"]
    },
    {
      id: 26,
      title: "Professional Window Installation Work",
      category: "residential",
      image: "/stock_images/project_image_26.jpeg",
      description: "High-quality window installation work demonstrating professional expertise and attention to detail in residential glazing services.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Professional Installation", "Quality Workmanship", "Attention to Detail", "Residential Service"]
    },
    {
      id: 31,
      title: "Professional Window Installation Work",
      category: "residential",
      image: "/stock_images/project_image_31.jpeg",
      description: "High-quality window installation work demonstrating professional expertise and attention to detail in residential glazing services.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Professional Installation", "Quality Workmanship", "Attention to Detail", "Residential Service"]
    },
    {
      id: 32,
      title: "Professional Window Installation in Progress",
      category: "residential",
      image: "/stock_images/project_image_32.jpeg",
      description: "Professional glazier working on window installation demonstrating skilled craftsmanship and attention to detail in residential glazing work.",
      location: "Residential Property",
      date: "2024",
      client: "Private Residence",
      features: ["Professional Installation", "Skilled Craftsmanship", "Work in Progress", "Quality Workmanship"]
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