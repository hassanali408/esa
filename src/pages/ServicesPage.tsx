import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield, Star, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const serviceDetails = [
    {
      title: "Mirror Cut to Size",
      description: "Professional mirror cutting service to your exact specifications",
      features: ["Precision cutting to exact measurements", "Various mirror thicknesses available", "Edge polishing included", "Quick turnaround service"],
      pricing: "Starting from £25 per mirror",
      timeframe: "Same day service available"
    },
    {
      title: "Glass Cut to Size", 
      description: "Custom glass cutting for windows, doors, and other applications",
      features: ["All glass types available", "Precise measurements", "Safety glass options", "Professional installation"],
      pricing: "Starting from £15 per piece",
      timeframe: "1-2 days typical"
    },
    {
      title: "Replace Moisture Glass",
      description: "Specialized service for replacing fogged or moisture-damaged double glazing",
      features: ["Double glazing replacement", "Moisture removal", "Seal restoration", "Energy efficiency improvement"],
      pricing: "Starting from £80 per unit",
      timeframe: "Same day service available"
    },
    {
      title: "Windows & Doors Repair",
      description: "Complete repair service for UPVC and aluminium windows and doors",
      features: ["Hardware replacement", "Seal repairs", "Lock mechanisms", "Frame restoration"],
      pricing: "Starting from £45 per repair",
      timeframe: "1-3 days typical"
    },
    {
      title: "Glass Replacement",
      description: "Professional glass replacement for all types of windows and doors",
      features: ["Safety glass options", "Energy-efficient glazing", "Quick installation", "Clean up included"],
      pricing: "Starting from £60 per pane",
      timeframe: "Same day service available"
    },
    {
      title: "Glass Sealing",
      description: "Professional sealing service to prevent moisture and air leakage",
      features: ["Weatherproof sealing", "Long-lasting materials", "Energy efficiency improvement", "Professional application"],
      pricing: "Starting from £35 per unit",
      timeframe: "1-2 hours per unit"
    }
  ];

  const certifications = [
    "Manufacturing and Installers of UPVC & Aluminium",
    "All Repair Work", 
    "Free Quotations",
    "Quick Services",
    "Fully Licensed & Insured"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Manufacturing and Installers of UPVC & Aluminium. All repair work with free quotations and quick services.
            </p>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Get Free Estimate
            </Button>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Detailed Service Information</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn more about our specialized glazing services and what's included
              </p>
            </div>

            <div className="space-y-8">
              {serviceDetails.map((service, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">{service.timeframe}</Badge>
                        <p className="text-sm font-semibold text-primary">{service.pricing}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Button className="w-full" data-testid={`button-quote-${index}`}>
                          Get Quote
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" className="w-full" data-testid={`button-learn-${index}`}>
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From initial consultation to final installation, we ensure a smooth and professional experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "Free on-site assessment and consultation" },
                { step: "2", title: "Measurement", desc: "Precise measurements and design planning" },
                { step: "3", title: "Installation", desc: "Professional installation by certified glaziers" },
                { step: "4", title: "Completion", desc: "Quality check and warranty activation" }
              ].map((item, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Certifications & Credentials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to quality is backed by industry certifications and credentials
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="p-4">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium text-sm">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}