"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Smartphone,
    Zap,
    Star,
    ArrowRight,
    CheckCircle2,
    Wifi,
    QrCode,
    TrendingUp
} from "lucide-react";

export default function HowItWorksPage() {
    const [scrolled, setScrolled] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const steps = [
        {
            id: "01",
            title: "Tap or Scan",
            description: "Your customer simply taps their phone on the NFC chip or scans the high-quality QR code. It takes less than 2 seconds.",
            icon: <Wifi className="w-8 h-8 text-brand-dark" />,
            color: "brand-dark"
        },
        {
            id: "02",
            title: "Instant Redirection",
            description: "No app, no typing, no searching. The precise review page for your business opens automatically on their browser.",
            icon: <Smartphone className="w-8 h-8 text-brand-dark" />,
            color: "brand-dark"
        },
        {
            id: "03",
            title: "5-Star Boom",
            description: "With the friction removed, customers are 10x more likely to leave a glowing review on the spot.",
            icon: <Star className="w-8 h-8 text-brand-dark" />,
            color: "brand-dark"
        }
    ];

    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-16">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-dark/5 blur-[120px] rounded-full opacity-50 transition-all duration-1000" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-dark/5 blur-[120px] rounded-full opacity-30 transition-all duration-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <div ref={heroRef} className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-dark/20 bg-brand-dark/5 text-brand-dark text-xs font-bold uppercase tracking-[0.2em] mb-8">
                        <Zap className="w-3 h-3 fill-brand-dark" />
                        <span>Seamless Tech • Guaranteed Results</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight uppercase">
                        The Science of <br />
                        <span className="text-brand-dark">Instant Reviews</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Say goodbye to "I'll do it later." Turn every happy customer into a 5-star rating with our frictionless NFC technology.
                    </p>
                </div>

                {/* Video Showcase - The Dual 9:16 Experience */}
                <div className="grid md:grid-cols-2 gap-12 mb-32 max-w-6xl mx-auto">
                    {/* NFC Video */}
                    <div className="group relative max-w-[320px] mx-auto w-full">
                        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            >
                                <source src="/assets/how-it-works/tap_video.mp4" type="video/mp4" />
                            </video>

                            {/* Overlay info */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 transform transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center shadow-lg">
                                        <Wifi className="w-5 h-5 text-black" />
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tight">NFC Experience</h3>
                                </div>
                                <p className="text-brand-dark/80 text-[10px] font-bold uppercase tracking-widest">
                                    Just tap to unlock reviews
                                </p>
                            </div>
                        </div>
                        {/* Shadow Glow */}
                        <div className="absolute -inset-4 bg-brand-dark/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* QR Video */}
                    <div className="group relative max-w-[320px] mx-auto w-full">
                        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            >
                                <source src="/assets/how-it-works/scan_video.mp4" type="video/mp4" />
                            </video>

                            {/* Overlay info */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 transform transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center border border-white/10 shadow-lg">
                                        <QrCode className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tight">QR Experience</h3>
                                </div>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                                    Universal scan backup
                                </p>
                            </div>
                        </div>
                        {/* Shadow Glow */}
                        <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                </div>

                {/* Step Matrix - Visual Logic */}
                <div className="mb-32">
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                            The Frictionless <span className="text-brand-dark">Flow</span>
                        </h2>
                        <div className="w-16 h-1 bg-brand-dark mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group p-10 rounded-[2rem] bg-zinc-950 border border-white/5 hover:border-brand-dark/20 transition-all duration-500">
                                <span className="absolute -top-6 -right-4 text-7xl font-black text-white/5 select-none tracking-tighter">
                                    {step.id}
                                </span>
                                <div className="mb-8 w-16 h-16 bg-brand-dark/10 rounded-2xl flex items-center justify-center border border-brand-dark/20 group-hover:bg-brand-dark group-hover:text-black transition-all">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-dark transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Powerful Conversion Card */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative p-12 md:p-20 rounded-[3rem] overflow-hidden border border-brand-dark/20 bg-gradient-to-br from-zinc-900 to-black text-center shadow-2xl">
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-dark/10 blur-[80px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark/5 blur-[80px] -z-10" />

                        <TrendingUp className="w-12 h-12 text-brand-dark mx-auto mb-8 animate-bounce transition-transform" />

                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-[1.1] md:px-12">
                            Stop Losing <span className="text-brand-dark">Social Proof</span> Every Second
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                            Every happy customer who leaves without reviewing is a missed growth opportunity. Take control of your reputation today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/order"
                                className="w-full sm:w-auto px-10 py-5 bg-brand-dark hover:bg-brand-dark/90 text-black font-black rounded-xl transition-all flex items-center justify-center group text-lg uppercase tracking-tight shadow-[0_0_30px_rgba(250,217,87,0.3)]"
                            >
                                Get Started Now
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link
                                href="https://wa.me/918140961702"
                                className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center border border-white/10 text-lg uppercase tracking-tight"
                            >
                                Ask a Question
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-6 text-gray-600 font-bold uppercase tracking-widest text-[10px]">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-dark" />
                                <span>No Subscription</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-dark" />
                                <span>Lifetime Validity</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Spacing Fix */}
                <div className="h-20" />
            </div>

            <style jsx>{`
                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
