import { Factory, Truck, CheckCircle2 } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
            The Quality Bridge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Bridging the gap between Waste Management and Industrial Recycling.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          <div className="relative text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center shadow-sm">
                <Factory className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">1. WM Analysis</h3>
            <p className="text-muted-foreground text-lg">
              We capture sensor data during the sorting and pre-processing stage to define the technical quality of the waste batch.
            </p>
          </div>
          
          <div className="relative text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center shadow-sm">
                <Truck className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">2. Digital Handover</h3>
            <p className="text-muted-foreground text-lg">
              The batch moves with a Digital Material Card. The recycler knows exactly what is arriving before the truck even reaches the gate.
            </p>
          </div>
          
          <div className="relative text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center shadow-sm">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">3. Optimized Output</h3>
            <p className="text-muted-foreground text-lg">
              Recyclers use the batch data to optimize their process, maximizing yield and ensuring the final polymer meets high-end industrial specs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
