"use client";

import { useInView } from "@/hooks/useInView";
import { Star } from "lucide-react";
import Image from "next/image";

export function ProductShowcase() {
    const { ref, inView } = useInView(0.1);

    return (
        <section id="features" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div
                    ref={ref}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    {/* Left: Visual Mockups */}
                    <div className="relative flex items-center justify-center order-1 md:order-1">
                        <div className="relative w-full max-w-sm mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#c8f0d8]/60 to-[#a8e6c0]/30 rounded-3xl blur-3xl scale-110" />

                            <div className="relative rounded-2xl border-2 border-[#2d6a4f]/20 overflow-hidden shadow-xl bg-transparent">
                                <div className="relative w-full aspect-[3/4]">
                                    <Image
                                        src="/assets/Standee.jpeg"
                                        alt="Google Review Standee Demo"
                                        fill
                                        className="object-cover mix-blend-multiply"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="order-2 md:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2d6a4f]/10 border border-[#2d6a4f]/20 mb-6">
                            <Star className="w-3.5 h-3.5 fill-brand-dark text-brand-dark" />
                            <span className="text-xs font-semibold text-black tracking-tight">
                                Google Reviews Made Easy
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
                            Turn Walk-Ins Into <br />
                            <span className="text-brand-dark relative">
                                5-Star Reviews
                                <svg
                                    className="absolute -bottom-1 left-0 w-full"
                                    viewBox="0 0 200 8"
                                    fill="none"
                                >
                                    <path
                                        d="M2 6C50 2 150 2 198 6"
                                        stroke="#2d6a4f"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        opacity="0.4"
                                    />
                                </svg>
                            </span>
                        </h2>

                        <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
                            <p>
                                Most customers check Google reviews before choosing a business.
                                But many don't leave reviews because it feels complicated.
                            </p>
                            <p className="font-semibold text-gray-800">
                                Social Standee makes it simple.
                            </p>
                            <p>
                                Customers just tap their phone or scan the QR code to land directly on your Google
                                review page. It works just like a contactless payment zero friction, zero confusion.
                            </p>
                            <p>
                                It increases reviews naturally. More reviews build more trust.
                                More trust brings more customers.
                            </p>
                            <p className="font-semibold text-brand-dark">
                                All from your counter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
