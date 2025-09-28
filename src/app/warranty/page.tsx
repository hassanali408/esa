"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Clock, CheckCircle, AlertTriangle, Phone, Mail } from 'lucide-react';

export default function Warranty() {
  const warrantyTypes = [
    {
      icon: Shield,
      title: "Workmanship Warranty",
      duration: "10 Years",
      description: "Our comprehensive workmanship warranty covers all installation and repair work performed by our certified glaziers.",
      coverage: [
        "Installation defects",
        "Seal failures",
        "Frame alignment issues",
        "Hardware malfunctions"
      ]
    },
    {
      icon: Clock,
      title: "Material Warranty",
      duration: "Varies by Manufacturer",
      description: "Material warranties are provided directly by manufacturers and vary depending on the specific products used.",
      coverage: [
        "Glass defects",
        "Frame material issues", 
        "Hardware failures",
        "Weatherstripping deterioration"
      ]
    }
  ];

  const warrantyProcess = [
    {
      step: "1",
      title: "Contact Us",
      description: "Call our warranty hotline or email us with details about the issue you're experiencing."
    },
    {
      step: "2", 
      title: "Assessment",
      description: "We'll schedule a free assessment to evaluate the issue and determine warranty coverage."
    },
    {
      step: "3",
      title: "Resolution",
      description: "If covered, we'll repair or replace the affected components at no cost to you."
    },
    {
      step: "4",
      title: "Follow-up", 
      description: "We'll follow up to ensure you're completely satisfied with the warranty service."
    }
  ];

  const exclusions = [
    "Damage caused by extreme weather events (hurricanes, tornadoes, hail)",
    "Impact damage from accidents or vandalism",
    "Damage resulting from improper maintenance",
    "Normal wear and tear from regular use",
    "Modifications made by unauthorized persons",
    "Damage from settling or structural movement of building"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Warranty Information</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We stand behind our work with comprehensive warranty coverage. Your satisfaction and peace of mind are our priority.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground">10 Year</Badge>
                <span>Workmanship Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground">100%</Badge>
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Warranty Coverage</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer comprehensive warranty protection for both our workmanship and the materials we use
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {warrantyTypes.map((warranty, index) => (
                <Card key={index} className="hover-elevate h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary p-3 rounded-lg">
                        <warranty.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{warranty.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{warranty.duration}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{warranty.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Coverage Includes:</h4>
                    <ul className="space-y-2">
                      {warranty.coverage.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Warranty Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Warranty Claim Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our simple 4-step process ensures quick resolution of any warranty issues
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {warrantyProcess.map((step, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold mb-4">Need to File a Warranty Claim?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="flex items-center gap-2" 
                  data-testid="button-call-warranty"
                  onClick={() => window.location.href = 'tel:+15551234567'}
                >
                  <Phone className="w-5 h-5" />
                  Call Warranty Hotline
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex items-center gap-2" 
                  data-testid="button-email-warranty"
                  onClick={() => window.location.href = 'mailto:warranty@esaglazing.com'}
                >
                  <Mail className="w-5 h-5" />
                  Email Warranty Department
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Exclusions */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  <CardTitle className="text-xl">Warranty Exclusions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  While our warranty coverage is comprehensive, the following conditions are not covered:
                </p>
                <ul className="space-y-2">
                  {exclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Maintaining Your Warranty</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proper maintenance helps ensure your warranty remains valid and your glazing performs optimally
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧽</span>
                  </div>
                  <h3 className="font-semibold mb-2">Regular Cleaning</h3>
                  <p className="text-sm text-muted-foreground">Clean glass and frames regularly with appropriate cleaning solutions</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="font-semibold mb-2">Annual Inspections</h3>
                  <p className="text-sm text-muted-foreground">Schedule annual inspections to catch issues early</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="font-semibold mb-2">Prompt Repairs</h3>
                  <p className="text-sm text-muted-foreground">Address small issues quickly to prevent larger problems</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Warranty Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our dedicated warranty team is here to help with any questions or concerns about your coverage
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Warranty Hotline</h3>
                  <p className="text-sm text-muted-foreground mb-3">Available 24/7 for urgent warranty claims</p>
                  <p className="font-semibold text-primary">+1 (555) 123-WARRANTY</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Warranty Email</h3>
                  <p className="text-sm text-muted-foreground mb-3">For non-urgent warranty questions</p>
                  <p className="font-semibold text-primary">warranty@esaglazing.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}