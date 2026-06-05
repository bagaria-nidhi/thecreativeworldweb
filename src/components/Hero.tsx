import { Button } from "@/components/ui/button";
import { Sparkles, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/about-storytelling.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-kids-blue/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-kids-pink/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="space-y-6">
          <div className="inline-block bg-kids-navy/10 text-kids-navy px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
            Welcome to
          </div>
            <h1 className="text-5xl md:text-6xl font-bold text-kids-navy leading-tight">
              <span className="text-kids-yellow font-extrabold">The Creative World</span>
              <br />
              <span className="text-3xl md:text-4xl">Where Stories Come Alive!</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We want every day to build the foundations for amazing values, both for the child and for our community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button variant="playful" size="lg" className="text-base px-8">
              Read More
            </Button> */}
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-storytelling">
            <img
              src={heroImage}
              alt="Child engaged in creative learning activity"
              className="w-full h-[500px] object-cover"
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-kids-yellow/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-kids-pink/30 rounded-full blur-xl"></div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-kids-navy rounded-3xl p-12 shadow-storytelling">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-kids-yellow">20</div>
              <div className="text-sm md:text-base text-kids-cream">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-kids-yellow">1000+</div>
              <div className="text-sm md:text-base text-kids-cream">Students Touched with Stories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-kids-yellow">50+</div>
              <div className="text-sm md:text-base text-kids-cream">Collaborations with Schools, NGOs, Colleges & Book Stores</div>
            </div>
            <div>
              <div className="text-sm md:text-base text-kids-cream">Performances at Literature & Art Festivals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;