import { Mail, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Request Technical Integration Brief
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how to automate your technical batch release and verify material quality.
            </p>
          </div>
          
          <div className="bg-card p-10 rounded-3xl shadow-strong border border-border">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground">Contact Our Team</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Email</div>
                      <div className="text-muted-foreground">info@tracecycle.io</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">LinkedIn</div>
                      <a href="https://www.linkedin.com/company/tracecycle-software" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
                        tracecycle-software
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-8 rounded-2xl flex flex-col justify-center items-center text-center space-y-6">
                <h4 className="font-bold text-xl">Ready to automate?</h4>
                <p className="text-muted-foreground">Get our technical whitepaper on SCADA-to-Compliance integration.</p>
                <a 
                  href="mailto:tarmo@tracecycle.io?subject=Requesting Technical Integration Brief"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all inline-block"
                >
                  Request Brief
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
