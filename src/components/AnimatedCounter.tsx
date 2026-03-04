"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

export function AnimatedCounter({
    target,
    prefix = "",
    suffix = "",
}: {
    target: number;
    prefix?: string;
    suffix?: string;
}) {
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
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else setCount(Math.floor(start));
        }, step);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <div ref={ref}>
            <span>
                {prefix}
                {count.toLocaleString()}
                {suffix}
            </span>
        </div>
    );
}
