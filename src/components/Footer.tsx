const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Melvin Edlund. All rights reserved.
          </p>
          <p className="font-mono text-xs">
            Built with <span className="text-primary">passion</span> for code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
