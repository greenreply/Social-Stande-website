"use client";

import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-black">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-brand-dark/10 to-transparent blur-3xl opacity-50" />
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/grid-me.png')",
                    opacity: 0.07,
                    maskImage: "radial-gradient(ellipse 55% 65% at 50% 50%, black 0%, black 61%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse 55% 65% at 50% 50%, black 0%, black 30%, transparent 70%)",
                }}
            />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-dark/30 bg-brand-dark/5 text-brand-dark text-sm font-medium mb-6 animate-fade-in">
                        <Star className="w-4 h-4 fill-brand-dark" />
                        <span>Trusted by 500+ Businesses Worldwide</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Get More <span className="text-brand-dark">Google Reviews</span> Instantly
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The smartest NFC Review Standee for your business. Let customers leave 5-star reviews with a simple NFC tap or QR scan. No app needed.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#pricing"
                            className="w-full sm:w-auto px-8 py-4 bg-brand-dark hover:bg-brand-dark/90 text-black font-bold rounded-xl transition-all flex items-center justify-center group"
                        >
                            Order Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all backdrop-blur-sm"
                        >
                            See How It Works
                        </Link>
                    </div>

                    {/* <div className="mt-16 relative">
                        <div className="relative mx-auto max-w-lg aspect-square bg-gradient-to-br from-brand-dark/20 to-transparent rounded-3xl border border-white/10 flex items-center justify-center p-8 backdrop-blur-3xl shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-brand-dark/10 transition-colors" />
                            <div className="text-white/20 font-black text-8xl rotate-12 select-none">SOCIAL STANDEE</div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-64 bg-gray-800 rounded-2xl border-4 border-brand-dark shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center p-4 relative">
                                    <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center mb-4">
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
                    </div> */}
                </div>
            </div>
        </section>
    );
}