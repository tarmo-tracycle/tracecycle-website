import { BarChart3, ShieldCheck, Scale, Zap } from "lucide-react";

export const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Financial Yield Analysis
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tracecycle turns operational process data into financial certainty. 
            We ensure you pay only for the quality you actually receive.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 border border-border rounded-2xl bg-white shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Scale className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Batch-Level Correlation</h3>
            <p className="text-muted-foreground text-lg font-medium">
              We correlate incoming feedstock data with line rejects, energy consumption (kWh/kg), and filter pressure to define the "true cost" of every batch.
            </p>
          </div>
          <div className="p-8 border border-border rounded-2xl bg-white shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Zap className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">ERP-Ready Settlement</h3>
            <p className="text-muted-foreground text-lg font-medium">
              Tracecycle provides the "Technical Release" status to your ERP. When data stays within thresholds, financials flow with zero human intervention.
            </p>
          </div>
          <div className="p-8 border border-border rounded-2xl bg-white shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Supplier Performance Benchmarking</h3>
            <p className="text-muted-foreground text-lg font-medium">
              Identify which WM suppliers deliver the highest yield. Use real process data to negotiate contracts and manage EPR liabilities.
            </p>
          </div>
          <div className="p-8 border border-border rounded-2xl bg-white shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <BarChart3 className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Verified Compliance Ledger</h3>
            <p className="text-muted-foreground text-lg font-medium">
              Cross-verify mass balance and Chain-of-Custody (CoC) reports with actual energy and material flows. Audit-ready by design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
