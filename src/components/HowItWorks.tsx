import { Cpu, Drill, ShieldCheck } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground text-center">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">Seamless industrial integration without process interference.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex justify-center"><Drill className="h-16 w-16 text-primary" /></div>
            <h3 className="text-2xl font-bold">1. Integrate</h3>
            <p className="text-muted-foreground">Passive node connection to existing SCADA/PLC networks. 1Hz data capture.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center"><Cpu className="h-16 w-16 text-primary" /></div>
            <h3 className="text-2xl font-bold">2. Correlate</h3>
            <p className="text-muted-foreground">Automated matching of feedstock data with real-time production parameters.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center"><ShieldCheck className="h-16 w-16 text-primary" /></div>
            <h3 className="text-2xl font-bold">3. Automate</h3>
            <p className="text-muted-foreground">Digital Material Cards and PPWR reports generated the moment production ends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
