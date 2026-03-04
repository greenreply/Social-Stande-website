"use client";

import { useInView } from "@/hooks/useInView";
import { MessageSquare, MapPin, Zap, Star } from "lucide-react";

export function WhyItWorks() {
    const { ref, inView } = useInView(0.1);

    const reasons = [
        {
            icon: Zap,
            label: "It takes effort",
            desc: "Most review platforms require too many steps",
        },
        {
            icon: MessageSquare,
            label: "They forget",
            desc: "By the time they're home, the moment is gone",
        },
        {
            icon: MapPin,
            label: "They can't find you",
            desc: "Searching your business name is frustrating",
        },
    ];

    return (
        <section className="py-10 md:py-14 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <div
                    ref={ref}
                    className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
                        Why It Works
                    </h2>

                    <p className="text-gray-500 text-lg mb-16 max-w-xl mx-auto">
                        People don't leave reviews because of friction. We remove it.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {reasons.map(({ icon: Icon, label, desc }) => (
                            <div
                                key={label}
                                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-dark/30 hover:shadow-md transition-all duration-200 text-left"
                            >
                                <div className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center mb-4 transition-colors">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <p className="font-bold text-gray-800 mb-1 text-sm">{label}</p>
                                <p className="text-gray-500 text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-white/10 bg-gray-950">

                        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-dark/10 blur-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-left">
                            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <Star className="w-9 h-9 text-brand-dark fill-brand-dark" />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <p className="text-brand-dark text-xs font-bold tracking-widest uppercase mb-3">
                                    Our Solution
                                </p>
                                <p className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
                                    One Standee.{" "}
                                    <span className="text-brand-dark">Endless Reviews.</span>
                                </p>
                                <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg">
                                    Place it on your counter once. Every customer who taps or scans it goes
                                    straight to your Google review page no friction, no confusion.
                                </p>

                                {/* Mini stat row */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-white/10">
                                    {[
                                        { num: "3sec", label: "to leave a review" },
                                        { num: "0", label: "apps needed" },
                                        { num: "100%", label: "Google verified" },
                                    ].map(({ num, label }) => (
                                        <div key={label} className="text-center md:text-left">
                                            <p className="text-2xl font-black text-brand-dark">{num}</p>
                                            <p className="text-xs text-white/40 font-medium">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}