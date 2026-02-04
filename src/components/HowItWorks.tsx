import { RefreshCcw, AlertTriangle, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">Management by Exception</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Automation handles the routine. You handle the deviations.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 space-y-6">
            <div className="flex items-center gap-4 text-blue-700">
              <CheckCircle className="h-10 w-10" />
              <h3 className="text-2xl font-bold uppercase tracking-wide">The Smooth Flow</h3>
            </div>
            <p className="text-blue-900/80 text-lg leading-relaxed font-medium">
              As long as feedstock quality and process parameters stay within pre-set thresholds, Tracecycle manages mass balance, reporting, and ERP-approval triggers autonomously. **Zero human touch required.**
            </p>
          </div>
          <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100 space-y-6 text-orange-900">
            <div className="flex items-center gap-4 text-orange-700">
              <AlertTriangle className="h-10 w-10" />
              <h3 className="text-2xl font-bold uppercase tracking-wide">The Exception</h3>
            </div>
            <p className="text-orange-900/80 text-lg leading-relaxed font-medium">
              When a deviation is detected (e.g. high impurities or yield loss), Tracecycle flags the batch and provides the data. As an expert, you decide the next step: **reject, re-route, or adjust settlement.**
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
