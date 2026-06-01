import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import StorytellingImpact from "@/components/StorytellingImpact";
import HowWeImpact from "@/components/HowWeImpact";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import EventsConnect from "@/components/EventsConnect";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <StorytellingImpact />
      <HowWeImpact />
      <Services />
      <Team />
      <Testimonials />
      <EventsConnect />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
