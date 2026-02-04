import logo from "@/assets/tracecycle-logo.png";
import { Zap, ShieldCheck, Activity, BarChart3 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <img src={logo} alt="Tracecycle" className="h-16 w-auto" />
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground tracking-tight">
              Automate Batch Release. <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Maximize Yield.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              The invisible automation layer between your production line and customer compliance. 
              Zero manual input. 100% verified data directly from your sensors.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Schedule Technical Sync
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative bg-card rounded-3xl p-10 shadow-strong border border-border overflow-hidden group">
              {/* Background Decorative Icon */}
              <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] text-primary group-hover:scale-110 transition-transform duration-500">
                <Activity size={240} />
              </div>

              <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-10 font-black">Industrial Intelligence Layer</h3>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Direct Sensor Correlation</h4>
                    <p className="text-muted-foreground font-medium leading-snug">
                      Automate mass balance and quality tracking directly from live SCADA/PLC data streams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Digital Batch Release</h4>
                    <p className="text-muted-foreground font-medium leading-snug">
                      Generate technical material profiles and certificates before the batch even leaves the gate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <BarChart3 className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Predictive Yield Audits</h4>
                    <p className="text-muted-foreground font-medium leading-snug">
                      Audit-ready compliance for PPWR with data derived from actual energy and mass flows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
