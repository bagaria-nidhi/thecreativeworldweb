import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-storytelling transition-all hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=300&fit=crop" 
                  alt="Special event gathering"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-all"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kids-navy">Special Events</h3>
                  <p className="text-muted-foreground">Unique learning experiences and celebrations</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-storytelling transition-all hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=300&fit=crop" 
                  alt="Community gathering"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-all"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kids-navy">Community Gatherings</h3>
                  <p className="text-muted-foreground">Bringing families together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;