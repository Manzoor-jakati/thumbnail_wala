import { Star } from "lucide-react";

const reviews = [
  { name: "Mahesh D.", text: "CTR increased by 20%!", rating: 4.5 },
  { name: "Sarah K.", text: "Super fast delivery", rating: 5 },
  { name: "Md Rehan R.", text: "Professional results", rating: 4.8 },
  { name: "Joker T.", text: "Best thumbnail designer", rating: 5 },
  { name: "Emma W.", text: "Exceeded expectations", rating: 5 },
  { name: "dhruv R.", text: "Highly recommend!", rating: 4.7 },
  { name: "Laxman S.", text: "Amazing attention to detail", rating: 4.9 },
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
