"use client";

import { useInView } from "@/hooks/useInView";
import { AnimatedCounter } from "./AnimatedCounter";
import { Star } from "lucide-react";

export function SocialProof() {
    const { ref, inView } = useInView(0.2);

    const stats = [
        {
            value: 1000,
            prefix: "",
            suffix: "+",
            label: "QR Scans",
            sub: "and counting",
        },
        {
            value: 500,
            prefix: "",
            suffix: "+",
            label: "Reviews Generated",
            sub: "for our clients",
        },
        {
            value: 50,
            prefix: "",
            suffix: "+",
            label: "Businesses",
            sub: "already using it",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
                        Trusted by Businesses Across India
                    </h2>
                </div>

                <div
                    ref={ref}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    {stats.map(({ value, prefix, suffix, label, sub }) => (
                        <div key={label} className="text-center group">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-200">
                                <div className="text-5xl md:text-6xl font-black text-brand-dark mb-1 tabular-nums">
                                    {inView ? (
                                        <AnimatedCounter
                                            target={value}
                                            prefix={prefix}
                                            suffix={suffix}
                                        />
                                    ) : (
                                        <span>
                                            {prefix}0{suffix}
                                        </span>
                                    )}
                                </div>
                                <p className="text-black font-bold text-lg mb-1">{label}</p>
                                <p className="text-black text-sm">{sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <p className="text-gray-500 text-base">
                        Helping local businesses grow their Google presence, one scan at a
                        time.
                    </p>
                </div>
            </div>
        </section>
    );
}
