import { Gamepad2, Monitor, Heart, Briefcase, UtensilsCrossed, Music } from "lucide-react";

const categories = [
  { name: "Tech", icon: Monitor },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Lifestyle", icon: Heart },
  { name: "Business", icon: Briefcase },
  { name: "Food", icon: UtensilsCrossed },
  { name: "Entertainment", icon: Music },
];

interface CategoryIconsProps {
  onCategoryClick?: (category: string) => void;
  activeCategory?: string | null;
}

const CategoryIcons = ({ onCategoryClick, activeCategory }: CategoryIconsProps) => {
  return (
    <section className="border-b-2 border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => onCategoryClick?.(name)}
              className={`group flex flex-col items-center gap-2 transition-all ${
                activeCategory === name ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center border-2 transition-all md:h-16 md:w-16 ${
                  activeCategory === name
                    ? "border-foreground bg-primary text-primary-foreground"
                    : "border-border bg-background group-hover:border-foreground"
                }`}
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryIcons;
