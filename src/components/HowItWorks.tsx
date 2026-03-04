"use client";

import { useInView } from "@/hooks/useInView";
import { MapPin, QrCode, Star } from "lucide-react";
import { Button } from "./Button";

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
            icon: QrCode,
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
        <section id="how-it-works" className="py-10 md:py-14 bg-white overflow-hidden">
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
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-[#2d6a4f]/40 to-gray-200" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {steps.map(({ num, icon: Icon, title, desc }, i) => (
                            <div
                                key={num}
                                className="group flex flex-col items-center text-center"
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 rounded-full bg-white border-2 border-black/10 flex items-center justify-center shadow-md group-hover:border-brand-dark group-hover:shadow-lg transition-all duration-200">
                                        <Icon className="w-9 h-9 text-black" />
                                    </div>
                                    <div className="absolute -top-2 right-0 w-7 h-7 rounded-full bg-brand-dark flex items-center justify-center shadow-sm">
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

                <div className="text-center mt-14">
                    <Button
                        href="https://wa.me/918140961702"
                        showWhatsApp
                        fullWidth
                        className="sm:w-auto"
                    >
                        Order on WhatsApp
                    </Button>
                </div>
            </div>
        </section>
    );
}
