'use client'

import { useEffect, useState } from 'react';
import AppFooter from "@/components/AppFooter";

const bgImages: string[] = [
    '/images/bg2.svg',
    '/images/bg3.svg',
    '/images/bg4.svg',
    '/images/home-bg1.svg',
];

export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 4000);
        document.body.style.setProperty('--background-image-url', `url(${bgImages[currentBgIndex]})`);
        return () => clearInterval(interval);
    }, [currentBgIndex]);

    return (
        <body className="antialiased">
            <div className="flex flex-col gap-20 justify-between">
                <main>
                    {children}
                </main>
                <AppFooter />
            </div>
        </body>
    );
}
