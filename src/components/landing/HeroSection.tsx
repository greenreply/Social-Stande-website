"use client";

import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-yellow-400/10 to-transparent blur-3xl opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/5 text-yellow-400 text-sm font-medium mb-6 animate-fade-in">
                        <Star className="w-4 h-4 fill-yellow-400" />
                        <span>Trusted by 500+ Businesses Worldwide</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Get More <span className="text-yellow-400">Google Reviews</span> Instantly
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The smartest NFC Review Standee for your business. Let customers leave 5-star reviews with a simple NFC tap or QR scan. No app needed.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#pricing"
                            className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition-all flex items-center justify-center group"
                        >
                            Order Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all backdrop-blur-sm"
                        >
                            See How It Works
                        </Link>
                    </div>

                    <div className="mt-16 relative">
                        {/* Product image placeholder or illustrative graphic */}
                        <div className="relative mx-auto max-w-lg aspect-square bg-gradient-to-br from-yellow-400/20 to-transparent rounded-3xl border border-white/10 flex items-center justify-center p-8 backdrop-blur-3xl shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-yellow-400/5 group-hover:bg-yellow-400/10 transition-colors" />
                            <div className="text-white/20 font-black text-8xl rotate-12 select-none">SOCIAL STANDEE</div>
                            {/* We'll use an image or an icon representation here */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-64 bg-gray-800 rounded-2xl border-4 border-yellow-400 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center p-4 relative">
                                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-black font-bold text-xs">NFC</span>
                                    </div>
                                    <div className="w-32 h-32 bg-white rounded-lg mb-4 flex items-center justify-center p-2">
                                        <div className="grid grid-cols-4 grid-rows-4 gap-1 w-full h-full opacity-30">
                                            {[...Array(16)].map((_, i) => (
                                                <div key={i} className="bg-black rounded-sm" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-medium">SCAN QR TO REVIEW</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
