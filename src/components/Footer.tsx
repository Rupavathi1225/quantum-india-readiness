const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">
              India's Quantum Readiness Study 2025
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              A national academic research initiative exploring quantum computing awareness, adoption, and career potential across Indian universities.
            </p>
            <div className="pt-6 text-sm text-muted-foreground">
              <p>© 2025 Quantum Readiness Research Initiative. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
