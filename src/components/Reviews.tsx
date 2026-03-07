import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Neelkanth Hotel",
        role: "Ahmedabad",
        text: "After placing Social Standee, our Google reviews tripled in just one month. It's the best investment for local growth.",
        impact: "3x More Reviews in 30 Days",
        rating: 5
    },
    {
        name: "Smiling Teeth",
        role: "Ahmedabad",
        text: "Patients love the ease of NFC tap. We've seen a 40% jump in positive feedback without even asking for it.",
        impact: "40% Feedback Increase",
        rating: 5
    },
    {
        name: "B-Square Dental",
        role: "Ahmedabad",
        text: "Simple, elegant, and effective. It makes our clinic look tech-forward while building massive online trust.",
        impact: "Built Massive Online Trust",
        rating: 5
    },
    {
        name: "Epoch Hair Salon",
        role: "Ahmedabad",
        text: "The easiest way to convert happy walk-ins into 5-star Google stars. Our business is thriving locally.",
        impact: "Easiest Review Conversion",
        rating: 5
    }
];

export function Reviews() {
    return (
        <section id="reviews" className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Real Impact stories</h2>
                    <p className="text-black/40 text-[11px] font-black uppercase tracking-[0.3em]">Loved by premium brands in Ahmedabad</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 relative group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                            <Quote className="absolute top-8 right-8 h-10 w-10 text-brand-dark/10 group-hover:text-brand-dark/30 transition-colors" />
                            <div className="text-xs font-black text-brand-dark uppercase tracking-widest mb-6 bg-brand-dark/5 py-1.5 px-3 rounded-full inline-block">
                                {review.impact}
                            </div>
                            <p className="text-black/70 mb-10 text-lg font-medium leading-relaxed italic">"{review.text}"</p>
                            <div>
                                <h4 className="font-extrabold text-black tracking-tight">{review.name}</h4>
                                <p className="text-xs font-black text-black/40 uppercase tracking-widest mt-1">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto py-10 px-8 bg-brand-dark rounded-3xl text-center transform hover:scale-[1.02] transition-all duration-300">
                    <p className="text-black text-2xl md:text-3xl font-black leading-tight italic">
                        "This standee is the missing link between offline service and online reputation."
                    </p>
                    <p className="text-black/60 text-sm font-bold mt-4 uppercase tracking-[0.2em]">
                        — Client Review from Sanand, Nearby Ahmedabad
                    </p>
                </div>
            </div>
        </section>
    );
}
