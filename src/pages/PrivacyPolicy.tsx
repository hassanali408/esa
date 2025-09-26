import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and address when you contact us or request services.",
        "Project Information: Details about your glazing needs, property information, and project specifications.",
        "Communication Records: Records of our interactions including emails, phone calls, and service appointments.",
        "Website Usage: Information about how you use our website, including pages visited and time spent."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide glazing services and customer support",
        "Communicate about your projects and appointments",
        "Send quotes, estimates, and service updates",
        "Improve our services and customer experience",
        "Comply with legal obligations and safety requirements"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist in our operations.",
        "We may disclose information when required by law or to protect our rights and safety.",
        "Information may be shared with insurance companies for warranty and claim purposes."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate security measures to protect your personal information.",
        "All data transmission is encrypted using industry-standard protocols.",
        "Access to personal information is restricted to authorized personnel only.",
        "We regularly review and update our security practices."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access: You can request a copy of the personal information we hold about you.",
        "Correction: You can request correction of inaccurate or incomplete information.",
        "Deletion: You can request deletion of your personal information, subject to legal requirements.",
        "Opt-out: You can unsubscribe from marketing communications at any time."
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use cookies to improve website functionality and user experience.",
        "Essential cookies are necessary for basic website operation.",
        "Analytics cookies help us understand how visitors use our website.",
        "You can control cookie settings through your browser preferences."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At ESA Glazing, we are committed to protecting your privacy and personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: September 2024
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
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

              {/* Contact Information */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Us About Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>ESA Glazing</strong></p>
                    <p>123 Glazing Street, Business District</p>
                    <p>City, State 12345</p>
                    <p>Email: privacy@esaglazing.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              {/* Updates Notice */}
              <Card className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Policy Updates</h3>
                  <p className="text-muted-foreground text-sm">
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes 
                    by posting the new policy on our website and updating the &quot;Last updated&quot; date.
                  </p>
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