import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl">
            <div className="container mx-auto px-6 h-28 flex items-center justify-center">
                <Link href="/" className="relative w-56 h-14 transition-transform hover:scale-105">
                    <Image
                        src="/assets/Logo.png"
                        alt="Social Standee Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>
        </header>
    );
}
