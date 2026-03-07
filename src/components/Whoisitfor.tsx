"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const PROFILES = [
  {
    id: "restaurant",
    title: "Restaurants & Cafes",
    subtitle: "Turn every meal into a 5-star review",
    description:
      "Your food speaks for itself now let customers say it online. Place the standee on every table and watch reviews pour in while they're still enjoying their meal.",
    tags: ["Dine-in", "Takeaway", "Cloud Kitchen"],
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6">
        <path d="M12 8v10c0 4.418 3.582 8 8 8s8-3.582 8-8V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 8v10M16 8v10M24 8v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 26v14M14 40h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 8c0 0 4 4 4 12s-4 12-4 12v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "retail",
    title: "Retail Stores",
    subtitle: "Convert footfall into online trust",
    description:
      "Every customer who walks out happy is a potential reviewer. The standee near the billing counter makes it effortless one tap, and they've left your review.",
    tags: ["Clothing", "Electronics", "General Store"],
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6">
        <path d="M8 20V38a2 2 0 002 2h28a2 2 0 002-2V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 12h36l-3 8H9l-3-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 40V28h8v12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 20v3a3 3 0 01-6 0v-3M26 20v3a3 3 0 01-6 0v-3M38 20v3a3 3 0 01-6 0v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "salon",
    title: "Salons & Spas",
    subtitle: "Let your craft speak for itself",
    description:
      "After a great haircut or relaxing treatment, customers feel good. That's the perfect moment. The standee at checkout makes leaving a review feel as natural as a thank-you.",
    tags: ["Hair Salon", "Beauty Parlour", "Spa & Wellness"],
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6">
        <path d="M16 8c-4 4-4 10 0 14l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 26l10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 30l6-2 8 8-4 4-8-8 2-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="18" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "doctor",
    title: "Clinics & Doctors",
    subtitle: "Build trust before they even walk in",
    description:
      "New patients check reviews before booking. A standee in your waiting room lets satisfied patients share their experience with one tap no app, no friction.",
    tags: ["General Physician", "Dental Clinic", "Eye Care"],
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6">
        <rect x="10" y="8" width="28" height="32" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M24 18v12M18 24h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 8V6a2 2 0 014 0v2M28 8V6a2 2 0 014 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "hotel",
    title: "Hotels & Stays",
    subtitle: "More stars online, more bookings offline",
    description:
      "Guests decide where to stay based on reviews. Place the standee at checkout or in the lobby happy guests become your best marketing, effortlessly.",
    tags: ["Hotel", "Homestay", "Guest House"],
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6">
        <path d="M8 40V16l16-8 16 8v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="20" y="28" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="13" y="22" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="29" y="22" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "service",
    title: "Service Professionals",
    subtitle: "Your reputation is your business card",
    description:
      "Electricians, plumbers, CA firms, agencies if you do great work, your clients should say so. The standee or NFC tap at job completion captures it instantly.",
    tags: ["Electrician", "CA / Consultant", "Agency"],
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6">
        <path d="M30 10l8 8-18 18H12v-8L30 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M26 14l8 8" stroke="currentColor" strokeWidth="2" />
        <path d="M10 40h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhoIsItFor() {
  const [active, setActive] = useState(PROFILES[0].id);
  const activeProfile = PROFILES.find((p) => p.id === active)!;

  return (
    <section id="features" className="bg-gray-950 py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Eyebrow + Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
              Built For
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Find yourself<br />
            <span className="text-brand-dark">in this list.</span>
          </h2>

          <p className="text-base text-white/50 leading-relaxed">
            Social Standee works for any business that serves customers in person.
            If people visit you, they can review you instantly.
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden flex overflow-x-auto gap-3 pb-8 scrollbar-hide no-scrollbar">
          {PROFILES.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setActive(profile.id)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full border text-sm font-bold transition-all duration-300 ${active === profile.id
                ? "bg-brand-dark border-brand-dark text-black"
                : "bg-white/5 border-white/10 text-white/60"
                }`}
            >
              {profile.title}
            </button>
          ))}
        </div>

        {/* Two column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

          {/* LEFT — list */}
          <div className="hidden lg:block order-2 lg:order-1">
            <div className="mb-4">
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-8 h-[1px] bg-white/10" />
                Browse by business type
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {PROFILES.map((profile) => {
                const isActive = active === profile.id;
                return (
                  <li key={profile.id}>
                    <button
                      onClick={() => setActive(profile.id)}
                      aria-pressed={isActive}
                      className={`w-full group flex items-center justify-between px-6 py-4 rounded-xl border text-left transition-all duration-300
                        ${isActive
                          ? "bg-white/5 border-brand-dark border-l-[3px] shadow-lg lg:translate-x-2"
                          : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                        }`}
                    >
                      <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300
                          ${isActive ? "bg-brand-dark text-black" : "bg-white/5 text-white/30 group-hover:text-white/60"}`}
                        >
                          {profile.svg}
                        </div>

                        <div>
                          <p className={`text-base font-bold transition-colors duration-300 ${isActive ? "text-brand-dark" : "text-white/80 group-hover:text-white"}`}>
                            {profile.title}
                          </p>
                          <p className={`text-xs mt-0.5 transition-colors duration-300 ${isActive ? "text-brand-dark/60" : "text-white/30"}`}>
                            {profile.subtitle}
                          </p>
                        </div>
                      </div>

                      <ArrowRight className={`w-5 h-5 text-brand-dark transition-all duration-300 transform 
                        ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT — detail card */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-32">
            <div key={active} className="animate-in fade-in slide-in-from-right-8 duration-500 relative bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 overflow-hidden flex flex-col justify-between min-h-[400px]">

              {/* Soft glow */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-brand-dark/10 blur-3xl pointer-events-none" />

              <div>
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-black mb-8 shadow-xl shadow-brand-dark/10">
                  {activeProfile.svg}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                  {activeProfile.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-black text-brand-dark uppercase tracking-[0.2em] mb-6">
                  {activeProfile.subtitle}
                </p>

                {/* Description */}
                <p className="text-lg text-white/60 leading-relaxed mb-10">
                  {activeProfile.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {activeProfile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
