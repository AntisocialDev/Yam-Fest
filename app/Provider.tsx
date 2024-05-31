'use client'

import { useEffect, useState } from 'react';
import AppFooter from "@/components/AppFooter";
import bg1 from '../public/images/bg1.png'
import bg2 from '../public/images/bg2.png'
import bg3 from '../public/images/bg3.png'
import bg4 from '../public/images/bg4.png'
import Image, { StaticImageData } from 'next/image';


export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    const bgImages: StaticImageData[] = [
        bg1,
        bg2,
        bg3,
        bg4
    ];

    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 4000);
        document.body.style.setProperty('--background-image-url', `url(${bgImages[currentBgIndex].src})`);
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
        {/* Preload images */}
        {bgImages.map((bgImage, index) => (
           <Image className='hidden' src={bgImage.src} alt='' width={100} height={100}></Image>
        ))}
    </body>
    );
}
