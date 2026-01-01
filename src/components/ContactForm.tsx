import { useState } from "react";
import { toast } from "sonner";
import { Mail, Send, Twitter, Instagram } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="border-t-2 border-border bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-mono text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
            Let's Work Together
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Ready to boost your click-through rate? Send me a message and let's create something amazing.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-sm uppercase tracking-wider text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full border-2 border-border bg-background px-4 py-3 font-sans text-foreground outline-none transition-shadow focus:shadow-xs"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-sm uppercase tracking-wider text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full border-2 border-border bg-background px-4 py-3 font-sans text-foreground outline-none transition-shadow focus:shadow-xs"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-sm uppercase tracking-wider text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full resize-none border-2 border-border bg-background px-4 py-3 font-sans text-foreground outline-none transition-shadow focus:shadow-xs"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 border-2 border-border bg-primary px-6 py-4 font-mono text-sm uppercase tracking-wider text-primary-foreground transition-all hover:shadow-sm disabled:opacity-50"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center gap-6 border-t-2 border-border pt-12">
            <a
              href="mailto:hello@thumbnail.studio"
              className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={18} />
              <span>hello@thumbnail.studio</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
