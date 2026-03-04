"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Header() {
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const getHeroHeight = () => window.innerHeight;

        const handleScroll = () => {
            if (ticking.current) return;
            ticking.current = true;

            requestAnimationFrame(() => {
                const currentY = window.scrollY;
                const delta = currentY - lastScrollY.current;
                const HERO = getHeroHeight();

                setScrolled(currentY > 10);

                if (currentY < HERO) {
                    // Inside hero — always show
                    setVisible(true);
                    if (hideTimer.current) clearTimeout(hideTimer.current);
                } else if (delta > 2) {
                    // Past hero, scrolling DOWN → hide
                    setVisible(false);
                    if (hideTimer.current) clearTimeout(hideTimer.current);
                } else if (delta < -8) {
                    // Scrolling UP anywhere → show, then auto-hide after 3s
                    setVisible(true);
                    if (hideTimer.current) clearTimeout(hideTimer.current);
                    hideTimer.current = setTimeout(() => {
                        setVisible(false);
                    }, 3000);
                }

                lastScrollY.current = currentY;
                ticking.current = false;
            });
        };

        // Click anywhere (outside header) also brings it back
        const handleClick = (e: MouseEvent) => {
            const currentY = window.scrollY;
            if (currentY < getHeroHeight()) return;
            if ((e.target as HTMLElement)?.closest("header")) return;

            setVisible(true);
            if (hideTimer.current) clearTimeout(hideTimer.current);
            hideTimer.current = setTimeout(() => {
                setVisible(false);
            }, 4000);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("click", handleClick);
            if (hideTimer.current) clearTimeout(hideTimer.current);
        };
    }, []);

    return (
        <header
            style={{
                position: "fixed",
                top: "1rem",
                left: "50%",
                transform: `translateX(-50%) translateY(${visible ? "0" : "-160%"})`,
                transition: "transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1), box-shadow 0.3s ease",
                zIndex: 9999,
                width: "min(660px, calc(100vw - 2rem))",
                borderRadius: "9999px",
                background: "#ffffff",
                border: scrolled
                    ? "1.5px solid rgba(0,0,0,0.08)"
                    : "1.5px solid rgba(0,0,0,0.06)",
                boxShadow: scrolled
                    ? "0 8px 30px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07)"
                    : "0 4px 20px rgba(0,0,0,0.08)",
            }}
            aria-label="Site header"
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.5rem 2rem",
                    height: "4.25rem",
                }}
            >
                <Link
                    href="/"
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
                    }
                    aria-label="Social Standee – home"
                >
                    <div style={{ position: "relative", width: "195px", height: "50px" }}>
                        <Image
                            src="/assets/Logo.png"
                            alt="Social Standee Logo"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>
                </Link>
            </div>
        </header>
    );
}