import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Users, Calendar, Handshake, Presentation } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Storytelling Classes",
    description: "Weekly sessions for different age groups focusing on creative expression.",
    badge: "Popular"
  },
  {
    icon: Building2,
    title: "School Programs",
    description: "Bringing storytelling magic to schools with customized curriculum support.",
    badge: null
  },
  {
    icon: Users,
    title: "Birthday Parties",
    description: "Themed storytelling celebrations that make birthdays unforgettable.",
    badge: null
  },
  {
    icon: Calendar,
    title: "Holiday Camps",
    description: "Immersive storytelling camps during school breaks and holidays.",
    badge: "Seasonal"
  },
  {
    icon: Handshake,
    title: "Corporate Events",
    description: "Team-building workshops using storytelling for corporate groups.",
    badge: null
  },
  {
    icon: Presentation,
    title: "Teacher Training",
    description: "Workshops for educators to integrate storytelling in their teaching.",
    badge: null
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-kids-yellow/10 text-kids-yellow px-4 py-2 rounded-full text-sm font-medium">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-kids-navy">
            Services & Collaboration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From classes to partnerships, we bring storytelling magic to every setting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 space-y-4 shadow-lg hover:shadow-storytelling transition-all relative group"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 bg-kids-pink text-white text-xs px-3 py-1 rounded-full font-medium">
                  {service.badge}
                </span>
              )}
              <div className="w-14 h-14 bg-kids-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-hero transition-all">
                <service.icon className="h-7 w-7 text-kids-blue group-hover:text-white transition-all" />
              </div>
              <h3 className="text-xl font-bold text-kids-navy">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="playful" size="lg">
            Explore Collaboration
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
