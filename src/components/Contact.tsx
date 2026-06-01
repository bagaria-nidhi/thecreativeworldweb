import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kids-navy">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your learning journey? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="border-0 shadow-storytelling rounded-3xl">
            <CardContent className="p-8 space-y-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-kids-navy">Name</label>
                  <Input placeholder="Your full name" className="rounded-xl border-border" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-kids-navy">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="rounded-xl border-border" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-kids-navy">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="rounded-xl border-border" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-kids-navy">Message</label>
                  <Textarea 
                    placeholder="Tell us about your interest..." 
                    rows={5}
                    className="rounded-xl border-border resize-none"
                  />
                </div>
                
                <Button variant="playful" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-kids-navy">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have questions about our programs or want to schedule a visit, we're here to help.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-kids-blue/10 rounded-full flex-shrink-0">
                  <Phone className="h-5 w-5 text-kids-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-kids-navy mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 98922 19417</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-kids-pink/10 rounded-full flex-shrink-0">
                  <Mail className="h-5 w-5 text-kids-pink" />
                </div>
                <div>
                  <h4 className="font-semibold text-kids-navy mb-1">Email</h4>
                  <p className="text-muted-foreground">bagarianidhi02@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-kids-yellow/10 rounded-full flex-shrink-0">
                  <MapPin className="h-5 w-5 text-kids-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold text-kids-navy mb-1">Location</h4>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;