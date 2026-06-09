import { Button } from "@/components/ui/button";
import { Clock, MapPin, MessageCircle, Users } from "lucide-react";

const whatsappLink =
  "https://wa.me/919892219417?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20The%20Creative%20World%20classes.";

const weeklyClasses = [
  {
    day: "Monday",
    time: "5:00 PM - 6:00 PM",
    location: "Podar Prep, Tilak Nagar, Chembur",
    programs: [
      { name: "Storytelling", ageGroup: "2 to 5 yrs" },
      { name: "Roots - Culturenama (Storytelling & Drama)", ageGroup: "6 to 12 yrs" }
    ],
    color: "bg-kids-pink"
  },
  {
    day: "Tuesday",
    time: "5:00 PM - 6:00 PM",
    location: "Little Oaks Preschool, Ghatkopar East",
    programs: [
      { name: "Storytelling", ageGroup: "2 to 5 yrs" }
    ],
    color: "bg-kids-blue"
  },
  {
    day: "Wednesday",
    time: "5:30 PM - 6:30 PM",
    location: "Little Oaks Preschool, Ghatkopar West",
    programs: [
      { name: "Storytelling", ageGroup: "2 to 5 yrs" }
    ],
    color: "bg-kids-green"
  },
  {
    day: "Thursday",
    time: "5:00 PM - 6:00 PM",
    location: "Basil woods Jr Preschool, Chembur",
    programs: [
      { name: "Storytelling", ageGroup: "2 to 5 yrs" }
    ],
    color: "bg-kids-yellow"
  },
  {
    day: "Friday",
    time: "5:00 PM - 6:00 PM",
    location: "PAC Preschool and MI centre, Mulund",
    programs: [
      { name: "Storytelling", ageGroup: "2 to 5 yrs" },
      { name: " Little Oaks Preschool, Vikhroli. 5:00 pm to 6:00 pm. Sessions start from July 2026", ageGroup:"2 to 5 yrs" }
    ],
    color: "bg-kids-navy/50"
  }
];

const EventsConnect = () => {
  return (
    <section id="events-connect" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-kids-yellow/10 text-kids-yellow px-4 py-2 rounded-full text-sm font-medium">
            Weekly Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-kids-navy">
            Weekly Classes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our storytelling sessions at various locations across Mumbai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-12xl mx-auto mb-12">
          {weeklyClasses.map((classItem, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-storytelling transition-all group"
            >
              <div className={`${classItem.color} p-4`}>
                <span className="text-white text-lg font-bold">{classItem.day}</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-kids-blue" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-kids-green" />
                    <span>{classItem.location}</span>
                  </div>
                </div>
                
                <div className="space-y-3 pt-2 border-t border-border">
                  {classItem.programs.map((program, pIndex) => (
                    <div key={pIndex} className="space-y-1">
                      <p className="font-semibold text-kids-navy text-sm">{program.name}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>Age: {program.ageGroup}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Begin Your Story?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our creative community and let your child discover the magic of storytelling. 
            Message us on WhatsApp to learn more about our programs.
          </p>
          <div className="flex justify-center">
            <Button asChild variant="secondary" size="lg" className="bg-white text-kids-navy hover:bg-white/90 rounded-full">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsConnect;
