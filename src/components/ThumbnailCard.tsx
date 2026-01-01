import { useState } from "react";

interface ThumbnailCardProps {
  image: string;
  title: string;
  category: string;
  price: number;
}

const ThumbnailCard = ({ image, title, category, price }: ThumbnailCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden border-2 border-border bg-card transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-500 ease-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        
        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-primary/90 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="mb-2 font-mono text-sm uppercase tracking-wider text-primary-foreground">
            {category}
          </span>
          <span className="text-2xl font-bold text-primary-foreground">${price}</span>
          <button className="mt-4 border-2 border-primary-foreground bg-transparent px-6 py-2 font-mono text-sm uppercase tracking-wider text-primary-foreground transition-colors duration-200 hover:bg-primary-foreground hover:text-primary">
            View Details
          </button>
        </div>
      </div>

      {/* Info Bar */}
      <div className="flex items-center justify-between border-t-2 border-border bg-secondary p-4">
        <span className="font-medium text-foreground">{title}</span>
        <span className="font-mono text-lg font-bold text-foreground">${price}</span>
      </div>
    </div>
  );
};

export default ThumbnailCard;
