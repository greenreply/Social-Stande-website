import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Neelkanth Hotel",
        role: "Ahmedabad, India",
        text: "The Social Standee is so simple yet so powerful. It's transformed our counter, and our customers find it super easy to connect.",
        rating: 5
    },
    {
        name: "Smiling Teeth",
        role: "Ahmedabad, India",
        text: "I was impressed by how aesthetic it looks. It's not just a tool; it's a part of our branding. Effortless connection.",
        rating: 5
    },
    {
        name: "B-Square Dental Studio",
        role: "Ahmedabad, India",
        text: "Clean, modern, and exactly what we needed. Our Google reviews have seen a massive jump since we placed it.",
        rating: 5
    },
    {
        name: "Epoch Hair Salon",
        role: "Ahmedabad, India",
        text: "A masterpiece of design and utility. Every premium business needs this to thrive in the digital age.",
        rating: 5
    }
];

export function Reviews() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Testimonials</h2>
                    <p className="text-black/40 text-[11px] font-black uppercase tracking-[0.3em]">Loved by premium brands</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 relative group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                            <Quote className="absolute top-8 right-8 h-10 w-10 text-brand/10 group-hover:text-brand/30 transition-colors" />
                            <div className="flex gap-1 mb-8">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                                ))}
                            </div>
                            <p className="text-black/70 mb-10 text-lg font-medium leading-relaxed italic">"{review.text}"</p>
                            <div>
                                <h4 className="font-extrabold text-black tracking-tight">{review.name}</h4>
                                <p className="text-xs font-black text-brand-dark uppercase tracking-widest mt-1">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
