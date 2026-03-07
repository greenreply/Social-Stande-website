"use client";

import { Star, MessageSquare } from "lucide-react";

export function Testimonials() {
    const reviews = [
        {
            name: "Rajesh Kumar",
            role: "Restaurant Owner",
            content: "We've seen a 300% increase in our Google reviews since we placed Social Standees on every table. It actually works!",
        },
        {
            name: "Priya Sharma",
            role: "Salon Manager",
            content: "Customers find it so easy to just tap their phone. No more awkward asking for reviews.",
        },
        {
            name: "Dr. Amit Varma",
            role: "Clinic Director",
            content: "A game changer for patient trust. Our Google rating went from 4.1 to 4.8 in just two months.",
        }
    ];

    return (
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        What <span className="text-yellow-400">Business Owners</span> Say
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Join hundreds of happy business owners.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-white text-lg mb-8 leading-relaxed italic">
                                "{review.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{review.name}</h4>
                                    <p className="text-gray-500 text-sm">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
