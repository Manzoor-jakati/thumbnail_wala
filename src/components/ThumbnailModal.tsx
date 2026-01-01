import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star } from "lucide-react";

interface ThumbnailData {
  image: string;
  title: string;
  category: string;
  price: number;
}

interface ThumbnailModalProps {
  thumbnail: ThumbnailData | null;
  isOpen: boolean;
  onClose: () => void;
  allThumbnails: ThumbnailData[];
  onSelectThumbnail: (thumbnail: ThumbnailData) => void;
}

const reviews = [
  { name: "Alex M.", rating: 5, text: "Incredible work! My CTR increased by 40% after using these thumbnails." },
  { name: "Sarah K.", rating: 5, text: "Super fast delivery and the quality exceeded my expectations." },
  { name: "Mike R.", rating: 4, text: "Great communication and professional results. Highly recommend!" },
];

const ThumbnailModal = ({ thumbnail, isOpen, onClose, allThumbnails, onSelectThumbnail }: ThumbnailModalProps) => {
  if (!thumbnail) return null;

  const similarThumbnails = allThumbnails.filter(
    (t) => t.category === thumbnail.category && t.title !== thumbnail.title
  );

  // If no similar in same category, show other thumbnails
  const displaySimilar = similarThumbnails.length > 0 
    ? similarThumbnails 
    : allThumbnails.filter((t) => t.title !== thumbnail.title).slice(0, 3);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-2 border-border bg-background p-0">
        <div className="grid gap-0 md:grid-cols-2">
          {/* Image Section */}
          <div className="aspect-video w-full overflow-hidden md:aspect-auto md:h-full">
            <img
              src={thumbnail.image}
              alt={thumbnail.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {thumbnail.category}
              </p>
              <DialogTitle className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {thumbnail.title}
              </DialogTitle>
            </DialogHeader>

            <div className="mb-6">
              <p className="mb-4 text-3xl font-bold text-foreground">${thumbnail.price}</p>
              <p className="text-muted-foreground">
                High-quality, custom-designed thumbnail optimized for maximum click-through rate. Includes source files and unlimited revisions.
              </p>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="mb-8 block border-2 border-foreground bg-primary py-3 text-center font-mono text-sm uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            >
              Order This Style
            </a>

            {/* Reviews */}
            <div className="border-t-2 border-border pt-6">
              <h4 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
                Client Reviews
              </h4>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border-l-2 border-border pl-4">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="font-medium text-foreground">{review.name}</span>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-foreground text-foreground" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Thumbnails */}
        {displaySimilar.length > 0 && (
          <div className="border-t-2 border-border p-6 md:p-8">
            <h4 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
              Similar Styles
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {displaySimilar.map((similar, index) => (
                <button
                  key={index}
                  onClick={() => onSelectThumbnail(similar)}
                  className="group overflow-hidden border-2 border-border transition-all hover:border-foreground"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={similar.image}
                      alt={similar.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-secondary p-2">
                    <p className="truncate text-sm font-medium text-foreground">{similar.title}</p>
                    <p className="font-mono text-xs text-muted-foreground">${similar.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ThumbnailModal;
