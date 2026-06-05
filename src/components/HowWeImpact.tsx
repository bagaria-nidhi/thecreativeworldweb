import creativeArtsImage from "@/assets/creative-arts-rock-painting.jpeg";
import musicDance from "@/assets/music-dance.jpeg"
import interactiveStoryTelling from "@/assets/interactive-story-telling.jpeg"
import groupActivities from "@/assets/group-activities.jpeg"
import storyReading from "@/assets/story-reading.jpeg"
import storyCreation from "@/assets/story-creation.jpeg"

const methods = [
  {
    title: "Interactive Storytelling",
    description: "Children become part of the story through role-play and dramatic expression.",
    color: "bg-kids-navy/50",
    image:interactiveStoryTelling
  },
  {
    title: "Creative Arts",
    description: "Drawing, painting, and crafting bring stories to visual life.",
    color: "bg-kids-yellow/50",
    image: creativeArtsImage
  },
  {
    title: "Music & Movement",
    description: "Songs, dance, and rhythm enhance story engagement and memory.",
    color: "bg-kids-pink",
    image: musicDance
  },
  {
    title: "Reading Sessions",
    description: "Curated stories read aloud with expression and imagination.",
    color: "bg-kids-green",
    image: storyReading
  },
  {
    title: "Story Creation",
    description: "Children create their own tales, becoming authors of their imagination.",
    color: "bg-kids-blue",
    image: storyCreation
  },
  {
    title: "Group Activities",
    description: "Collaborative projects that build teamwork through shared storytelling.",
    color: "bg-kids-red/30",
    image:groupActivities
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
              className={`${method.color} ${
                method.image ? "md:col-span-2 lg:col-span-1" : ""
              } rounded-3xl overflow-hidden text-white hover:scale-[1.02] transition-all`}
            >
              {method.image ? (
                <div className="h-full">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-white/10">
                    <img
                      src={method.image}
                      alt="Painted stones created during a Creative Arts activity"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-bold">{method.title}</h3>
                    <p className="text-white/90 leading-relaxed">{method.description}</p>
                  </div>
                </div>
              ) : (
                <div className="p-8 space-y-4 h-full">
                  <h3 className="text-xl font-bold">{method.title}</h3>
                  <p className="text-white/90 leading-relaxed">{method.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeImpact;
