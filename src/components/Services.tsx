import { CheckCircle, BarChart3, Shield, Zap } from "lucide-react";
export const Services = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose Tracecycle?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your company gains full visibility into waste-based raw material quality, transportation, and partner collaboration with real-time and reliable data - and the ability to improve reporting and certification.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">End-to-End Traceability</h3>
            <p className="text-muted-foreground leading-relaxed">Track waste from sorting point to final destination with complete Chain of Custody documentation.</p>
          </div>
          
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Real-Time Analytics</h3>
            <p className="text-muted-foreground leading-relaxed">See what is happening from live data together with KPIs like waste volumes, shipment status, and processing efficiency.</p>
          </div>
          
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Compliance Assurance</h3>
            <p className="text-muted-foreground leading-relaxed">Data supporting reporting for regulatory compliance with audit-ready documentation and certification tracking.</p>
          </div>
          
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Operational Efficiency</h3>
            <p className="text-muted-foreground leading-relaxed">Optimize material quality, reduce costs, and improve collaboration with data-driven insights.</p>
          </div>
        </div>
      </div>
    </section>;
};