"use client";

import { Wifi, QrCode, Palette, Smartphone, ShieldCheck } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Wifi className="w-6 h-6 text-brand-dark" />,
      title: "NFC Tap Technology",
      description:
        "Fastest way to collect reviews. Just a tap and the review page is ready.",
    },
    {
      icon: <QrCode className="w-6 h-6 text-brand-dark" />,
      title: "QR Code Backup",
      description:
        "For older phones without NFC, a high-quality QR code is always available.",
    },
    {
      icon: <Palette className="w-6 h-6 text-brand-dark" />,
      title: "Custom Branding",
      description: "Personalized standees with your business logo and colors.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-brand-dark" />,
      title: "Universal Compatibility",
      description: "Works seamlessly with both Android and iPhone devices.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-dark" />,
      title: "Durable Acrylic",
      description:
        "Premium, water-resistant acrylic standee designed for high-traffic areas.",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Premium Build. <br />
              <span className="text-brand-dark">Smart Technology.</span>
            </h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-brand-dark/50 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="w-full aspect-square bg-gradient-to-br from-brand-dark/20 to-transparent rounded-[3rem] border border-white/10 p-12 flex flex-col items-center justify-center relative overflow-visible">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 rounded-[3rem]" />
              <div className="relative z-10 w-64 h-80 bg-zinc-900 rounded-3xl border-2 border-white/20 shadow-2xl flex flex-col items-center justify-center p-6 transform hover:scale-105 transition-transform duration-500">
                <div className="w-16 h-16 bg-brand-dark rounded-full mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(250,217,87,0.3)]">
                  <Wifi className="text-black w-8 h-8" />
                </div>
                <div className="text-white font-black text-center mb-8 tracking-tighter uppercase leading-none">
                  <span className="text-2xl">Tap To</span>
                  <br />
                  <span className="text-4xl text-brand-dark">Review</span>
                </div>
                <div className="w-24 h-24 bg-white rounded-xl p-2 mb-4">
                  <QrCode className="w-full h-full text-black" />
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Social Standee Premium
                </p>
              </div>

              <div
                className="w-48 h-5 rounded-md"
                style={{
                  background:
                    "linear-gradient(180deg, #f5d060 0%, #c9960c 40%, #a87500 100%)",
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              />
              <div
                className="w-44 h-2 rounded-b-md"
                style={{
                  background:
                    "linear-gradient(180deg, #7a5500 0%, #5a3e00 100%)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
                }}
              />

              {/* Floating tags */}
              {/* <div className="absolute top-1/4 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl animate-float">
                <p className="text-white text-xs font-bold">NFC Built-in</p>
              </div>
              <div className="absolute bottom-1/4 left-10 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl animate-float-slow">
                <p className="text-white text-xs font-bold">Premium Acrylic</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
