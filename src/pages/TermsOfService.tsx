import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfService() {
  const sections = [
    {
      title: "Service Agreement",
      content: [
        "These terms govern the glazing services provided by ESA Glazing.",
        "By engaging our services, you agree to these terms and conditions.",
        "Services include window installation, glass repair, and commercial glazing solutions.",
        "All work will be performed according to industry standards and local building codes."
      ]
    },
    {
      title: "Quotes and Pricing",
      content: [
        "All quotes are valid for 30 days from the date of issue.",
        "Prices may vary based on material costs and project specifications.",
        "Additional costs may apply for changes to the original scope of work.",
        "Payment terms will be specified in your service agreement."
      ]
    },
    {
      title: "Project Timeline",
      content: [
        "Estimated completion times are provided as guidance and may vary.",
        "Weather conditions and material availability may affect timelines.",
        "We will provide regular updates on project progress.",
        "Any delays will be communicated promptly with revised timelines."
      ]
    },
    {
      title: "Warranty Coverage",
      content: [
        "All workmanship is covered by our 10-year warranty.",
        "Material warranties are provided by manufacturers and vary by product.",
        "Warranty coverage requires proper maintenance and normal use.",
        "Damage due to extreme weather or accidents is not covered under warranty."
      ]
    },
    {
      title: "Liability and Insurance",
      content: [
        "ESA Glazing maintains full liability insurance for all projects.",
        "Our liability is limited to the cost of repair or replacement of defective work.",
        "We are not responsible for damage to personal property not related to our work.",
        "Customers are responsible for providing safe access to work areas."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Deposit may be required for large projects or custom orders.",
        "Final payment is due upon completion of work.",
        "We accept cash, check, and major credit cards.",
        "Late payment fees may apply for overdue accounts."
      ]
    },
    {
      title: "Cancellation Policy",
      content: [
        "Projects may be cancelled up to 48 hours before scheduled start.",
        "Custom orders cannot be cancelled once materials are ordered.",
        "Cancellation fees may apply depending on project status.",
        "Deposits for cancelled projects are subject to material and administrative costs."
      ]
    },
    {
      title: "Safety and Access",
      content: [
        "Customers must provide safe and clear access to work areas.",
        "All safety regulations and building codes will be followed.",
        "Work areas may be temporarily inaccessible during installation.",
        "Customers are responsible for securing pets and valuables during work."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These terms and conditions govern the glazing services provided by ESA Glazing. 
              Please read them carefully before engaging our services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: September 2024
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              {/* Important Notice */}
              <Card className="bg-destructive/5 border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-xl text-destructive">Important Notice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These terms constitute a legal agreement between you and ESA Glazing. 
                    If you do not agree to these terms, please do not engage our services. 
                    For questions about these terms, please contact us before proceeding with any work.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Questions About Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>ESA Glazing</strong></p>
                    <p>123 Glazing Street, Business District</p>
                    <p>City, State 12345</p>
                    <p>Email: info@esaglazing.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
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