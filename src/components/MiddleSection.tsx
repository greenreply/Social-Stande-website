"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ArrowUp, Scan, MapPin, MessageSquare, TrendingUp, Shield, Zap } from "lucide-react";

// ─── Utility: useInView ───────────────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref}>
      <span>{prefix}{count.toLocaleString()}{suffix}</span>
    </div>
  );
}

// ─── Stars Component ──────────────────────────────────────────────────────────
function Stars({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
      ))}
    </div>
  );
}

// ─── SECTION 1: Product Showcase ──────────────────────────────────────────────
function ProductShowcase() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Left: Visual Mockups */}
          <div className="relative flex items-center justify-center order-1 md:order-1">
            <div className="relative w-full max-w-md mx-auto h-80 md:h-96">
              {/* Soft background blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8f0d8]/40 to-[#a8e6c0]/20 rounded-3xl blur-2xl" />

              {/* Phone mockup - left */}
              <div className="absolute left-4 md:left-8 top-4 bottom-4 w-36 md:w-44 z-10">
                <div className="relative w-full h-full bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-gray-800">
                  {/* Phone screen - Google Review page */}
                  <div className="w-full h-full bg-white flex flex-col">
                    {/* Status bar */}
                    <div className="bg-gray-100 px-3 py-1.5 flex justify-between items-center">
                      <span className="text-[8px] font-semibold text-gray-700">9:41</span>
                      <div className="flex gap-0.5">
                        <div className="w-3 h-1.5 bg-gray-700 rounded-sm" />
                        <div className="w-1 h-1.5 bg-gray-700 rounded-sm" />
                      </div>
                    </div>
                    {/* Browser bar */}
                    <div className="bg-white border-b border-gray-200 px-2 py-1.5">
                      <div className="bg-gray-100 rounded-full px-2 py-0.5 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-[6px] text-gray-600 truncate">google.com/maps</span>
                      </div>
                    </div>
                    {/* Google Review content */}
                    <div className="flex-1 p-2 bg-white">
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-[5px] text-white font-bold">G</span>
                        </div>
                        <span className="text-[6px] font-bold text-gray-800">Google</span>
                      </div>
                      <div className="bg-gray-50 rounded p-1.5 mb-1.5">
                        <div className="text-[7px] font-bold text-gray-900 mb-0.5">Rate & Review</div>
                        <div className="text-[6px] text-gray-500 mb-1">Your Cafe Name</div>
                        <div className="flex gap-0.5 mb-1">
                          {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded p-1">
                        <div className="text-[6px] text-gray-400">Write a review...</div>
                        <div className="mt-1 flex justify-end">
                          <div className="bg-blue-600 rounded-full px-1.5 py-0.5">
                            <span className="text-[5px] text-white font-bold">Post</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standee mockup - right */}
              <div className="absolute right-0 md:right-4 top-8 bottom-0 w-36 md:w-44 z-20">
                <div className="relative w-full h-full flex flex-col items-center">
                  {/* Counter surface */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 bg-gradient-to-b from-gray-200 to-gray-300 rounded-sm shadow-lg" />
                  {/* Standee body */}
                  <div className="relative w-28 md:w-32 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 mb-2" style={{ marginTop: "8px" }}>
                    {/* Standee header */}
                    <div className="bg-[#2d6a4f] rounded-xl p-2 mb-2 text-center">
                      <p className="text-[7px] font-black text-white tracking-wide">SCAN & REVIEW</p>
                    </div>
                    {/* QR Code placeholder */}
                    <div className="bg-gray-50 border-2 border-dashed border-[#2d6a4f]/40 rounded-lg aspect-square flex items-center justify-center mb-2">
                      <div className="w-full h-full p-1.5">
                        {/* Simple QR pattern */}
                        <div className="grid grid-cols-7 gap-0.5 w-full h-full">
                          {Array.from({ length: 49 }).map((_, i) => {
                            const pattern = [0,1,1,0,1,0,1, 1,0,0,1,0,1,0, 1,1,0,0,1,1,1, 0,0,1,0,1,0,0, 1,0,1,1,0,1,1, 0,1,0,1,0,0,1, 1,0,1,0,1,1,0];
                            return <div key={i} className={`${pattern[i] ? "bg-gray-900" : "bg-white"} rounded-[1px]`} />;
                          })}
                        </div>
                      </div>
                    </div>
                    {/* Stars */}
                    <div className="flex justify-center gap-0.5 mb-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <div className="text-center">
                      <p className="text-[6px] text-gray-500 font-medium">Leave us a review!</p>
                    </div>
                    {/* Standee logo area */}
                    <div className="mt-1.5 pt-1.5 border-t border-gray-100 text-center">
                      <p className="text-[5px] font-black text-[#2d6a4f] tracking-widest uppercase">Social Standee</p>
                    </div>
                  </div>
                  {/* Standee pole */}
                  <div className="w-1.5 bg-gradient-to-b from-gray-300 to-gray-400 flex-1 rounded-full" />
                  {/* Standee base */}
                  <div className="w-16 h-2 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-2 right-8 z-30 bg-white rounded-2xl shadow-lg px-3 py-2 border border-gray-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Star className="w-3 h-3 fill-white text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-gray-900">+38 Reviews</p>
                    <p className="text-[7px] text-gray-400">this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-2 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2d6a4f]/10 border border-[#2d6a4f]/20 mb-6">
              <Star className="w-3.5 h-3.5 fill-black text-black" />
              <span className="text-xs font-semibold text-black tracking-tight">Google Reviews Made Easy</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
              Turn Walk-Ins Into{" "} <br />
              <span className="text-brand-dark relative">
                5-Star Reviews
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#2d6a4f" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
                </svg>
              </span>
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
              <p>Most customers check Google reviews before choosing a business. But many don't leave reviews because it feels complicated.</p>
              <p className="font-semibold text-gray-800">Social Standee makes it simple.</p>
              <p>Customers just scan the QR code and directly land on your Google review page. No typing. No searching. No confusion.</p>
              <p>It increases reviews naturally. More reviews build more trust. More trust brings more customers.</p>
              <p className="font-semibold text-[#2d6a4f]">All from your counter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2: Before vs After ───────────────────────────────────────────────
function BeforeAfter() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            The Difference Is Clear
          </h2>
          <p className="text-gray-500 mt-3 text-base">See what Social Standee does for your business</p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* BEFORE */}
          <div className="relative bg-white rounded-3xl p-8 border border-gray-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/50" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 mb-6">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Before</span>
              </div>
              <h3 className="text-xl font-black text-gray-700 mb-6">Without Social Standee</h3>

              {/* Fake review count - sad */}
              <div className="bg-gray-100 rounded-2xl p-5 mb-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300" />
                  <div>
                    <p className="text-sm font-black text-gray-500">Your Business</p>
                    <p className="text-xs text-gray-400">12 reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black text-gray-400">2.8</span>
                  <div>
                    <Stars rating={3.5} />
                    <p className="text-xs text-gray-400 mt-0.5">12 Google reviews</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {["Few Google reviews", "Low customer trust", "Customers forget to review", "Weak online presence"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-500 text-sm">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <span className="text-gray-400 text-xs font-bold">✕</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AFTER */}
          <div className="relative bg-white rounded-3xl p-8 border border-[#2d6a4f]/20 overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f0faf4] to-[#e8f5ed]/50" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d6a4f]/15 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2d6a4f]" />
                <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider">After</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-6">With Social Standee</h3>

              {/* Fake review count - happy */}
              <div className="bg-white rounded-2xl p-5 mb-6 border border-[#2d6a4f]/15 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-900">Your Business</p>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs text-gray-500">120+ reviews</p>
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-green-600 font-bold">
                        <ArrowUp className="w-2.5 h-2.5 animate-bounce" /> Growing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black text-gray-900">4.8</span>
                  <div>
                    <Stars rating={5} />
                    <p className="text-xs text-gray-500 mt-0.5">120+ Google reviews</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {["More 5-star reviews", "Higher customer trust", "Easy review process", "Strong online visibility"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3: Why It Works ──────────────────────────────────────────────────
function WhyItWorks() {
  const { ref, inView } = useInView(0.1);

  const reasons = [
    { icon: Zap, label: "It takes effort", desc: "Most review platforms require too many steps" },
    { icon: MessageSquare, label: "They forget", desc: "By the time they're home, the moment is gone" },
    { icon: MapPin, label: "They can't find you", desc: "Searching your business name is frustrating" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2d6a4f]/10 border border-[#2d6a4f]/20 mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span className="text-xs font-semibold text-[#2d6a4f]">The Psychology</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Why It Works
          </h2>

          <p className="text-gray-500 text-lg mb-16 max-w-xl mx-auto">
            People don't leave reviews because of friction. We remove it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {reasons.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#2d6a4f]/30 hover:shadow-md transition-all duration-200 text-left">
                <div className="w-10 h-10 rounded-xl bg-brand-light group-hover:bg-white flex items-center justify-center mb-4 group-hover:bg-[#2d6a4f]/10 transition-colors">
                  <Icon className="w-5 h-5 text-white group-hover:text-brand-light transition-colors" />
                </div>
                <p className="font-bold text-gray-800 mb-1 text-sm">{label}</p>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* The solution callout */}
          <div className="bg-[#2d6a4f] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10">
              <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-4">Our Solution</p>
              <p className="text-2xl md:text-3xl font-black mb-2">One Standee</p>
              <p className="text-3xl md:text-4xl font-black text-white/90 mb-6">
                
                <span className="text-amber-300">Endless Review.</span>
              </p>
              <p className="text-white/60 text-lg">That's it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 4: How It Works ──────────────────────────────────────────────────
function HowItWorks() {
  const { ref, inView } = useInView(0.1);

  const steps = [
    { num: "01", icon: MapPin, title: "Customer visits your shop", desc: "They walk in, look around, and notice your Social Standee on the counter." },
    { num: "02", icon: Scan, title: "They scan the QR code", desc: "One quick scan with their phone camera — no app needed." },
    { num: "03", icon: Star, title: "They leave a review instantly", desc: "They land directly on your Google review page. Simple, fast, done." },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2d6a4f]/10 border border-[#2d6a4f]/20 mb-6">
            <span className="text-xs font-semibold text-[#2d6a4f]">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-500 mt-3">3 steps. That's all it takes.</p>
        </div>

        <div
          ref={ref}
          className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-[#2d6a4f]/40 to-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map(({ num, icon: Icon, title, desc }, i) => (
              <div
                key={num}
                className="group flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-[#2d6a4f]/20 flex items-center justify-center shadow-md group-hover:border-[#2d6a4f] group-hover:shadow-lg transition-all duration-200">
                    <Icon className="w-9 h-9 text-[#2d6a4f]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-dark flex items-center justify-center shadow-sm">
                    <span className="text-[10px] font-black text-white">{num}</span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/918140961702"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark text-black px-8 py-4 rounded-2xl font-bold text-base hover:bg-[#1e4d38] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <span>Order on WhatsApp</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"/>
              <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 5: Social Proof Counter ─────────────────────────────────────────
function SocialProof() {
  const { ref, inView } = useInView(0.2);

  const stats = [
    { value: 5000, prefix: "+", suffix: "", label: "QR Scans", sub: "and counting" },
    { value: 1200, prefix: "+", suffix: "", label: "Reviews Generated", sub: "for our clients" },
    { value: 300, prefix: "+", suffix: "", label: "Businesses", sub: "already using it" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-black">Real Numbers</p>
          <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
            Trusted by Businesses Across India
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {stats.map(({ value, prefix, suffix, label, sub }) => (
            <div key={label} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-200">
                <div className="text-5xl md:text-6xl font-black text-brand-dark mb-1 tabular-nums">
                  {inView ? (
                    <AnimatedCounter target={value} prefix={prefix} suffix={suffix} />
                  ) : (
                    <span>{prefix}0{suffix}</span>
                  )}
                </div>
                <p className="text-black font-bold text-lg mb-1">{label}</p>
                <p className="text-black text-sm">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust text */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
          </div>
          <p className="text-white/70 text-base">Helping local businesses grow their Google presence, one scan at a time.</p>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function MiddleSections() {
  return (
    <>
      <ProductShowcase />
      <BeforeAfter />
      <WhyItWorks />
      <HowItWorks />
      <SocialProof />
    </>
  );
}