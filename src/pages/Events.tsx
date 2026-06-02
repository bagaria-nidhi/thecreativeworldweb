import Header from "@/components/Header";
import Footer from "@/components/Footer";
import communityGatheringImage from "@/assets/events-community-gathering.jpeg";
import dressUpDayImage from "@/assets/events-dress-up-day.jpeg";
import festivalStageImage from "@/assets/events-festival-stage.jpeg";
import kalaGhodaImage from "@/assets/events-kala-ghoda.jpeg";
import storyPerformanceImage from "@/assets/events-story-performance.jpeg";
import tinyTalesTownImage from "@/assets/events-tiny-tales-town.jpeg";

const eventItems = [
  // {
  //   title: "Kala Ghoda Arts Festival",
  //   description: "Storytelling performances for young audiences at a celebrated cultural festival.",
  //   image: kalaGhodaImage,
  //   alt: "Kala Ghoda Arts Festival storytelling poster"
  // },
  // {
  //   title: "Tiny Tales Town",
  //   description: "Festival storytelling sessions that invite children to listen, imagine, and respond.",
  //   image: tinyTalesTownImage,
  //   alt: "Storytelling session at Tiny Tales Town"
  // },
  {
    title: "Community Gatherings",
    description: "Families coming together for shared celebrations and story-rich experiences.",
    image: communityGatheringImage,
    alt: "Families gathered for a storytelling event"
  },
  {
    title: "Special Events",
    description: "Children and facilitators bringing stories alive in front of an audience.",
    image: kalaGhodaImage,
    alt: "A facilitator leading a stage storytelling event"
  },
  // {
  //   title: "Dress-Up Days",
  //   description: "Theme-based celebrations that build expression, confidence, and joy.",
  //   image: dressUpDayImage,
  //   alt: "Children dressed up for a themed event"
  // },
  // {
  //   title: "Story Performances",
  //   description: "Playful sessions where children participate through sound, movement, and narration.",
  //   image: storyPerformanceImage,
  //   alt: "Children attending an interactive story performance"
  // }
];

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-kids-navy">Events</h1>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Join us for special events and community gatherings
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eventItems.map((item) => (
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

export default Events;
