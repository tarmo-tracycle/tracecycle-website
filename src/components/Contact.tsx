import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Get Started Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us to learn more about Tracecycle
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-foreground">Email</div>
                  <div className="text-muted-foreground">info@tracecycle.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-foreground">Phone</div>
                  <div className="text-muted-foreground">+358 (0) 40 841 1125</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-foreground">Office</div>
                  <div className="text-muted-foreground">Espoo, Finland</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};