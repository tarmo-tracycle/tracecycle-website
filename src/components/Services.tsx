import { Target, BarChart3, ShieldCheck, Cpu } from "lucide-react";

export const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
            Built for Industrial Reality
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stop wasting engineering hours on manual reporting. We automate technical 
            validation directly from your production stream.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="p-8 border border-border rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Direct Sensor Integration</h3>
            <p className="text-muted-foreground text-lg">
              No manual data entry. Tracecycle connects as an invisible layer to your SCADA and PLC networks to capture real-time production parameters.
            </p>
          </div>
          
          <div className="p-8 border border-border rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Batch Performance Mapping</h3>
            <p className="text-muted-foreground text-lg">
              We correlate feedstock source data with production yields. Identify which suppliers deliver the highest output quality per kWh.
            </p>
          </div>
          
          <div className="p-8 border border-border rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Automated Technical Release</h3>
            <p className="text-muted-foreground text-lg">
              Speed up market entry. Generate digital material profiles that prove technical compliance before the material leaves the yard.
            </p>
          </div>
          
          <div className="p-8 border border-border rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Real-time Yield Audits</h3>
            <p className="text-muted-foreground text-lg">
              Always audit-ready for PPWR mass balance requirements. Our data is derived from actual energy and mass flows, not just Excel estimates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
