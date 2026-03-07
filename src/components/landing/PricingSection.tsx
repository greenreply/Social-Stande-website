"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
    const plans = [
        {
            name: "Basic Standee",
            price: "₹999",
            features: [
                "Single NFC Standee",
                "QR Code Backup",
                "Standard Branding",
                "Works with Android & iOS",
                "Free Shipping"
            ],
            cta: "Order Now",
            popular: false
        },
        {
            name: "Premium Standee",
            price: "₹1,499",
            features: [
                "Single NFC Standee",
                "QR Code Backup",
                "Custom Logo Branding",
                "Premium Acrylic Finish",
                "Lifetime Link Management",
                "Free Shipping"
            ],
            cta: "Order Now",
            popular: true
        },
        {
            name: "Bulk Orders",
            price: "Custom",
            features: [
                "10+ Standees",
                "Wholesale Pricing",
                "White-label Option",
                "Dedicated Account Manager",
                "Priority Support",
                "Free Shipping"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Simple, <span className="text-brand-dark">Transparent</span> Pricing
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose the perfect plan for your business growth. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-[2.5rem] bg-zinc-950 border transition-all flex flex-col ${plan.popular ? "border-brand-dark scale-105 shadow-[0_0_50px_rgba(250,217,87,0.1)] relative" : "border-white/10"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-dark text-black text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-white">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-gray-500">/unit</span>}
                                </div>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-brand-dark/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-brand-dark" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-400 text-sm leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="https://wa.me/918140961702"
                                className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center group ${plan.popular ? "bg-brand-dark hover:bg-brand-dark/90 text-black" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                    }`}
                            >
                                {plan.cta}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
