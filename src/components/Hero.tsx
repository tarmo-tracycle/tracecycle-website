// Muokkaus Hero.tsx tiedostoon
import logo from "@/assets/tracecycle-logo.png";
import { Zap, ShieldCheck, Activity } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <img src={logo} alt="Tracecycle" className="h-16 w-auto" />
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Accelerate Batch Release with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Automated Quality
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Eliminate technical risk and manual reporting. Tracecycle connects your production sensors directly to customer specs for real-time compliance.
            </p>
            <div className="flex gap-4">
               <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all">
                 Request Technical Sync
               </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative bg-card rounded-3xl p-8 shadow-strong border border-border overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Activity size={120} />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-bold">The Invisible Layer</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Zap className="text-primary h-6 w-6" />
                  <div>
                    <h4 className="font-bold">Zero-Touch Compliance</h4>
                    <p className="text-sm text-muted-foreground font-medium">Mass balance calculated from live SCADA data.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ShieldCheck className="text-primary h-6 w-6" />
                  <div>
                    <h4 className="font-bold">Simulation-Ready Data</h4>
                    <p className="text-sm text-muted-foreground font-medium">Digital material cards generated for R&D teams.</p>
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
