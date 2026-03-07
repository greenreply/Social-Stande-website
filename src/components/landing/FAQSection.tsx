"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
    const faqs = [
        {
            question: "How does NFC review standee work?",
            answer: "The standee has a built-in NFC (Near Field Communication) chip. When a customer taps their smartphone on the standee, the chip sends a signal to the phone to open your specific Google review page instantly."
        },
        {
            question: "Do customers need an app?",
            answer: "No! Customers do not need to download any app. NFC and QR scanning are native features in modern smartphones."
        },
        {
            question: "Does it work on all smartphones?",
            answer: "Yes. All modern iPhones (iPhone 7 and newer) and almost all Android phones support NFC. For older devices, the high-quality QR code on the standee serves as a perfect backup."
        },
        {
            question: "Can the standee be customized?",
            answer: "Absolutely! Our Premium Standee allows for custom branding including your business logo, colors, and specific call-to-action text."
        }
    ];

    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="text-brand-dark">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Everything you need to know about Social Standee.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 text-left flex items-center justify-between bg-zinc-950 hover:bg-zinc-900 transition-colors"
            >
                <span className="text-lg font-bold text-white">{question}</span>
                {isOpen ? <Minus className="text-brand-dark" /> : <Plus className="text-brand-dark" />}
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="p-6 bg-zinc-950 text-gray-400 border-t border-white/5 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}
