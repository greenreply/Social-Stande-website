"use client";

import { useInView } from "@/hooks/useInView";
import { Stars } from "./Stars";
import { ArrowUp, Star } from "lucide-react";

export function BeforeAfter() {
    const { ref, inView } = useInView(0.1);

    return (
        <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                        The Difference Is Clear
                    </h2>
                    <p className="text-gray-500 mt-3 text-base">
                        See what Social Standee does for your business
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    {/* BEFORE */}
                    <div className="relative bg-white rounded-3xl p-8 border border-gray-200 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/50" />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 mb-6">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    Before
                                </span>
                            </div>
                            <h3 className="text-xl font-black text-gray-700 mb-6">
                                Without Social Standee
                            </h3>

                            <div className="bg-gray-100 rounded-2xl p-5 mb-6 border border-gray-200">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                                    <div>
                                        <p className="text-sm font-black text-gray-500">
                                            Your Business
                                        </p>
                                        <p className="text-xs text-gray-400">12 reviews</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-3xl font-black text-gray-400">2.8</span>
                                    <div>
                                        <Stars rating={3.5} />
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            12 Google reviews
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    "Few Google reviews",
                                    "Low customer trust",
                                    "Customers forget to review",
                                    "Weak online presence",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-gray-500 text-sm"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                            <span className="text-gray-400 text-xs font-bold">✕</span>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* AFTER */}
                    <div className="relative bg-white rounded-3xl p-8 border border-[#2d6a4f]/20 overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f0faf4] to-[#e8f5ed]/50" />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d6a4f]/15 mb-6">
                                <div className="w-2 h-2 rounded-full bg-[#2d6a4f]" />
                                <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider">
                                    After
                                </span>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-6">
                                With Social Standee
                            </h3>

                            <div className="bg-white rounded-2xl p-5 mb-6 border border-[#2d6a4f]/15 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center">
                                        <Star className="w-4 h-4 fill-white text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-gray-900">
                                            Your Business
                                        </p>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-xs text-gray-500">120+ reviews</p>
                                            <span className="inline-flex items-center gap-0.5 text-[10px] text-green-600 font-bold">
                                                <ArrowUp className="w-2.5 h-2.5 animate-bounce" />{" "}
                                                Growing
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-3xl font-black text-gray-900">4.8</span>
                                    <div>
                                        <Stars rating={5} />
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            120+ Google reviews
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    "More 5-star reviews",
                                    "Higher customer trust",
                                    "Easy review process",
                                    "Strong online visibility",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
                                            <span className="text-white text-xs font-bold">✓</span>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
