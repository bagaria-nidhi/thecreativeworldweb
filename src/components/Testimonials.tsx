import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Yashika Anand",
    role: "Mother of Aayansh Anand",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "Creative World, as the name says is full of creativity, not only stories but imagination and beyond… My son joined Creative World when he was two and thoroughly enjoyed each and every session. He is so benefitted that he started making his own stories, his vocabulary increased immensely. Also I could see positive changes in him. Getting in to a habit of reading cannot be enforced but can be encouraged, that's what Nidhi and Priyanka did in Creative World. My son could easily express himself at a very young age as his vocabulary was worked upon. Right stories with crafts and props helped him become a confident little adult.",
    rating: 5
  },
  {
    name: "Lavanya",
    role: "Mother of Shriya",
    quote: "My association with Nidhi over the past two years has helped me gain an understanding of their core values which are sync with my own- being a good human being is more important than anything else in this world. And Creative story class is a natural extension of their teaching philosophy and I had no second thoughts about making my daughter join the class. It teaches them about all that makes one a good human- compassion for all living creatures and love for nature in addition to other virtues like truthfulness and dedication. If it can be taught in a creative and fun setup, what better way to do.",
    rating: 5
  },
  {
    name: "Kshitija",
    role: "Mother of Krishaang",
    quote: "My son Krishaang has been attending Creative World classes for 3 years now and the experience has just been amazing. There's a new fun theme to look forward to every month. Then there is the idea of reinforcing those theme concepts through stories, visuals, props and activities. Krishaang is always happy to bring home the arty crafty take aways! Through Creative World, he has had a fair few opportunities for public speaking, which has been a wonderful blessing. The very fact that he looks forward to going to class week after week says it all. Creative World is the best example of multi faceted learning with many dashes of fun!",
    rating: 5
  },
  {
    name: "Farah",
    role: "Mother of Mishka",
    quote: "Creative World class is an amazing platform where kids bring out their personality to the fullest. Every month's class has unique and interesting themes where kids get exposure to new facts relating to the theme. The class has truly helped my child experience learning as fun.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-kids-yellow/10 text-kids-yellow px-4 py-2 rounded-full text-sm font-medium">
            Happy Families
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-kids-navy">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from parents, educators, and partners who've experienced our storytelling magic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-subtle rounded-3xl p-8 space-y-6 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-kids-blue/20" />
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-kids-yellow text-kids-yellow" />
                ))}
              </div>
              
              <p className="text-kids-navy leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div>
                <h4 className="font-bold text-kids-navy">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
