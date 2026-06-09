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
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 bg-kids-cream rounded-3xl p-8 shadow-storytelling">
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
