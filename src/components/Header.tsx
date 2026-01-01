import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-border bg-background">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="font-mono text-xl font-bold uppercase tracking-wider text-foreground">
          THUMBNAIL<span className="text-muted-foreground">.STUDIO</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("work")}
            className="font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-border bg-primary px-4 py-2 font-mono text-sm uppercase tracking-wider text-primary-foreground transition-all hover:shadow-xs"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t-2 border-border bg-background p-6 md:hidden">
          <button
            onClick={() => scrollToSection("work")}
            className="font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-border bg-primary px-4 py-2 font-mono text-sm uppercase tracking-wider text-primary-foreground"
          >
            Contact
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
