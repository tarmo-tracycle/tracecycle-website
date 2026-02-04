import { Mail, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Request Technical Integration Brief
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how to automate your technical batch release process.
            </p>
          </div>
          
          <div className="bg-card p-10 rounded-3xl shadow-strong border border-border">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Our Technical Team</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">Email</div>
                  <div className="text-muted-foreground">tarmo@tracecycle.io</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">LinkedIn</div>
                  <a href="https://www.linkedin.com/company/tracecycle-software" target="_blank" className="text-primary hover:underline">tracecycle-software</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
