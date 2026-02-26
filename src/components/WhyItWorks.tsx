"use client";

import { useInView } from "@/hooks/useInView";
import { MessageSquare, MapPin, TrendingUp, Zap, Star } from "lucide-react";

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
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <div
                    ref={ref}
                    className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2d6a4f]/10 border border-[#2d6a4f]/20 mb-6">
                        <TrendingUp className="w-3.5 h-3.5 text-[#2d6a4f]" />
                        <span className="text-xs font-semibold text-[#2d6a4f]">
                            The Psychology
                        </span>
                    </div>

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
                                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#2d6a4f]/30 hover:shadow-md transition-all duration-200 text-left"
                            >
                                <div className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center mb-4 transition-colors">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <p className="font-bold text-gray-800 mb-1 text-sm">{label}</p>
                                <p className="text-gray-500 text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-[#2d6a4f]/20 bg-white">
                        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-left">
                            <div className="shrink-0 w-20 h-20 rounded-2xl bg-brand-dark  flex items-center justify-center shadow-lg shadow-[#2d6a4f]/20">
                                <Star className="w-9 h-9 fill-white text-white" />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">
                                    Our Solution
                                </p>
                                <p className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
                                    One Standee.{" "}
                                    <span className="text-brand-dark">Endless Reviews.</span>
                                </p>
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
                                    Place it on your counter once. Every customer who taps or scans it goes
                                    straight to your Google review page — no friction, no confusion.
                                </p>

                                {/* Mini stat row */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-[#2d6a4f]/10">
                                    {[
                                        { num: "3sec", label: "to leave a review" },
                                        { num: "0", label: "apps needed" },
                                        { num: "100%", label: "Google verified" },
                                    ].map(({ num, label }) => (
                                        <div key={label} className="text-center md:text-left">
                                            <p className="text-2xl font-black text-brand-dark">{num}</p>
                                            <p className="text-xs text-gray-500 font-medium">{label}</p>
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
