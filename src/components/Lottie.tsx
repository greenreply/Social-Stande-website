import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieProps {
    height?: number | string;
    width?: number | string;
    className?: string;
}

export const Lottie = ({ height = 36, width = 36, className }: LottieProps) => {
    return (
        <div className={className}>
            <DotLottieReact
                src="https://lottie.host/cecdcb39-36b2-4350-b9dd-63648fd72ec6/6S9rXm1aN8.lottie"
                loop
                autoplay
                height={height}
                width={width}
            />
        </div>
    );
};
