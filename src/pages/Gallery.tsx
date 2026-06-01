import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-storytelling transition-all hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=500&h=300&fit=crop" 
                  alt="Children learning outdoors"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-all"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kids-navy">Outdoor Learning</h3>
                  <p className="text-muted-foreground">Children enjoying nature-based activities</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-storytelling transition-all hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=300&fit=crop" 
                  alt="Creative learning environment"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-all"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kids-navy">Creative Spaces</h3>
                  <p className="text-muted-foreground">Inspiring learning environments</p>
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

export default Gallery;