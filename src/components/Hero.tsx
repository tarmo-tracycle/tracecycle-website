import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-bold tracking-wide uppercase border border-green-100">
              <CheckCircle2 size={16} /> Autonomous Batch Validation
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-foreground tracking-tight">
              Automate Approvals. <br />
              <span className="text-primary text-blue-600">Zero-Touch Settlement.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              When production aligns with specs, Tracecycle manages approvals and audit trails autonomously. 
              We provide the verified "green light" your ERP needs for automated financial settlement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:tarmo@tracecycle.io?subject=Technical Sync Request"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Request Technical Brief <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/dashboard-preview.jpg" 
                alt="Tracecycle Compliance Ledger" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1000"; // Varakuva jos oma puuttuu
                }}
              />
            </div>
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
