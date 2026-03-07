"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
    return (
        <section className="py-16 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-dark/5 blur-[120px] rounded-full translate-y-1/2 scale-150" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-gradient-to-br from-zinc-900 to-black p-12 md:p-20 rounded-[3rem] border border-brand-dark/20 text-center max-w-5xl mx-auto shadow-2xl">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Start Getting More <br />
                        <span className="text-brand-dark text-glow">Google Reviews Today</span>
                    </h2>
                    <p className="text-brand-dark/10 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        Join 500+ businesses who are transforming their online reputation with 1 tap.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="#pricing"
                            className="w-full sm:w-auto px-10 py-5 bg-brand-dark hover:bg-brand-dark/90 text-black font-black rounded-2xl transition-all flex items-center justify-center group text-lg"
                        >
                            Order Your Social Standee
                            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="https://wa.me/918140961702"
                            className="w-full sm:w-auto px-10 py-5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center group text-lg"
                        >
                            <MessageCircle className="mr-2 w-6 h-6 text-green-500" />
                            Contact on WhatsApp
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .text-glow {
          text-shadow: 0 0 30px rgba(250, 217, 87, 0.3);
        }
      `}</style>
        </section>
    );
}
