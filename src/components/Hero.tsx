import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, QrCode } from "lucide-react";
import { Lottie } from "./Lottie";

export function Hero() {
    const icons = [
        { Icon: QrCode, className: "top-[10%] left-[5%] animate-float-slow text-brand-dark/10" },
        { Icon: MessageCircle, className: "top-[20%] right-[8%] animate-float text-brand-dark/10" }, // WhatsApp
        { Icon: Instagram, className: "bottom-[15%] left-[8%] animate-float-delayed text-brand-dark/10" },
        { Icon: Facebook, className: "top-[45%] right-[5%] animate-float-slow text-brand-dark/10" },
        { Icon: Youtube, className: "bottom-[25%] right-[12%] animate-float text-brand-dark/10" },
        { Icon: Linkedin, className: "top-[25%] left-[15%] animate-float-delayed text-brand-dark/10" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/20 border border-brand-dark/10 mb-10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-dark opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-dark"></span>
                        </span>
                        <span className="text-sm font-semibold text-black/80 tracking-tight">Grow Your Social Media Today</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-bold tracking-tight leading-[1.1] mb-8 flex flex-wrap items-center justify-center gap-x-6">
                        <span className="text-brand-dark">Smart NFC & QR Standee</span>

                        <div className="relative group shrink-0">
                            <div className="absolute inset-0 bg-brand-dark/20 blur-xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500"></div>
                            {/* <Lottie height={120} width={120} className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" /> */}
                        </div>

                        <span>for Business Growth</span>
                    </h1>

                    <p className="text-md md:text-3xl text-black/50 mb-12 font-medium tracking-tight max-w-3xl">
                        Simple for Customers, Powerful for Businesses
                        {/* <br className="hidden sm:block" /> */} {" "}
                        <br />
                        <span className="text-brand-dark font-bold">Tap. Scan. Grow.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
