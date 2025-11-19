import { Card } from "@/components/ui/card";
import { CheckCircle, BarChart3, Shield, Zap } from "lucide-react";
const services = [{
  icon: CheckCircle,
  title: "End-to-End Traceability",
  description: "Track waste from collection point to final destination with complete chain of custody documentation."
}, {
  icon: BarChart3,
  title: "Real-Time Analytics",
  description: "Access comprehensive dashboards with live data on waste volumes, routes, and processing efficiency."
}, {
  icon: Shield,
  title: "Compliance Assurance",
  description: "Automated reporting for regulatory compliance with audit-ready documentation and certification tracking."
}, {
  icon: Zap,
  title: "Operational Efficiency",
  description: "Optimize collection routes, reduce costs, and improve service delivery with data-driven insights."
}];
export const Services = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose Tracecycle?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your company gains full visibility into waste-based raw material quality, transportation, and partner collaboration with real-time and reliable data 
- and the ability to improve reporting and certification.                                                                                                                  
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <Card key={index} className="p-6 border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>)}
        </div>
      </div>
    </section>;
};