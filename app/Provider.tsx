'use client'

import { useEffect, useState } from 'react';
import AppFooter from "@/components/AppFooter";

const bgImages: string[] = [
    '/images/bg1.png',
    '/images/bg2.png',
    '/images/bg3.png',
    '/images/bg4.png',
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
