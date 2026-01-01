const Footer = () => {
  return (
    <footer className="border-t-2 border-border bg-background py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-sm text-muted-foreground">
            © 2025 THUMBNAIL.STUDIO. All rights reserved.
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
