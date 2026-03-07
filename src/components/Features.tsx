import { Scan, Wifi, ShieldCheck, Zap, Layers, Smartphone } from "lucide-react";

export function Features() {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-6">

                {/* How it works */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#253A4E] mb-6">How It Works</h2>
                    <p className="text-lg text-gray-600 mx-auto">
                        Social Standee creates a seamless bridge between your offline store and online presence.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            icon: <Wifi className="h-10 w-10 text-[#253A4E]" />,
                            title: "1. Tap or Scan",
                            desc: "Customers simply tap their phone on the NFC standee or scan the QR Code."
                        },
                        {
                            icon: <Zap className="h-10 w-10 text-[#253A4E]" />,
                            title: "2. Instant Link",
                            desc: "Your Social Media page, Google Review form, or Payment link opens instantly."
                        },
                        {
                            icon: <ShieldCheck className="h-10 w-10 text-[#253A4E]" />,
                            title: "3. Grow Business",
                            desc: "Get more followers, better reviews, and faster payments without friction."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#253A4E] mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Product Quality */}
                <div className="bg-[#253A4E] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Last. Designed to Impress.</h2>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Layers className="h-6 w-6 text-blue-300" />
                                    <span className="text-lg">Premium 2mm Acrylic Sheet</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Smartphone className="h-6 w-6 text-blue-300" />
                                    <span className="text-lg">Magic Tap: Just tap to connect instantly</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Scan className="h-6 w-6 text-blue-300" />
                                    <span className="text-lg">High-Definition QR Code Printing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="h-6 w-6 text-blue-300" />
                                    <span className="text-lg">Waterproof & Scratch Resistant</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center">
                                <p className="text-gray-400">Product Image Preview</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
