"use client";

export function TrustedBy() {
    const industries = [
        "Restaurants", "Salons", "Clinics", "Gyms", "Retail Shops", "Hotels"
    ];

    return (
        <section className="py-12 bg-black border-b border-white/10">
            <div className="container mx-auto px-6">
                <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">
                    Trusted by Top Businesses In
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                    {industries.map((industry) => (
                        <span key={industry} className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                            {industry}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
