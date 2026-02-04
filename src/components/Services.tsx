import { Target, BarChart3, ShieldCheck, Cpu, Microscope } from "lucide-react";

export const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
            Bridge the Quality Gap
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tracecycle automates the technical link between Waste Management and Recycling. 
            We turn raw waste streams into verified technical feedstocks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="p-8 border border-border rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Microscope className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Technical Feedstock Profiling</h3>
            <p className="text-muted-foreground text-lg">
              Stop guessing. We generate automated quality profiles for waste batches, including purity levels and material composition, ensuring they meet recycler specifications before shipment.
            </p>
          </div>
          
          <div className="p-8 border border-border rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Real-time Batch Validation</h3>
            <p className="text-muted-foreground text-lg">
              Tracecycle monitors the processing line at the WM facility to validate that the material meets the technical threshold for high-value recycling.
            </p>
          </div>
          
          <div className="p-8 border border-border rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Verified Technical Release</h3>
            <p className="text-muted-foreground text-lg">
              The recycler gets a digital twin of the incoming material. Reduce rejection rates and optimize your extruder settings based on pre-verified batch data.
            </p>
          </div>
          
          <div className="p-8 border border-border rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Supply Chain Predictability</h3>
            <p className="text-muted-foreground text-lg">
              Connect supply with demand using data. Recyclers can forecast their output quality based on the real-time technical profile of the incoming waste stream.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
