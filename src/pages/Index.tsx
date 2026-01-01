import Header from "@/components/Header";
import ThumbnailCard from "@/components/ThumbnailCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import thumbnail1 from "@/assets/thumbnail-1.jpg";
import thumbnail2 from "@/assets/thumbnail-2.jpg";
import thumbnail3 from "@/assets/thumbnail-3.jpg";
import thumbnail4 from "@/assets/thumbnail-4.jpg";
import thumbnail5 from "@/assets/thumbnail-5.jpg";
import thumbnail6 from "@/assets/thumbnail-6.jpg";

const thumbnails = [
  { image: thumbnail1, title: "Tech Review", category: "Tech", price: 75 },
  { image: thumbnail2, title: "Gaming Highlight", category: "Gaming", price: 85 },
  { image: thumbnail3, title: "Lifestyle Vlog", category: "Lifestyle", price: 65 },
  { image: thumbnail4, title: "Business Talk", category: "Business", price: 95 },
  { image: thumbnail5, title: "Cooking Tutorial", category: "Food", price: 70 },
  { image: thumbnail6, title: "Music Reaction", category: "Entertainment", price: 80 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b-2 border-border pb-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
              YouTube Thumbnail Designer
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Thumbnails that
              <br />
              <span className="inline-block border-b-4 border-foreground">get clicks.</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
              High-impact, scroll-stopping thumbnails designed to maximize your video's click-through rate.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="border-2 border-border bg-primary px-8 py-4 font-mono text-sm uppercase tracking-wider text-primary-foreground transition-all hover:shadow-sm"
              >
                View Work
              </a>
              <a
                href="#pricing"
                className="border-2 border-border bg-background px-8 py-4 font-mono text-sm uppercase tracking-wider text-foreground transition-all hover:bg-secondary"
              >
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 font-mono text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
              Recent Work
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of thumbnails designed for creators across various niches.
            </p>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {thumbnails.map((thumb, index) => (
              <ThumbnailCard
                key={index}
                image={thumb.image}
                title={thumb.title}
                category={thumb.category}
                price={thumb.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-y-2 border-border bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-mono text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
              Simple Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              No hidden fees. Just great thumbnails.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {/* Basic */}
            <div className="border-2 border-border bg-background p-8 transition-all hover:shadow-sm">
              <h3 className="mb-2 font-mono text-lg uppercase tracking-wider text-foreground">
                Basic
              </h3>
              <p className="mb-6 text-4xl font-bold text-foreground">$65</p>
              <ul className="mb-8 space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-foreground">—</span> 1 Thumbnail
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground">—</span> 2 Revisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground">—</span> 48h Delivery
                </li>
              </ul>
              <a
                href="#contact"
                className="block border-2 border-border bg-secondary py-3 text-center font-mono text-sm uppercase tracking-wider text-foreground transition-all hover:bg-accent"
              >
                Get Started
              </a>
            </div>

            {/* Pro */}
            <div className="border-2 border-foreground bg-primary p-8 shadow-md">
              <h3 className="mb-2 font-mono text-lg uppercase tracking-wider text-primary-foreground">
                Pro
              </h3>
              <p className="mb-6 text-4xl font-bold text-primary-foreground">$85</p>
              <ul className="mb-8 space-y-3 text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="text-primary-foreground">—</span> 1 Thumbnail
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-foreground">—</span> Unlimited Revisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-foreground">—</span> 24h Delivery
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-foreground">—</span> A/B Variant
                </li>
              </ul>
              <a
                href="#contact"
                className="block border-2 border-primary-foreground bg-primary-foreground py-3 text-center font-mono text-sm uppercase tracking-wider text-primary transition-all hover:bg-transparent hover:text-primary-foreground"
              >
                Most Popular
              </a>
            </div>

            {/* Bundle */}
            <div className="border-2 border-border bg-background p-8 transition-all hover:shadow-sm">
              <h3 className="mb-2 font-mono text-lg uppercase tracking-wider text-foreground">
                Bundle
              </h3>
              <p className="mb-6 text-4xl font-bold text-foreground">$200</p>
              <ul className="mb-8 space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-foreground">—</span> 3 Thumbnails
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground">—</span> Unlimited Revisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground">—</span> 48h Delivery
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-foreground">—</span> Brand Consistency
                </li>
              </ul>
              <a
                href="#contact"
                className="block border-2 border-border bg-secondary py-3 text-center font-mono text-sm uppercase tracking-wider text-foreground transition-all hover:bg-accent"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
