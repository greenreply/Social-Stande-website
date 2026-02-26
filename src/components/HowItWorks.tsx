"use client";

import { useInView } from "@/hooks/useInView";
import { MapPin, Scan, Star } from "lucide-react";

export function HowItWorks() {
    const { ref, inView } = useInView(0.1);

    const steps = [
        {
            num: "01",
            icon: MapPin,
            title: "Customer visits your shop",
            desc: "They walk in, look around, and notice your Social Standee on the counter.",
        },
        {
            num: "02",
            icon: Scan,
            title: "They Tap or Scan",
            desc: "A simple tap (NFC) or a quick scan (QR). (Tip: Tap the top of your phone on the standee)",
        },
        {
            num: "03",
            icon: Star,
            title: "They leave a review",
            desc: "They land directly on your Google review page. It's that simple.",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2d6a4f]/10 border border-[#2d6a4f]/20 mb-6">
                        <span className="text-xs font-semibold text-[#2d6a4f]">
                            Simple Process
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-gray-500 mt-3">3 steps. That's all it takes.</p>
                </div>

                <div
                    ref={ref}
                    className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    {/* Desktop connector line */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-[#2d6a4f]/40 to-gray-200" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {steps.map(({ num, icon: Icon, title, desc }, i) => (
                            <div
                                key={num}
                                className="group flex flex-col items-center text-center"
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 rounded-full bg-white border-2 border-[#2d6a4f]/20 flex items-center justify-center shadow-md group-hover:border-[#2d6a4f] group-hover:shadow-lg transition-all duration-200">
                                        <Icon className="w-9 h-9 text-[#2d6a4f]" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-dark flex items-center justify-center shadow-sm">
                                        <span className="text-[10px] font-black text-white">
                                            {num}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight">
                                    {title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-14">
                    <a
                        href="https://wa.me/918140961702"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-brand-dark text-black px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                    >
                        <span>Order on WhatsApp</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                            <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
