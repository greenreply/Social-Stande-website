"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STANDEES = [
    {
        url: "/assets/client_standee/epoch_salon.jpg",
        title: "Salon Standee",
        description: "Premium acrylic finish with custom QR and NFC integration."
    },
    {
        url: "/assets/client_standee/anmol_dryfruit.jpg",
        title: "Retail Standee",
        description: "Elegant counter-top presence for instant Google reviews."
    },
    {
        url: "/assets/client_standee/glowup_salon.jpg",
        title: "Beauty Salon Standee",
        description: "Sleek design that matches high-end interiors perfectly."
    },
    {
        url: "/assets/client_standee/bharvi_dentist.jpg",
        title: "Clinic Standee",
        description: "Professional look for medical and healthcare reception desks."
    },
    {
        url: "/assets/client_standee/golawala.jpg",
        title: "Food Outlet Standee",
        description: "Durable and water-resistant for busy food service areas."
    },
    {
        url: "/assets/client_standee/jalaram_dryfruit.jpg",
        title: "Shop Standee",
        description: "Boost your local SEO with effortless customer feedback."
    },
    {
        url: "/assets/client_standee/parth_dentist.jpg",
        title: "Dental Clinic Standee",
        description: "Sleek and professional presence for medical reception."
    }
];

export function ProductGallery() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(progress);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            const scrollTo = direction === "left"
                ? scrollLeft - scrollAmount
                : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        handleScroll();
        // Add listener for window resize to recalculate progress if needed
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    return (
        <section className="py-16 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        See It In <span className="text-brand-dark">Action</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
                        Our premium acrylic standees look great on any counter and are built to last.
                    </p>
                </div>

                <div className="relative group max-w-7xl mx-auto">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute -left-4 md:-left-12 top-[45%] -translate-y-1/2 w-14 h-14 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-dark hover:text-black hover:scale-110 z-30 shadow-[0_0_30px_rgba(0,0,0,0.5)] hidden md:flex"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute -right-4 md:-right-12 top-[45%] -translate-y-1/2 w-14 h-14 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-dark hover:text-black hover:scale-110 z-30 shadow-[0_0_30px_rgba(0,0,0,0.5)] hidden md:flex"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Scrollable Track */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-12 px-4"
                    >
                        {STANDEES.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveMobileIndex(activeMobileIndex === index ? null : index)}
                                className="min-w-[75%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%] aspect-[9/16] relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 snap-center group/slide flex-shrink-0 cursor-pointer"
                            >
                                <Image
                                    src={item.url}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover/slide:scale-105"
                                    priority={index < 4}
                                />

                                {/* Bottom Gradient Overlay - Mobile click support added */}
                                <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 pt-16 transform transition-all duration-500 
                                    ${activeMobileIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'} 
                                    md:translate-y-2 md:opacity-0 md:group-hover/slide:translate-y-0 md:group-hover/slide:opacity-100`}
                                >
                                    <h3 className="text-white text-xl md:text-2xl font-black mb-1 uppercase tracking-tighter">
                                        {item.title}
                                    </h3>
                                    <p className="text-brand-dark text-xs font-bold uppercase tracking-widest leading-tight opacity-90">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Custom Scrollbar / Progress Bar */}
                    <div className="max-w-md mx-auto mt-4 px-10">
                        <div className="h-[2.5px] w-full bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-brand-dark transition-all duration-300 ease-out shadow-[0_0_15px_rgba(250,217,87,0.4)]"
                                style={{ width: `${Math.max(5, scrollProgress)}%` }}
                            />
                        </div>
                    </div>

                    {/* Mobile Hint */}
                    <div className="flex justify-center md:hidden mt-8">
                        <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
                            <span className="w-2 h-2 bg-brand-dark rounded-full animate-pulse" />
                            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black">
                                Swipe for more action
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
