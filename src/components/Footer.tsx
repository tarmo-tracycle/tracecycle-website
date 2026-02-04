import { Mail, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Request Technical Integration Brief
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how to automate your traceability and batch release process.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Our Technical Team</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-foreground">Email</div>
                  <div className="text-muted-foreground">tarmo@tracecycle.io</div>
                </div>
              </div>
              {/* LinkedIn ja muut pysyvät ennallaan */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
