import logo from "@/assets/tracecycle-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <img src={logo} alt="Tracecycle" className="h-16 w-auto" />
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Transform Waste Management with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Complete Traceability
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We optimize the quality, traceability, and predictability of recycling raw material supply chains.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-strong border border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                  <div>
                    <h3 className="font-semibold">Waste Quality Meets Requirements</h3>
                    <p className="text-sm text-muted-foreground">Before batch leaves the supplier gate</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                  <div>
                    <h3 className="font-semibold">Shipment Data in Real Time</h3>
                    <p className="text-sm text-muted-foreground">Full picture of your total supply chain</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                  <div>
                    <h3 className="font-semibold">Data is always Verified</h3>
                    <p className="text-sm text-muted-foreground">CoC and audit-trails helps with reporting and certification</p>
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