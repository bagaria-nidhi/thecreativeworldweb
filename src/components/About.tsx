import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users2, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/about-storytelling.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Stories",
    description: "We believe every person has a unique story worth telling and sharing with the world."
  },
  {
    icon: Users2,
    title: "Inclusive Community",
    description: "Our welcoming environment celebrates diverse voices and backgrounds in storytelling."
  },
  {
    icon: Lightbulb,
    title: "Creative Growth",
    description: "We nurture imagination and creativity through innovative teaching methods and activities."
  },
  {
    icon: Award,
    title: "Excellence in Education",
    description: "Our experienced instructors bring professional expertise and genuine care to every session."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-kids-yellow/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-storytelling">
              <img
                src={aboutImage}
                alt="Storytelling session with children"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-kids-pink/20 rounded-full blur-2xl"></div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-kids-navy leading-tight">
                Why Early
                <span className="block">Education Matters</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Look into the eyes of a young child and see the sparkle and wonder. Develop these passions and watch the adult bloom into someone special. At Littledino Center, we work every day to build the foundations for amazing values.
              </p>
            </div>
            
            <Button variant="playful" size="lg" className="text-base px-8">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;