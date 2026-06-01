import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-storytelling transition-all hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=300&fit=crop" 
                  alt="Creative workshop session"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-all"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kids-navy">Creative Expression</h3>
                  <p className="text-muted-foreground">Hands-on creative activities</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-storytelling transition-all hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500&h=300&fit=crop" 
                  alt="Interactive workshop"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-all"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kids-navy">Interactive Learning</h3>
                  <p className="text-muted-foreground">Engaging workshop experiences</p>
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

export default Workshop;