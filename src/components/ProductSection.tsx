import Image from "next/image";
import { QrCode, Smartphone, Users, MapPin } from "lucide-react";

export function ProductSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 bg-black/5 text-black/80 px-4 py-1.5 rounded-full mb-6 border border-black/5">
                            <QrCode className="h-4 w-4 text-brand-dark" />
                            <span className="text-[11px] font-black uppercase tracking-widest">Connect Effortlessly</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
                            Connection Made <span className="text-brand-dark italic">Instantly.</span>
                        </h2>

                        <p className="text-lg text-black/60 mb-10 leading-relaxed font-medium">
                            <span className="font-bold text-black">Social Standee</span> is created for businesses
                            that want to make connecting effortless. Place it at your counter or event —
                            your visitors <span className="underline decoration-brand decoration-4 underline-offset-4">tap or scan once</span> and instantly connect.
                        </p>

                        <div className="grid grid-cols-1 gap-8 mb-12">
                            <div className="flex items-start gap-5 group">
                                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center transition-all group-hover:bg-brand">
                                    <Smartphone className="h-7 w-7 text-brand-dark group-hover:text-black" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-black text-lg md:text-xl tracking-wide">
                                        Follow
                                    </h3>
                                    <p className="text-black/50 text-sm md:text-base font-medium">
                                        Grow your social media instantly
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center transition-all group-hover:bg-brand">
                                    <Users className="h-7 w-7 text-brand-dark group-hover:text-black" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-black text-lg md:text-xl tracking-wide">
                                        Review
                                    </h3>
                                    <p className="text-black/50 text-sm md:text-base font-medium">
                                        Boost your Google ratings
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center transition-all group-hover:bg-brand">
                                    <Sparkles className="h-7 w-7 text-brand-dark group-hover:text-black" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-black text-lg md:text-xl tracking-wide">
                                        Remember
                                    </h3>
                                    <p className="text-black/50 text-sm md:text-base font-medium">
                                        Stay top-of-mind always
                                    </p>
                                </div>
                            </div>

                        </div>


                        <div className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 flex flex-col md:flex-row items-center gap-4">
                            <div className="text-center md:text-left">
                                <p className="text-sm font-bold text-black">Simple for customers. <span className="text-brand-dark">Powerful for businesses.</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative group p-4 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px]">
                            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden">
                                <Image
                                    src="/assets/Standee.jpeg"
                                    alt="Social Standee Mockup"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

const Sparkles = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
    </svg>
);
