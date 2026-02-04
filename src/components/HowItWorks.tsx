import { Cpu, Drill, ShieldCheck } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Seamless industrial integration. No new software for operators to learn.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          <div className="relative text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-xl shadow-primary/20">
                <Drill className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <div className="hidden md:block absolute top-12 left-[65%] w-[70%] h-[2px] bg-border"></div>
            <h3 className="text-2xl font-bold text-foreground">1. Integrate</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tracecycle connects as a passive node to your existing SCADA or PLC network. We capture 1Hz sensor data without affecting your process control.
            </p>
          </div>
          
          <div className="relative text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-xl shadow-primary/20">
                <Cpu className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <div className="hidden md:block absolute top-12 left-[65%] w-[70%] h-[2px] bg-border"></div>
            <h3 className="text-2xl font-bold text-foreground">2. Correlate</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our engine automatically matches feedstock source data with real-time production parameters to predict yield and technical quality.
            </p>
          </div>
          
          <div className="relative text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-xl shadow-primary/20">
                <ShieldCheck className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">3. Automate</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Digital Material Cards and Audit-Ready Mass Balance reports are generated automatically. Your batch is released the moment production ends.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
