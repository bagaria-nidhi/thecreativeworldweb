import Header from "@/components/Header";
import Footer from "@/components/Footer";
import creativeExpressionImage from "@/assets/creative-expression.jpeg";
import educatorSessionImage from "@/assets/workshop-educator-session.jpeg";
import interactiveDramaImage from "@/assets/workshop-interactive-drama.jpeg";
import shadowPuppetryImage from "@/assets/workshop-shadow-puppetry.jpeg";
import storytellingPropsImage from "@/assets/workshop-storytelling-props.jpeg";
import teacherTrainingImage from "@/assets/workshop-teacher-training.jpeg";

const workshopItems = [
  {
    title: "Creative Expression",
    description: "Hands-on drawing, coloring, and craft activities that extend every story.",
    image: creativeExpressionImage,
    alt: "Children working on creative drawing activities"
  },
  {
    title: "Interactive Learning",
    description: "Story-led sessions using props, puppets, questions, and playful participation.",
    image: storytellingPropsImage,
    alt: "Children listening to a storytelling session with props"
  }
];

const Workshop = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-kids-navy">Workshops</h1>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Discover our creative and engaging workshop experiences
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {workshopItems.map((item) => (
              <div key={item.title} className="group">
                <div className="h-full bg-white rounded-3xl overflow-hidden shadow-storytelling transition-all hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden bg-kids-cream">
                    <img 
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-kids-navy">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Workshop;
