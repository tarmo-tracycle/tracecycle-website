import { Microscope, BarChart3, ShieldCheck, Database } from "lucide-react";

export const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Closing the Quality Gap
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tracecycle correlates supplier-claimed data with real-time process performance 
            to protect your production stability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 border border-border rounded-2xl bg-white shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Database className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Material Quality Profiling</h3>
            <p className="text-muted-foreground text-lg font-medium">
              We capture data from supplier plant integrations, machine sensors, and documents to map actual material behavior—contamination, ash content, and rheology—against your TDS.
            </p>
          </div>
          <div className="p-8 border border-border rounded-2xl bg-white shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <BarChart3 className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Yield & Performance Correlation</h3>
            <p className="text-muted-foreground text-lg font-medium">
              Track how specific material profiles perform on your line (kWh/kg, melt filter pressure, net output). Identify which sources deliver the highest industrial yield.
            </p>
          </div>
          <div className="p-8 border border-border rounded-2xl bg-white shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Microscope className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Quality Cross-Verification</h3>
            <p className="text-muted-foreground text-lg font-medium">
              Validate supplier claims against actual line performance and energy flows. Tracecycle ensures that you only accept and pay for material that meets technical specs.
            </p>
          </div>
          <div className="p-8 border border-border rounded-2xl bg-white shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Audit-Ready Compliance</h3>
            <p className="text-muted-foreground text-lg font-medium">
              Automated Mass Balance and Chain-of-Custody (CoC) data, fully aligned with PPWR technical requirements. Real-time visualization for every batch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
