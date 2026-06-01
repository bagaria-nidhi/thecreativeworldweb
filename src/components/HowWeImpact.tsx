import { Palette, Music, Theater, BookOpen, Wand2, Users } from "lucide-react";

const methods = [
  {
    icon: Theater,
    title: "Interactive Storytelling",
    description: "Children become part of the story through role-play and dramatic expression.",
    color: "bg-gradient-pink"
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description: "Drawing, painting, and crafting bring stories to visual life.",
    color: "bg-gradient-blue"
  },
  {
    icon: Music,
    title: "Music & Movement",
    description: "Songs, dance, and rhythm enhance story engagement and memory.",
    color: "bg-gradient-green"
  },
  {
    icon: BookOpen,
    title: "Reading Sessions",
    description: "Curated stories read aloud with expression and imagination.",
    color: "bg-gradient-pink"
  },
  {
    icon: Wand2,
    title: "Story Creation",
    description: "Children create their own tales, becoming authors of their imagination.",
    color: "bg-gradient-blue"
  },
  {
    icon: Users,
    title: "Group Activities",
    description: "Collaborative projects that build teamwork through shared storytelling.",
    color: "bg-gradient-green"
  }
];

const HowWeImpact = () => {
  return (
    <section id="how-we-impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-kids-yellow/10 text-kids-yellow px-4 py-2 rounded-full text-sm font-medium">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-kids-navy">
            How We Create Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Through diverse creative methods, we bring stories to life and make learning an adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {methods.map((method, index) => (
            <div 
              key={index}
              className={`${method.color} rounded-3xl p-8 text-white space-y-4 hover:scale-105 transition-all`}
            >
              <method.icon className="h-10 w-10" />
              <h3 className="text-xl font-bold">{method.title}</h3>
              <p className="text-white/90 leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeImpact;
