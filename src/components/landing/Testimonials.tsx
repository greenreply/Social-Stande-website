"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
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
    },
    {
        name: "Suresh Patel",
        role: "Cafe Owner",
        content: "Elegant design and very easy to set up. Our customers love the NFC feature!",
    },
    {
        name: "Anjali Gupta",
        role: "Boutique Owner",
        content: "Perfect for our counter. It looks premium and helps us get reviews effortlessly.",
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 7000);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    return (
        <section className="py-16 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        What <span className="text-brand-dark">Business Owners</span> Say
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Join hundreds of happy business owners.
                    </p>
                </div>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Testimonial Card Slider */}
                    <div className="relative overflow-hidden min-h-[350px] md:min-h-[300px] flex items-center">
                        <div
                            className="flex transition-transform duration-700 ease-in-out w-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {REVIEWS.map((review, index) => (
                                <div key={index} className="min-w-full px-4">
                                    <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 relative group transition-all duration-500 hover:border-brand-dark/20">
                                        <div className="absolute top-2 left-12 w-12 h-12 bg-brand-dark rounded-2xl flex items-center justify-center shadow-lg transform">
                                            <MessageSquare className="w-6 h-6 text-black" />
                                        </div>

                                        <div className="flex gap-1 mb-8 pt-8">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-brand-dark text-brand-dark" />
                                            ))}
                                        </div>

                                        <p className="text-white text-xl md:text-2xl mb-10 leading-relaxed font-medium italic">
                                            "{review.content}"
                                        </p>

                                        <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                                            <div className="w-14 h-14 bg-gradient-to-br from-brand-dark/20 to-transparent rounded-full flex items-center justify-center border border-white/10 font-bold text-brand-dark text-xl">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="text-white text-lg font-bold uppercase tracking-tight">{review.name}</h4>
                                                <p className="text-gray-500 text-sm font-medium tracking-wide">{review.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows - Desktop only */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-dark hover:border-brand-dark transition-all hidden md:flex"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-dark hover:border-brand-dark transition-all hidden md:flex"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {REVIEWS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 rounded-full ${currentIndex === index
                                    ? "w-8 h-2 bg-brand-dark"
                                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
