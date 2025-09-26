import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, Phone, Mail } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      category: "General Services",
      questions: [
        {
          question: "What types of glazing services do you offer?",
          answer: "We offer comprehensive glazing services including residential window installation, commercial glazing solutions, emergency glass repair, custom glass work, energy-efficient upgrades, and safety glass installations. We handle both new installations and replacements for homes and businesses."
        },
        {
          question: "Do you provide free estimates?",
          answer: "Yes, we provide free, no-obligation estimates for all our services. Our experts will visit your property, assess your needs, take measurements, and provide a detailed quote. Estimates are valid for 30 days and include all materials and labor."
        },
        {
          question: "How long does a typical installation take?",
          answer: "Installation time varies by project size and complexity. Residential window replacements typically take 1-3 days, while commercial projects can range from 2-8 weeks. We provide detailed timelines during the estimate process and keep you updated throughout the project."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "What factors affect the cost of glazing services?",
          answer: "Costs vary based on window size, glass type, frame material, installation complexity, and project location. Energy-efficient and specialty glass options may cost more initially but provide long-term savings. We provide transparent pricing with no hidden fees."
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we offer various financing options to make your glazing project more affordable. We work with several financing partners to provide competitive rates and flexible payment terms. Contact us to discuss available options for your project."
        },
        {
          question: "When is payment due?",
          answer: "For smaller projects, payment is due upon completion. Larger projects may require a deposit to secure materials and scheduling, with final payment due upon completion. We accept cash, checks, and all major credit cards."
        }
      ]
    },
    {
      category: "Warranty & Maintenance", 
      questions: [
        {
          question: "What warranty do you provide?",
          answer: "We provide a comprehensive 10-year warranty on all workmanship, covering installation defects, seal failures, and hardware issues. Material warranties vary by manufacturer but typically range from 10-25 years. All warranty details are included in your service agreement."
        },
        {
          question: "How do I maintain my new windows?",
          answer: "Regular cleaning with appropriate solutions, annual inspections, and prompt attention to small issues will help maintain your windows. We provide detailed maintenance guidelines after installation and offer annual maintenance services to keep your warranty valid."
        },
        {
          question: "What if I have a problem after installation?",
          answer: "Contact our warranty department immediately. We offer 24/7 support for urgent issues and will schedule a free assessment to determine if the problem is covered under warranty. Our goal is complete customer satisfaction."
        }
      ]
    },
    {
      category: "Emergency Services",
      questions: [
        {
          question: "Do you offer 24/7 emergency glass repair?",
          answer: "Yes, we provide 24/7 emergency glass repair services for urgent situations like break-ins, storm damage, or accidents. Our emergency team responds within 2-4 hours and can provide temporary boarding until permanent repairs are completed."
        },
        {
          question: "How quickly can you respond to emergencies?",
          answer: "Our emergency response team typically arrives within 2-4 hours of your call. For safety situations, we prioritize immediate temporary solutions to secure your property, followed by permanent repairs as soon as materials are available."
        },
        {
          question: "Do emergency services cost more?",
          answer: "Emergency calls include a service fee of $150 plus materials and labor. While emergency services may cost slightly more due to after-hours response, we keep pricing fair and transparent. Insurance often covers emergency glass repairs."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our glazing services, pricing, and policies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem 
                      key={questionIndex} 
                      value={`${categoryIndex}-${questionIndex}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still have questions section */}
        <Card className="max-w-2xl mx-auto mt-12 bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help with any questions about our glazing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="flex items-center gap-2" data-testid="button-call-support">
                <Phone className="w-4 h-4" />
                Call Us: (555) 123-4567
              </Button>
              <Button variant="outline" className="flex items-center gap-2" data-testid="button-email-support">
                <Mail className="w-4 h-4" />
                Email: info@esaglazing.com
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}