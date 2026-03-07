"use client";

import { Wifi, QrCode, Palette, Smartphone, ShieldCheck } from "lucide-react";

export function FeaturesSection() {
    const features = [
        {
            icon: <Wifi className="w-6 h-6 text-yellow-400" />,
            title: "NFC Tap Technology",
            description: "Fastest way to collect reviews. Just a tap and the review page is ready."
        },
        {
            icon: <QrCode className="w-6 h-6 text-yellow-400" />,
            title: "QR Code Backup",
            description: "For older phones without NFC, a high-quality QR code is always available."
        },
        {
            icon: <Palette className="w-6 h-6 text-yellow-400" />,
            title: "Custom Branding",
            description: "Personalized standees with your business logo and colors."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-yellow-400" />,
            title: "Universal Compatibility",
            description: "Works seamlessly with both Android and iPhone devices."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-yellow-400" />,
            title: "Durable Acrylic",
            description: "Premium, water-resistant acrylic standee designed for high-traffic areas."
        }
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Premium Build. <br />
                            <span className="text-yellow-400">Smart Technology.</span>
                        </h2>
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-yellow-400/50 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="w-full aspect-square bg-gradient-to-br from-yellow-400/20 to-transparent rounded-[3rem] border border-white/10 p-12 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                            <div className="relative z-10 w-64 h-80 bg-zinc-900 rounded-3xl border-2 border-white/20 shadow-2xl flex flex-col items-center justify-center p-6 transform hover:scale-105 transition-transform duration-500">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(250,217,87,0.3)]">
                                    <Wifi className="text-black w-8 h-8" />
                                </div>
                                <div className="text-white font-black text-center mb-8 tracking-tighter uppercase leading-none">
                                    <span className="text-2xl">Tap To</span><br />
                                    <span className="text-4xl text-yellow-400">Review</span>
                                </div>
                                <div className="w-24 h-24 bg-white rounded-xl p-2 mb-4">
                                    <QrCode className="w-full h-full text-black" />
                                </div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Social Standee Premium</p>
                            </div>

                            {/* Floating tags */}
                            <div className="absolute top-1/4 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl animate-float">
                                <p className="text-white text-xs font-bold">NFC Built-in</p>
                            </div>
                            <div className="absolute bottom-1/4 left-10 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl animate-float-slow">
                                <p className="text-white text-xs font-bold">Premium Acrylic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
