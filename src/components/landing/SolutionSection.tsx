"use client";

import { Smartphone, MousePointer2, Star } from "lucide-react";

export function SolutionSection() {
    const steps = [
        {
            number: "01",
            icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
            title: "Tap or Scan",
            description: "Customers tap their phone on the NFC chip or scan the QR code."
        },
        {
            number: "02",
            icon: <MousePointer2 className="w-8 h-8 text-yellow-400" />,
            title: "Auto-Opens Page",
            description: "Your business's Google review page opens instantly on their phone."
        },
        {
            number: "03",
            icon: <Star className="w-8 h-8 text-yellow-400" />,
            title: "Leave Review",
            description: "Customer leaves a 5-star review in seconds. No searching required."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        The <span className="text-yellow-400">Social Standee</span> Solution
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We've eliminated every barrier between your customer and your Google review page.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

                    {steps.map((step, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative mb-8 mx-auto w-24 h-24 bg-yellow-400/10 rounded-full border border-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400/20 transition-all">
                                <span className="absolute -top-4 -right-4 text-4xl font-black text-yellow-400/10 italic select-none">
                                    {step.number}
                                </span>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
