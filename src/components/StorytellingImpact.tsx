import { BookOpen, Brain, MessageCircle, Lightbulb, Heart, Users } from "lucide-react";

const impacts = [
  {
    icon: Brain,
    title: "Cognitive Development",
    description: "Stories enhance memory, critical thinking, and problem-solving skills in young minds."
  },
  {
    icon: MessageCircle,
    title: "Language Skills",
    description: "Storytelling builds vocabulary, comprehension, and communication abilities naturally."
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Children learn empathy, emotions, and social understanding through story characters."
  },
  {
    icon: Lightbulb,
    title: "Creativity & Imagination",
    description: "Every story opens new worlds and sparks limitless creative possibilities."
  },
  {
    icon: Users,
    title: "Social Bonding",
    description: "Shared stories create connections between children, families, and communities."
  },
  {
    icon: BookOpen,
    title: "Love for Learning",
    description: "Stories make learning fun and instill a lifelong passion for reading and discovery."
  }
];

const StorytellingImpact = () => {
  return (
    <section id="storytelling-impact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-kids-yellow/10 text-kids-yellow px-4 py-2 rounded-full text-sm font-medium">
            The Power of Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-kids-navy">
            Impact of Storytelling
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stories are more than entertainment — they shape minds, build character, and create lasting memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 space-y-4 shadow-lg hover:shadow-storytelling transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center">
                <impact.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-kids-navy">{impact.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorytellingImpact;
