import Image from "next/image";

const CLIENTS = [
    { name: "B-Square Dental", logo: "/assets/clients/b-square-dental.png" },
    { name: "Golawala", logo: "/assets/clients/golawala.png" },
    { name: "Jalaram Dryfruit", logo: "/assets/clients/jalaram_dryfruit.png" },
    { name: "Khodiyar Dhaba", logo: "/assets/clients/khodiyar-dhaba.png" },
    { name: "Raghuvanshi", logo: "/assets/clients/raghuvanshi.png" },
    { name: "Smiling Teeth", logo: "/assets/clients/smiling-teeth.png" },
];

export function ClientSlider() {
    return (
        <div className="w-full py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <p className="text-black/30 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Trusted By</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                    Big Brands <span className="text-brand-dark">Get Social</span> With Us
                </h3>
            </div>

            <div className="container mx-auto px-6">
                <div className="relative overflow-hidden group">
                    <div className="animate-marquee flex w-max items-center gap-12 md:gap-20 whitespace-nowrap py-4">
                        {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="relative w-32 h-16 md:w-48 md:h-24 transition-all duration-300 hover:scale-110 flex-shrink-0"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
