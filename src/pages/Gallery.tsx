import Header from "@/components/Header";
import Footer from "@/components/Footer";
import outdoorLearning from "@/assets/outdoor-learning.jpeg";
import communityStorytellingImage from "@/assets/gallery-community-storytelling.jpeg";
import costumePlayImage from "@/assets/gallery-costume-play.jpeg";
import readingSpaceImage from "@/assets/gallery-reading-space.jpeg";
import storyCircleImage from "@/assets/gallery-story-circle.jpeg";
import creativeSpaces from "@/assets/creative-spaces.jpeg"

const galleryItems = [
  {
    title: "Creative Spaces",
    description: "Bright, welcoming rooms designed for stories, imagination, and joyful learning.",
    image: creativeSpaces,
    alt: "A colorful reading and storytelling space"
  },
  {
    title: "Outdoor Learning",
    description: "Children explore ideas through movement, conversation, and shared discovery.",
    image: outdoorLearning,
    alt: "Children participating in a movement activity"
  },
 
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-kids-navy">Gallery</h1>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Explore our wonderful moments and happy memories
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {galleryItems.map((item) => (
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

export default Gallery;
