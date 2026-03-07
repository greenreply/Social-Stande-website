"use client";

import { XCircle, Clock, AlertCircle } from "lucide-react";

export function ProblemSection() {
    const problems = [
        {
            icon: <Clock className="w-8 h-8 text-yellow-400" />,
            title: "Customers Forget",
            description: "Even happy customers forget to leave a review once they walk out your door."
        },
        {
            icon: <AlertCircle className="w-8 h-8 text-yellow-400" />,
            title: "Too Many Steps",
            description: "Searching for your business, finding the review button, and logging in takes too much effort."
        },
        {
            icon: <XCircle className="w-8 h-8 text-yellow-400" />,
            title: "Low Conversion",
            description: "Without a direct prompt at the point of sale, less than 1% of customers leave a review."
        }
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Why Getting Google Reviews is <span className="text-yellow-400">Hard</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Most businesses lose out on thousands of potential reviews because the process is friction-heavy.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all group">
                            <div className="mb-6 bg-yellow-400/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
