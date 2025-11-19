import { Factory, Users, FileCheck } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, seamless integration into your existing operations
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-strong">
                <Factory className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-accent/50"></div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Capture Data</h3>
            <p className="text-muted-foreground leading-relaxed">Batch based data captured from reliable source (e.g. CoA) for every shipment</p>
          </div>
          
          <div className="relative text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-strong">
                <Users className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-accent/50"></div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Waste Management / Recipient</h3>
            <p className="text-muted-foreground leading-relaxed">Data enables seamless collaboration between parties and real-time business control.</p>
          </div>
          
          <div className="relative text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-strong">
                <FileCheck className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Data as Enabler</h3>
            <p className="text-muted-foreground leading-relaxed">Reliable data (CoC and Audit-Trail) makes reporting and certification smooth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};