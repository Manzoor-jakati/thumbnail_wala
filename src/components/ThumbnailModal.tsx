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
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto border-2 border-border bg-background p-0">
        {/* Main Content - Horizontal YouTube-style layout */}
        <div className="flex flex-col">
          {/* Top Section: Large Image + Details Side by Side */}
          <div className="flex flex-col lg:flex-row">
            {/* Large Image - Takes more space */}
            <div className="aspect-video w-full lg:w-2/3">
              <img
                src={thumbnail.image}
                alt={thumbnail.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details Panel */}
            <div className="flex flex-col p-6 lg:w-1/3">
              <DialogHeader className="mb-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {thumbnail.category}
                </p>
                <DialogTitle className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  {thumbnail.title}
                </DialogTitle>
              </DialogHeader>

              <p className="mb-4 text-2xl font-bold text-foreground">₹{thumbnail.price}</p>
              <p className="mb-6 text-sm text-muted-foreground">
                High-quality, custom-designed thumbnail optimized for maximum click-through rate. Includes source files and unlimited revisions.
              </p>

              <a
                href="#contact"
                onClick={onClose}
                className="mb-6 block border-2 border-foreground bg-primary py-3 text-center font-mono text-sm uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
              >
                Order This Style
              </a>

              {/* Reviews in sidebar */}
              <div className="border-t-2 border-border pt-4">
                <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-foreground">
                  Client Reviews
                </h4>
                <div className="space-y-3">
                  {reviews.slice(0, 2).map((review, index) => (
                    <div key={index} className="border-l-2 border-border pl-3">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{review.name}</span>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-2.5 w-2.5 fill-foreground text-foreground" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Similar Thumbnails - Horizontal Row at Bottom */}
          {displaySimilar.length > 0 && (
            <div className="border-t-2 border-border p-6">
              <h4 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground">
                Similar Styles
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {displaySimilar.slice(0, 3).map((similar, index) => (
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThumbnailModal;
