import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    fullWidth?: boolean;
    showChevron?: boolean;
    showWhatsApp?: boolean;
    className?: string;
    target?: string;
    rel?: string;
}

export function Button({
    children,
    href,
    onClick,
    variant = "primary",
    fullWidth = false,
    showChevron = false,
    showWhatsApp = false,
    className = "",
    target,
    rel,
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/50 active:scale-[0.98]";

    const variants = {
        primary: "bg-brand-dark text-black/90 shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:-translate-y-0.5",
        secondary: "bg-white text-black/90 border border-slate-200 hover:bg-slate-50",
        outline: "bg-transparent text-white border-2 border-white/20 hover:bg-white/5 hover:border-white/40",
    };

    const widthStyle = fullWidth ? "w-full" : "";
    const combinedClassName = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

    const content = (
        <>
            {showWhatsApp && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                    <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
                </svg>
            )}
            {children}
            {showChevron && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
        </>
    );

    if (href) {
        const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("mailto:") || href.startsWith("tel:");

        if (isExternal) {
            return (
                <a
                    href={href}
                    className={combinedClassName}
                    target={target || "_blank"}
                    rel={rel || "noopener noreferrer"}
                    onClick={onClick}
                >
                    {content}
                </a>
            );
        }

        return (
            <Link href={href} className={combinedClassName} onClick={onClick}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} onClick={onClick}>
            {content}
        </button>
    );
}
