import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "Suburban Hills",
      rating: 5,
      content: "ESA Glazing transformed our home with beautiful new energy-efficient windows. The team was professional, punctual, and the quality of work exceeded our expectations. Our energy bills have decreased significantly!",
      avatar: "/api/placeholder/64/64",
      initials: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Manager",
      location: "Downtown Office Complex",
      rating: 5,
      content: "We've worked with ESA Glazing on multiple commercial projects. Their expertise in large-scale glazing installations is unmatched. Always on time, within budget, and exceptional quality.",
      avatar: "/api/placeholder/64/64",
      initials: "MC"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Restaurant Owner",
      location: "City Center",
      rating: 5,
      content: "When our storefront glass was damaged in a storm, ESA Glazing responded immediately. They had us back in business within 24 hours. Outstanding emergency service and fair pricing.",
      avatar: "/api/placeholder/64/64",
      initials: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Homeowner",
      location: "Riverside Community",
      rating: 5,
      content: "The patio door installation was flawless. The integrated blinds are a game-changer, and the security features give us peace of mind. Highly recommend ESA Glazing for any glazing needs.",
      avatar: "/api/placeholder/64/64",
      initials: "DT"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Facility Manager",
      location: "Industrial Park",
      rating: 5,
      content: "ESA Glazing helped us upgrade our entire facility with energy-efficient windows. The project management was excellent, and the results have improved our working environment significantly.",
      avatar: "/api/placeholder/64/64",
      initials: "LP"
    },
    {
      id: 6,
      name: "Robert Wilson",
      role: "Homeowner",
      location: "Heritage District",
      rating: 5,
      content: "Restoring the historic windows in our century-old home required special expertise. ESA Glazing preserved the original character while improving functionality. True craftmanship!",
      avatar: "/api/placeholder/64/64",
      initials: "RW"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our glazing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover-elevate h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
                
                <div className="relative mb-6 flex-grow">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-card p-6 rounded-lg border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}