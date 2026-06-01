import { Heart, Users2, Target, Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block bg-kids-yellow/10 text-kids-yellow px-4 py-2 rounded-full text-sm font-medium">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-kids-navy">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Creative World is a nurturing space where imagination meets education, 
              and every child discovers the magic of storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Our Mission",
                description: "To inspire creativity, imbibe the joy of reading, and foster a love for stories in every child we meet.",
                color: "kids-pink"
              },
              {
                icon: Target,
                title: "Our Vision",
                description: "Creating a world where every child's imagination is celebrated and nurtured.",
                color: "kids-blue"
              },
              {
                icon: Users2,
                title: "Our Community",
                description: "A welcoming family of storytellers, educators, parents, and curious young minds.",
                color: "kids-green"
              },
              {
                icon: Sparkles,
                title: "Our Promise",
                description: "Every session brings joy, learning, vocabulary building, and enhancing confidence in expression.",
                color: "kids-yellow"
              }
            ].map((item, index) => (
            <div 
                key={index}
                className="bg-kids-cream rounded-3xl p-6 text-center space-y-4 hover:shadow-storytelling transition-all border border-kids-pink/20"
              >
                <div className={`w-16 h-16 bg-${item.color}/20 rounded-full flex items-center justify-center mx-auto`}>
                  <item.icon className={`h-8 w-8 text-${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-kids-navy">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
