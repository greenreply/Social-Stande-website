import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, QrCode, Wifi, ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function Hero() {
    const icons = [
        { Icon: QrCode, className: "top-[15%] left-[10%] animate-float-slow text-brand-dark/20" },
        { Icon: Wifi, className: "top-[25%] right-[12%] animate-float text-white/20" },
        { Icon: Instagram, className: "bottom-[20%] left-[15%] animate-float-delayed text-brand-dark/20" },
        { Icon: Facebook, className: "top-[50%] right-[8%] animate-float-slow text-white/10" },
        { Icon: Youtube, className: "bottom-[30%] right-[15%] animate-float text-brand-dark/10" },
        { Icon: Linkedin, className: "top-[40%] left-[5%] animate-float-delayed text-white/10" },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-start md:items-center justify-center bg-black overflow-hidden pt-32 md:pt-28">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#facc1515_1px,transparent_1px),linear-gradient(to_bottom,#facc1515_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_60%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-dark/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none animate-float-slow" />

            {icons.map(({ Icon, className }, index) => (
                <div key={index} className={`absolute pointer-events-none hidden md:block ${className}`}>
                    <Icon className="w-12 h-12" />
                </div>
            ))}

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="flex flex-col items-center">

                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 group hover:border-brand-dark/50 transition-colors duration-300">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-dark opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-dark"></span>
                        </span>
                        <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
                            Grow Your Business Today
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-white">
                        <span className="text-brand-dark">Smart NFC & QR Standee</span><br className="" />
                        <span>for Business Growth</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white mb-12 font-medium tracking-tight leading-relaxed">
                        Simple for Customers, Powerful for Businesses
                        <br />
                        <span className="text-brand-dark font-bold">Scan. Connect. Grow.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 items-center mb-16">
                        <Button
                            href="https://wa.me/918140961702"
                            showChevron
                        >
                            Get Started Now
                        </Button>
                    </div>

                </div>
            </div>

        </section>
    );
}
