import logo from "@/assets/tracecycle-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <img src={logo} alt="Tracecycle" className="h-10 w-auto mx-auto" />
          <p className="text-sm text-muted-foreground">
            We optimize the quality, traceability, and predictability of recycling raw material supply chains.
          </p>
          <div className="pt-6 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Tracecycle. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};