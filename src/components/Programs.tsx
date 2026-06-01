import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, BookOpen, Clock, Star, ArrowRight } from "lucide-react";

const programs = [
  {
    id: "children",
    title: "Early Education",
    description: "Children will better pre-reading skills, math, concepts, and science.",
    icon: "🦕",
    ageRange: "2-3 Years",
    gradient: "gradient-pink",
    bgColor: "bg-gradient-pink"
  },
  {
    id: "adults",
    title: "ABC Program",
    description: "Children with better pre-reading skills, math, concepts, and science.",
    icon: "🦖",
    ageRange: "3-4 Years",
    gradient: "gradient-blue",
    bgColor: "bg-gradient-blue"
  },
  {
    id: "teachers",
    title: "First Steps 4K",
    description: "Children with better pre-reading skills, math concepts, and more.",
    icon: "🦕",
    ageRange: "4-5 Years",
    gradient: "gradient-green",
    bgColor: "bg-gradient-green"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kids-navy">
            Discover Our
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-kids-navy">
            Educational Programs
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className={`${program.bgColor} rounded-3xl p-8 text-center space-y-6 hover:scale-105 transition-all shadow-lg hover:shadow-xl`}
            >
              <div className="text-7xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {program.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {program.description}
              </p>
              <div className="text-white/80 text-sm font-medium mb-6">
                Age: {program.ageRange}
              </div>
              <Button 
                variant="outline" 
                className="bg-white/20 text-white border-white/40 hover:bg-white hover:text-kids-navy rounded-full font-semibold backdrop-blur-sm"
              >
                Read More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;