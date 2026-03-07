"use client";

import Link from "next/link";
import { Utensils, Scissors, Stethoscope, Dumbbell, Hotel, ShoppingBag, ArrowRight } from "lucide-react";

export function IndustryUseCases() {
    const industries = [
        {
            title: "Restaurant",
            icon: <Utensils className="w-8 h-8" />,
            link: "/google-review-standee-for-restaurant",
            description: "Place on dining tables or bill counters to get instant feedback."
        },
        {
            title: "Salon",
            icon: <Scissors className="w-8 h-8" />,
            link: "/google-review-standee-for-salon",
            description: "Boost your reputation right after a fresh haircut or service."
        },
        {
            title: "Clinic",
            icon: <Stethoscope className="w-8 h-8" />,
            link: "/google-review-standee-for-clinic",
            description: "Let patient trust show with authentic reviews at checkout."
        },
        {
            title: "Gym",
            icon: <Dumbbell className="w-8 h-8" />,
            link: "/google-review-standee-for-gym",
            description: "Turn workout gains into business gains with quick reviews."
        },
        {
            title: "Hotel",
            icon: <Hotel className="w-8 h-8" />,
            link: "/google-review-standee-for-hotel",
            description: "Make it easy for guests to share their stay experience."
        },
        {
            title: "Retail Store",
            icon: <ShoppingBag className="w-8 h-8" />,
            link: "/google-review-standee-for-retail",
            description: "Capture the excitement of a new purchase with a quick tap."
        }
    ];

    return (
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Perfect for <span className="text-yellow-400">Every Business</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Social Standee is designed to fit seamlessly into your workspace, no matter what you do.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <Link
                            key={index}
                            href={industry.link}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-400/30 transition-all flex flex-col items-start"
                        >
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all">
                                {industry.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {industry.description}
                            </p>
                            <div className="mt-auto flex items-center text-yellow-400 font-bold group-hover:translate-x-1 transition-transform">
                                Read More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
