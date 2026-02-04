export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground opacity-80">Tracecycle</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Automating quality assurance and yield optimization for the circular polymer industry.
          </p>
          <div className="pt-8 border-t border-border/50 text-sm text-muted-foreground/60">
            <p>&copy; {new Date().getFullYear()} Tracecycle. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
