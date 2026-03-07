"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "/how-it-works" },
        { name: "Reviews", href: "#reviews" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 transform ${visible ? "translate-y-0" : "-translate-y-full"
                    } ${scrolled ? "backdrop-blur-md border-b border-white/10 py-2 md:py-4" : "py-3 md:py-6"}`}
                style={{ backgroundColor: '#000000' }}
            >
                {/* Subtle Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-8 h-full relative z-10">
                    <div className="flex items-center justify-between md:justify-center relative h-full md:gap-16 lg:gap-24">

                        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
                            {navLinks.slice(0, 2).map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[14px] font-semibold text-white hover:text-brand-dark transition-all duration-300 tracking-widest uppercase"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="relative z-10">
                            <Link href="/" className="flex items-center group">
                                <div className={`relative transition-all duration-500 group-hover:scale-105 ${scrolled ? "w-32 md:w-40 h-11" : "w-40 md:w-56 h-11 md:h-12"
                                    }`}>
                                    <Image
                                        src="/assets/Dark SVG.svg"
                                        alt="Social Standee Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
                            {navLinks.slice(2).map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[14px] font-semibold text-white hover:text-brand-dark transition-all duration-300 tracking-widest uppercase"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex md:hidden items-center justify-end">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-3 text-brand-dark rounded-2xl transition-all duration-300"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998] md:hidden transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[75%] max-w-sm z-[99999] md:hidden transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ backgroundColor: '#0a0a0a' }}
            >
                {/* Menu Header */}
                <div
                    className="flex items-center justify-between px-8 py-7 border-b border-white/5"
                    style={{ backgroundColor: '#0a0a0a' }}
                >
                    <div className="relative w-32 h-10">
                        <Image
                            src="/assets/Dark SVG.svg"
                            alt="Social Standee Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-brand-dark rounded-xl transition-all duration-300"
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-2 p-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="w-full py-4 px-4 text-base font-bold text-white/70 hover:text-brand-dark transition-all duration-300 tracking-[0.1em] uppercase border-b border-white/5 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}