import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Azmat Sahi",
      role: "Homeowner",
      location: "Suburban Hills",
      rating: 5,
      content: "I recently had windows installed by Esa Glazing Limited, and I'm extremely satisfied with their work. From start to finish, the team was professional, punctual, and very skilled. The quality of the materials and installation was top-notch. They cleaned everything up after the job and made sure I was happy with the final result. Highly recommended for anyone looking for reliable and high-quality window installation in Dagenham!",
      avatar: "/api/placeholder/64/64",
      initials: "AS"
    },
    {
      id: 2,
      name: "Murad Hussein",
      role: "Property Manager",
      location: "Downtown Office Complex",
      rating: 5,
      content: "Just recently had some windows made and fitted by this company. Very pleased with the service I received. Very polite clean and respectful. I'm going back for more work very satisfied. I have now comeback to add to my previous review. I've just had bathroom and toilet window and garden door with side window. Fitted . I'm very happy with the service. The work carried out. By this company. I've done my whole house. Now . Excellent work great people excellent service cant recommend them enough 5 stars +.",
      avatar: "/api/placeholder/64/64",
      initials: "MH"
    },
    {
      id: 3,
      name: "Jabil Miah",
      role: "Restaurant Owner",
      location: "City Center",
      rating: 5,
      content: "Excellent company and very friendly. They came out late in the evening to help me out with a door that needed adjusting and wasnt closing properly (not one they supplied). Really Good service. Not the 1st time they have helped me and always happy to recommend them to others.",
      initials: "JM"
    },
    {
      id: 4,
      name: "G Play",
      role: "Homeowner",
      location: "Riverside Community",
      rating: 5,
      content: "This company fitted a new composite door for me with an integral full-length frosted glass side panel. I could have gone with any glazing company for this work, but I'm happy I chose this one. The quality of materials used and their craftsmanship was good. I recommend this glazing company to those who wants the supply and fit of composite doors and double glazed windows. Many thanks for your help regarding this matter.",
      initials: "GP"
    },
    {
      id: 5,
      name: "Behzad Chohan",
      role: "Facility Manager",
      location: "Industrial Park",
      rating: 5,
      content: "Fantastic professional window fitters. Fitted a first floor bedroom and bathroom window. Clean, and brilliant finish. Will be using for my other windows next year.",
      avatar: "/api/placeholder/64/64",
      initials: "BC"
    },
    {
      id: 6,
      name: "Fida Hussain",
      role: "Homeowner",
      location: "Heritage District",
      rating: 5,
      content: "I'm extremely pleased with the window installation by Esa glazing limited. Their team was professional, efficient, and the quality of the windows is outstanding. I highly recommend them for anyone looking to upgrade their windows.",
      initials: "FH"
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
                    {/* <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p> */}
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
              <div className="text-2xl font-bold text-primary">5/5</div>
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