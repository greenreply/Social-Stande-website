import { Star } from "lucide-react";

export function Stars({ rating, max = 5 }: { rating: number; max?: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: max }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(rating) ? "fill-brand-dark text-brand-dark" : "text-gray-300"}`}
                />
            ))}
        </div>
    );
}
