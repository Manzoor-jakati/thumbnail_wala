import { Star } from "lucide-react";

const reviews = [
  { name: "Alex M.", text: "CTR increased by 40%!", rating: 5 },
  { name: "Sarah K.", text: "Super fast delivery", rating: 5 },
  { name: "Mike R.", text: "Professional results", rating: 5 },
  { name: "Jordan T.", text: "Best thumbnail designer", rating: 5 },
  { name: "Emma W.", text: "Exceeded expectations", rating: 5 },
  { name: "Chris P.", text: "Highly recommend!", rating: 5 },
  { name: "Lisa N.", text: "Amazing attention to detail", rating: 5 },
  { name: "David H.", text: "Quick turnaround time", rating: 5 },
];

const ReviewBar = () => {
  // Double the reviews for seamless loop
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden border-y-2 border-border bg-secondary py-4">
      <div className="animate-scroll flex gap-8">
        {doubledReviews.map((review, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap"
          >
            <div className="flex">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="font-medium text-foreground">{review.name}</span>
            <span className="text-muted-foreground">"{review.text}"</span>
            <span className="text-muted-foreground/50">•</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewBar;
