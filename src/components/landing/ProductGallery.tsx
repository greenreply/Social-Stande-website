"use client";

export function ProductGallery() {
    const images = [
        { title: "NFC Tap Example", color: "from-brand-dark/10 to-transparent" },
        { title: "QR Scan Example", color: "from-blue-500/10 to-transparent" },
        { title: "Restaurant Placing", color: "from-purple-500/10 to-transparent" },
        { title: "Salon Counter", color: "from-emerald-500/10 to-transparent" },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        See It In <span className="text-brand-dark">Action</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our premium acrylic standees look great on any counter and are built to last.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <div key={index} className={`aspect-[3/4] rounded-3xl bg-gradient-to-br ${img.color} border border-white/10 flex items-center justify-center p-6 group overflow-hidden relative`}>
                            <div className="text-white/20 font-bold group-hover:scale-110 transition-transform duration-500 text-center">
                                {img.title}
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold">View Real Image</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
